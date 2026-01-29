interface BotonProps {
    texto: string;
    href: string;
}

interface BannerProps {
    nombreDestacado: string;
    nombreSecundario: string;
    descripcion: string;
    textoResaltado?: string;
    botonPrimario: BotonProps;
    botonSecundario: BotonProps;
}

function Banner({
    nombreDestacado,
    nombreSecundario,
    descripcion,
    textoResaltado,
    botonPrimario,
    botonSecundario
}: BannerProps) {
    return (
        <header className="banner" id="inicio">
            <div className="banner-contenido">
                <h1>
                    <span className="nombre-destacado">{nombreDestacado}</span>
                    <br />
                    <span className="nombre-secundario">{nombreSecundario}</span>
                </h1>

                <p className="banner-descripcion">
                    {descripcion}
                    {textoResaltado && (
                        <span className="texto-resaltado">{textoResaltado}</span>
                    )}
                </p>

                <div className="banner-botones">
                    <a 
                        href={botonPrimario.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primario"
                    >
                        {botonPrimario.texto}
                    </a>
                    <a 
                        href={botonSecundario.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-secundario"
                        download
                    >
                        {botonSecundario.texto}
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Banner;
