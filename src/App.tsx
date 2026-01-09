import './App.css'
import { Navbar } from './Navbar'
import Banner from './Banner'

function App() {
  const datosNavbar = {
    logo: 'CR',
    enlaces: [
      { texto: 'Inicio', href: '#inicio' },
      { texto: 'Proyectos', href: '#proyectos' },
      { texto: 'Habilidades', href: '#habilidades' },
      { texto: 'Contacto', href: '#contacto' }
    ]
  };

  const datosBanner = {
    nombreDestacado: 'Cristopher Andres',
    nombreSecundario: 'Rivera Concha',
    descripcion:
      'Me apasiona la música, la automatización con microcontroladores, ver películas y usar la',
    textoResaltado:
      'tecnología para solucionar problemas y mejorar procesos. Mi motivación es crear herramientas que faciliten el trabajo diario y contribuyan al crecimiento de las organizaciones.',
    botonPrimario: {
      texto: 'Ver Proyectos',
      accion: () => console.log('Navegar a proyectos')
    },
    botonSecundario: {
      texto: 'Descargar CV',
      accion: () => console.log('Descargar CV')
    },
    imagenPerfil: '/perfil.png'
  };

  return (
    <div className="app">
      <Navbar logo={datosNavbar.logo} enlaces={datosNavbar.enlaces} />
      <Banner
        nombreDestacado={datosBanner.nombreDestacado}
        nombreSecundario={datosBanner.nombreSecundario}
        descripcion={datosBanner.descripcion}
        textoResaltado={datosBanner.textoResaltado}
        botonPrimario={datosBanner.botonPrimario}
        botonSecundario={datosBanner.botonSecundario}
        imagenPerfil={datosBanner.imagenPerfil}
      />
    </div>
  );
}

export default App
