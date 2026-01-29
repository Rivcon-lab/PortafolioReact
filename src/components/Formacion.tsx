interface FormacionItem {
    icono: string;
    titulo: string;
    institucion: string;
    periodo: string;
    estado?: string;
    tecnologias?: string[];
}

interface FormacionProps {
    titulo: string;
    items: FormacionItem[];
}

function Formacion({ titulo, items }: FormacionProps) {
    return (
        <section className="formacion" id="formacion">
            <h2 className="seccion-titulo">{titulo}</h2>
            
            <div className="formacion-grid">
                {items.map((item, index) => (
                    <div key={index} className="formacion-card">
                        <div className="formacion-header">
                            <span className="formacion-icono">{item.icono}</span>
                            {item.estado && (
                                <span className={`formacion-estado ${item.estado === 'En curso' ? 'en-curso' : item.estado === 'Completado' ? 'completado' : ''}`}>
                                    {item.estado}
                                </span>
                            )}
                        </div>
                        <h3 className="formacion-titulo">{item.titulo}</h3>
                        <p className="formacion-institucion">{item.institucion}</p>
                        <p className="formacion-periodo">{item.periodo}</p>
                        {item.tecnologias && item.tecnologias.length > 0 && (
                            <div className="formacion-tecnologias">
                                {item.tecnologias.map((tech, techIndex) => (
                                    <span key={techIndex} className="formacion-tech">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Formacion;

