interface ExperienciaItem {
    icono: string;
    titulo: string;
    descripcion: string;
}

interface SobreMiProps {
    titulo: string;
    parrafos: string[];
    experiencias: ExperienciaItem[];
}

function SobreMi({ titulo, parrafos, experiencias }: SobreMiProps) {
    return (
        <section className="sobre-mi" id="sobre-mi">
            <h2 className="seccion-titulo">{titulo}</h2>
            
            <div className="sobre-mi-contenido">
                <div className="sobre-mi-texto">
                    {parrafos.map((parrafo, index) => (
                        <p key={index}>{parrafo}</p>
                    ))}
                </div>
                
                <div className="sobre-mi-experiencias">
                    {experiencias.map((exp, index) => (
                        <div key={index} className="experiencia-item">
                            <span className="experiencia-icono">{exp.icono}</span>
                            <div className="experiencia-info">
                                <h4>{exp.titulo}</h4>
                                <p>{exp.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SobreMi;

