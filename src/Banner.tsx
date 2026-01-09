interface BotonProps {
    texto: string;
    accion: () => void;
}

interface BannerProps {
    nombreDestacado: string;
    nombreSecundario: string;
    descripcion: string;
    textoResaltado?: string;
    botonPrimario: BotonProps;
    botonSecundario: BotonProps;
    imagenPerfil?: string;
}

function Banner({
    nombreDestacado,
    nombreSecundario,
    descripcion,
    textoResaltado,
    botonPrimario,
    botonSecundario,
    imagenPerfil
}: BannerProps) {
    return (
        <header className="banner" id="inicio">
            {imagenPerfil && (
                <div className="banner-imagen">
                    <img src={imagenPerfil} alt="Perfil" />
                </div>
            )}

            <div className="banner-contenido">
                <h1>
                    <span className="nombre-destacado">{nombreDestacado}</span>
                    <br />
                    <span className="nombre-secundario">{nombreSecundario}</span>
                </h1>

                <p className="banner-descripcion">
                    {descripcion}
                    {textoResaltado && (
                        <span className="texto-resaltado"> {textoResaltado}</span>
                    )}
                </p>

                <div className="banner-botones">
                    <button className="btn btn-primario" onClick={botonPrimario.accion}>
                        {botonPrimario.texto}
                    </button>
                    <button className="btn btn-secundario" onClick={botonSecundario.accion}>
                        {botonSecundario.texto}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Banner;