interface Tecnologia {
    nombre: string;
    color?: string;
}

interface Proyecto {
    icono: string;
    titulo: string;
    descripcion: string;
    detalles?: string;
    tecnologias: Tecnologia[];
    destacado?: boolean;
}

interface ProyectosProps {
    titulo: string;
    proyectos: Proyecto[];
}

function Proyectos({ titulo, proyectos }: ProyectosProps) {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="seccion-titulo">{titulo}</h2>
            <div className="proyectos-grid">
                {proyectos.map((proyecto, index) => (
                    <article 
                        key={index} 
                        className={`proyecto-card ${proyecto.destacado ? 'proyecto-destacado' : ''}`}
                    >
                        <div className="proyecto-header">
                            <span className="proyecto-icono">{proyecto.icono}</span>
                            {proyecto.destacado && (
                                <span className="badge-destacado">Destacado</span>
                            )}
                        </div>
                        <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                        <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                        {proyecto.detalles && (
                            <p className="proyecto-detalles">{proyecto.detalles}</p>
                        )}
                        <div className="proyecto-tecnologias">
                            {proyecto.tecnologias.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="tecnologia-tag"
                                    style={tech.color ? { backgroundColor: tech.color } : undefined}
                                >
                                    {tech.nombre}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Proyectos;

