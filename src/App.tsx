import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import Formacion from './components/Formacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  // Datos del Navbar
  const datosNavbar = {
    logoSrc: '/assets/RCtransparente.png',
    enlaces: [
      { texto: 'Inicio', href: '#inicio' },
      { texto: 'Sobre Mí', href: '#sobre-mi' },
      { texto: 'Proyectos', href: '#proyectos' },
      { texto: 'Habilidades', href: '#habilidades' },
      { texto: 'Formación', href: '#formacion' },
      { texto: 'Contacto', href: '#contacto' }
    ]
  };

  // Datos del Banner
  const datosBanner = {
    nombreDestacado: 'Cristopher',
    nombreSecundario: 'Rivera Concha',
    descripcion: 'Desarrollador Python, automatización de procesos y RPA. Mi experiencia en gestión de personas y soporte TI me permite entender las ',
    textoResaltado: 'problemáticas reales de los usuarios y crear soluciones que optimizan procesos, reduciendo tiempos de ejecución hasta en un 90%.',
    botonPrimario: {
      texto: 'Ver Proyectos',
      href: 'https://github.com/CR-Rivcon'
    },
    botonSecundario: {
      texto: 'Descargar CV',
      href: '/docs/CV_Cristopher_Rivera.pdf'
    }
  };

  // Datos de Sobre Mí
  const datosSobreMi = {
    titulo: 'Sobre Mí',
    parrafos: [
      'Mi carrera comenzó en el mundo organizacional como Psicólogo, trabajando en reclutamiento y selección, capacitación y gestión administrativa. Esa experiencia me permitió identificar procesos repetitivos que consumían tiempo valioso y que podían automatizarse.',
      'Durante un año y medio trabajé como Soporte TI N1 y N2 en Entel. La alta demanda me llevó a automatizar el registro de tickets en ServiceNow con Python y Selenium; ahí nació mi foco en desarrollo Python y RPA.',
      'Hoy me dedico al desarrollo en Python, automatización de procesos y RPA. Creo herramientas que reducen tiempos y errores. Busco oportunidades como trainee o junior en desarrollo de software y automatización.'
    ],
    experiencias: [
      {
        icono: '🧠',
        titulo: 'Gestión de Personas',
        descripcion: 'Reclutamiento, selección, capacitación y comunicaciones internas'
      },
      {
        icono: '🖥️',
        titulo: 'Soporte TI N1/N2',
        descripcion: '1.5 años en Entel mientras estudiaba - Resolución de problemas'
      },
      {
        icono: '⚡',
        titulo: 'Automatización',
        descripcion: 'Desarrollo de herramientas para optimizar procesos repetitivos'
      }
    ]
  };

  // Datos de Proyectos
  const datosProyectos = {
    titulo: 'Proyectos',
    proyectos: [
      {
        icono: '📄',
        titulo: 'CurriCon - Analizador de CVs con IA',
        descripcion: 'Herramienta de escritorio para análisis masivo de currículums vitae con inteligencia artificial.',
        detalles: 'Desarrollado con Tkinter para la interfaz gráfica, pdfminer para extracción de texto de PDFs, conexión a API de IA (Claude) para análisis inteligente de datos, y openpyxl + pandas para generar resúmenes en Excel. Permite procesar entre 10-15 CVs en un 10% del tiempo original, reduciendo significativamente errores humanos.',
        tecnologias: [
          { nombre: 'Python', color: '#3776ab' },
          { nombre: 'Tkinter', color: '#ff6f00' },
          { nombre: 'pdfminer', color: '#d32f2f' },
          { nombre: 'Claude API', color: '#6b4fbb' },
          { nombre: 'pandas', color: '#150458' },
          { nombre: 'openpyxl', color: '#217346' }
        ],
        destacado: true
      },
      {
        icono: '🎫',
        titulo: 'Ticket-Auto - Automatización ServiceNow',
        descripcion: 'Sistema de automatización para gestión de tickets de soporte en ServiceNow.',
        detalles: 'Nacido de mi experiencia como Soporte TI en Entel. Utiliza Selenium para navegación web automatizada, Tkinter para interfaz de usuario y Google Sheets para lectura/escritura de datos. Incluye autocompletado por concurrencia de solicitudes, personalización de campos, y buscador inteligente que reconoce tipo de ticket por longitud. Redujo el tiempo de registro a 1/3 del original.',
        tecnologias: [
          { nombre: 'Python', color: '#3776ab' },
          { nombre: 'Selenium', color: '#43b02a' },
          { nombre: 'Tkinter', color: '#ff6f00' },
          { nombre: 'Google Sheets API', color: '#0f9d58' }
        ],
        destacado: true
      },
      {
        icono: '📝',
        titulo: 'Generador de Documentos',
        descripcion: 'Procesamiento masivo de documentos Word mediante plantillas y placeholders.',
        detalles: 'Lee datos desde archivos Excel locales y genera documentos Word personalizados mediante placeholders en plantillas .docx. Permite procesar por volumen según filas, generando 50 documentos en 5 minutos tras clasificar la información en la base de datos.',
        tecnologias: [
          { nombre: 'Python', color: '#3776ab' },
          { nombre: 'python-docx', color: '#2b579a' },
          { nombre: 'openpyxl', color: '#217346' },
          { nombre: 'pandas', color: '#150458' }
        ]
      },
      {
        icono: '🏠',
        titulo: 'Smart Home - Automatización IoT',
        descripcion: 'Hogar inteligente con microcontroladores y flujos de automatización.',
        detalles: 'Implementación de domótica usando ESP32 y ESP8266 con Arduino IDE y framework Tasmota. Flujos de automatización en Node-RED con protocolo MQTT para comunicación. Control de luces, sensores de movimiento, emisores infrarrojos y cortinas smart.',
        tecnologias: [
          { nombre: 'ESP32', color: '#e7352c' },
          { nombre: 'Arduino', color: '#00979d' },
          { nombre: 'Tasmota', color: '#1fa3ec' },
          { nombre: 'Node-RED', color: '#8f0000' },
          { nombre: 'MQTT', color: '#660066' }
        ]
      },
      {
        icono: '🤖',
        titulo: 'RPA con UiPath',
        descripcion: 'Formalización de procesos de automatización empresarial.',
        detalles: 'Actualmente estudiando UiPath para llevar la automatización de procesos (RPA) a nivel profesional. Objetivo: implementar soluciones empresariales escalables basadas en la experiencia previa con Python.',
        tecnologias: [
          { nombre: 'UiPath', color: '#fa4616' },
          { nombre: 'RPA', color: '#0078d4' },
          { nombre: 'En formación', color: '#ffc107' }
        ]
      }
    ]
  };

  // Datos de Habilidades
  const datosHabilidades = {
    titulo: 'Habilidades Técnicas',
    stacks: [
      {
        titulo: 'Stack Principal',
        descripcion: 'Tecnologías de desarrollo y automatización',
        acento: '#64ffda',
        tecnologias: [
          { nombre: 'Python', color: '#3776ab' },
          { nombre: 'Selenium', color: '#43b02a' },
          { nombre: 'Tkinter', color: '#ff6f00' },
          { nombre: 'Django', color: '#092e20' },
          { nombre: 'pandas', color: '#150458' },
          { nombre: 'SQL', color: '#336791' }
        ]
      },
      {
        titulo: 'Desarrollo Web',
        descripcion: 'Frontend y herramientas de desarrollo',
        acento: '#64ffda',
        tecnologias: [
          { nombre: 'HTML5', color: '#e34f26' },
          { nombre: 'CSS3', color: '#1572b6' },
          { nombre: 'JavaScript', color: '#f7df1e' },
          { nombre: 'Bootstrap', color: '#7952b3' },
          { nombre: 'GitHub', color: '#333' }
        ]
      },
      {
        titulo: 'IoT & Infraestructura',
        descripcion: 'Automatización y virtualización',
        acento: '#64ffda',
        tecnologias: [
          { nombre: 'ESP32/ESP8266', color: '#e7352c' },
          { nombre: 'Node-RED', color: '#8f0000' },
          { nombre: 'MQTT', color: '#660066' },
          { nombre: 'Proxmox', color: '#e57000' },
          { nombre: 'Linux', color: '#fcc624' }
        ]
      }
    ],
    competenciasTitulo: 'Competencias Técnicas Desarrolladas',
    competencias: [
      {
        icono: '⚡',
        titulo: 'Automatización de Procesos',
        descripcion: 'Diseño e implementación de flujos automatizados que reducen tiempos y errores'
      },
      {
        icono: '🔗',
        titulo: 'Integración de APIs',
        descripcion: 'Conexión con servicios externos: Claude AI, Google Sheets, ServiceNow'
      },
      {
        icono: '📊',
        titulo: 'Procesamiento de Datos',
        descripcion: 'Extracción, transformación y análisis de datos con pandas y Excel'
      },
      {
        icono: '🖥️',
        titulo: 'Desarrollo de GUIs',
        descripcion: 'Interfaces de usuario intuitivas con Tkinter para herramientas internas'
      },
      {
        icono: '🌐',
        titulo: 'Web Scraping',
        descripcion: 'Automatización de navegación web con Selenium y extracción de datos'
      },
      {
        icono: '🔧',
        titulo: 'Virtualización',
        descripcion: 'Gestión de contenedores y máquinas virtuales con Proxmox'
      }
    ]
  };

  // Datos de Formación
  const datosFormacion = {
    titulo: 'Formación',
    items: [
      {
        icono: '🎓',
        titulo: 'Psicólogo',
        institucion: 'Universidad Andrés Bello',
        periodo: 'Título Profesional',
        estado: 'Completado'
      },
      {
        icono: '📚',
        titulo: 'Magíster en Psicología Organizacional',
        institucion: 'Universidad Andrés Bello',
        periodo: 'Postgrado',
        estado: 'Completado'
      },
      {
        icono: '💻',
        titulo: 'Analista Programador',
        institucion: 'Instituto Profesional San Sebastián (ex Ciisa)',
        periodo: 'Título Técnico - Práctica pendiente',
        estado: 'Completado'
      },
      {
        icono: '🚀',
        titulo: 'Ingeniería en Informática',
        institucion: 'Instituto Profesional San Sebastián',
        periodo: '2026 - 2027',
        estado: 'En curso'
      },
      {
        icono: '🏆',
        titulo: 'Bootcamp Full Stack Python Trainee',
        institucion: 'Skillnest - Talento Digital',
        periodo: '462 horas - Diciembre 2025',
        estado: 'Completado',
        tecnologias: ['Django', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
      }
    ]
  };

  // Datos de Contacto
  const datosContacto = {
    titulo: 'Contacto',
    subtitulo: '¿Interesado en colaborar o conocer más sobre mi trabajo? ¡Me encantaría conectar contigo!',
    redesSociales: [
      {
        icono: '💼',
        nombre: 'LinkedIn',
        descripcion: 'Conectemos profesionalmente',
        url: 'https://www.linkedin.com/in/cristopher-rivera-concha/'
      },
      {
        icono: '🐙',
        nombre: 'GitHub',
        descripcion: 'Explora mis proyectos',
        url: 'https://github.com/CR-Rivcon'
      },
      {
        icono: '✉️',
        nombre: 'Email',
        descripcion: 'Conversemos directamente',
        url: 'mailto:criverac.dev@outlook.com'
      }
    ],
    formularioTitulo: '¿Tienes un proyecto en mente?',
    formularioSubtitulo: 'Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.'
  };

  // Datos del Footer
  const datosFooter = {
    nombre: 'Rivcon',
    tecnologias: 'Python · Automatización de procesos · RPA',
    año: 2026
  };

  return (
    <div className="app">
      <Navbar logoSrc={datosNavbar.logoSrc} enlaces={datosNavbar.enlaces} />
      <Banner
        nombreDestacado={datosBanner.nombreDestacado}
        nombreSecundario={datosBanner.nombreSecundario}
        descripcion={datosBanner.descripcion}
        textoResaltado={datosBanner.textoResaltado}
        botonPrimario={datosBanner.botonPrimario}
        botonSecundario={datosBanner.botonSecundario}
      />
      <main>
        <SobreMi
          titulo={datosSobreMi.titulo}
          parrafos={datosSobreMi.parrafos}
          experiencias={datosSobreMi.experiencias}
        />
        <Proyectos 
          titulo={datosProyectos.titulo} 
          proyectos={datosProyectos.proyectos} 
        />
        <Habilidades
          titulo={datosHabilidades.titulo}
          stacks={datosHabilidades.stacks}
          competenciasTitulo={datosHabilidades.competenciasTitulo}
          competencias={datosHabilidades.competencias}
        />
        <Formacion
          titulo={datosFormacion.titulo}
          items={datosFormacion.items}
        />
        <Contacto
          titulo={datosContacto.titulo}
          subtitulo={datosContacto.subtitulo}
          redesSociales={datosContacto.redesSociales}
          formularioTitulo={datosContacto.formularioTitulo}
          formularioSubtitulo={datosContacto.formularioSubtitulo}
        />
      </main>
      <Footer
        nombre={datosFooter.nombre}
        tecnologias={datosFooter.tecnologias}
        año={datosFooter.año}
      />
    </div>
  );
}

export default App
