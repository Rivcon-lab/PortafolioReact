/**
 * Post-build: pre-renderiza la SPA a HTML estático para SEO.
 * Uso: npm run build && npm run prerender
 */
import { spawn } from 'child_process'
import { writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 4173
const PREVIEW_URL = `http://localhost:${PORT}`

async function waitForPreview(ms = 8000) {
  const step = 500
  for (let i = 0; i < ms; i += step) {
    try {
      const res = await fetch(PREVIEW_URL)
      if (res.ok) return true
    } catch (_) {}
    await new Promise((r) => setTimeout(r, step))
  }
  return false
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('No existe dist/. Ejecuta primero: npm run build')
    process.exit(1)
  }

  console.log('Iniciando vite preview...')
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  })

  const ready = await waitForPreview()
  if (!ready) {
    console.error('El servidor de preview no respondió a tiempo.')
    preview.kill()
    process.exit(1)
  }

  console.log('Pre-renderizando con Puppeteer...')
  const puppeteer = await import('puppeteer')
  const browser = await puppeteer.default.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(PREVIEW_URL, { waitUntil: 'networkidle0', timeout: 20000 })
  await page.waitForSelector('.app', { timeout: 8000 }).catch(() => {})
  const html = await page.content()
  await browser.close()

  const indexPath = join(DIST, 'index.html')
  writeFileSync(indexPath, html, 'utf8')
  console.log('OK: dist/index.html actualizado con HTML pre-renderizado.')

  preview.kill('SIGTERM')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
