interface Tecnologia {
    nombre: string;
    color?: string;
}

interface StackTecnologico {
    titulo: string;
    descripcion: string;
    tecnologias: Tecnologia[];
    acento?: string;
}

interface Competencia {
    icono: string;
    titulo: string;
    descripcion: string;
}

interface HabilidadesProps {
    titulo: string;
    stacks: StackTecnologico[];
    competenciasTitulo: string;
    competencias: Competencia[];
}

function Habilidades({ titulo, stacks, competenciasTitulo, competencias }: HabilidadesProps) {
    return (
        <section className="habilidades" id="habilidades">
            <h2 className="seccion-titulo">{titulo}</h2>
            
            <div className="stacks-grid">
                {stacks.map((stack, index) => (
                    <div key={index} className="stack-card">
                        <h3 
                            className="stack-titulo"
                            style={stack.acento ? { color: stack.acento } : undefined}
                        >
                            {stack.titulo}
                        </h3>
                        <p className="stack-descripcion">{stack.descripcion}</p>
                        <div className="stack-tecnologias">
                            {stack.tecnologias.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="tecnologia-tag"
                                    style={tech.color ? { backgroundColor: tech.color } : undefined}
                                >
                                    {tech.nombre}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="competencias-titulo">{competenciasTitulo}</h3>
            <div className="competencias-grid">
                {competencias.map((competencia, index) => (
                    <div key={index} className="competencia-card">
                        <span className="competencia-icono">{competencia.icono}</span>
                        <h4 className="competencia-nombre">{competencia.titulo}</h4>
                        <p className="competencia-descripcion">{competencia.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Habilidades;

