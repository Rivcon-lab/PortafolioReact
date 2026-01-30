import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const SITE_URL = env.VITE_SITE_URL || 'https://rivcon.cl'
  const OG_IMAGE = `${SITE_URL}/assets/RCtransparente.png`

  return {
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Cristopher Rivera | Desarrollador Python y Automatización de Procesos',
          description: 'Portafolio de Cristopher Rivera. Desarrollador Python, automatización de procesos y RPA. Selenium, UiPath, herramientas que reducen tiempos y errores. Chile.',
          keywords: 'desarrollador python, automatización de procesos, RPA, Python Chile, Selenium, UiPath, Cristopher Rivera, automatización, portafolio programador Chile',
          author: 'Cristopher Rivera Concha',
          canonical: SITE_URL,
          ogImage: OG_IMAGE,
          siteName: 'Cristopher Rivera – Desarrollador Python y Automatización',
          // Schema.org JSON-LD — Python, automatización, RPA (perfil abierto)
          schemaPerson: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Cristopher Rivera Concha',
            url: SITE_URL,
            description: 'Desarrollador Python, automatización de procesos y RPA. Herramientas con Python, Selenium y UiPath que optimizan procesos. Portafolio Chile.',
            jobTitle: 'Desarrollador Python y Automatización de Procesos',
            knowsAbout: ['Python', 'Automatización de procesos', 'RPA', 'Selenium', 'UiPath'],
            sameAs: [
              'https://www.linkedin.com/in/cristopher-rivera-concha/',
              'https://github.com/CR-Rivcon',
            ],
          }),
          schemaWebSite: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Cristopher Rivera – Desarrollador Python y Automatización',
            url: SITE_URL,
            description: 'Portafolio de Cristopher Rivera. Desarrollador Python, automatización de procesos y RPA. Chile.',
            author: { '@type': 'Person', name: 'Cristopher Rivera Concha' },
          }),
        },
      },
    }),
  ],
  }
})
