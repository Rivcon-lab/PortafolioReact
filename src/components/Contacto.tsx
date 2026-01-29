import { useState, FormEvent } from 'react';

interface RedSocial {
    icono: string;
    nombre: string;
    descripcion: string;
    url: string;
}

interface ContactoProps {
    titulo: string;
    subtitulo: string;
    redesSociales: RedSocial[];
    formularioTitulo: string;
    formularioSubtitulo: string;
}

function Contacto({ 
    titulo, 
    subtitulo, 
    redesSociales, 
    formularioTitulo, 
    formularioSubtitulo 
}: ContactoProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="contacto" id="contacto">
            <h2 className="seccion-titulo">{titulo}</h2>
            <p className="contacto-subtitulo">{subtitulo}</p>

            <div className="redes-grid">
                {redesSociales.map((red, index) => (
                    <a 
                        key={index} 
                        href={red.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="red-card"
                    >
                        <span className="red-icono">{red.icono}</span>
                        <h3 className="red-nombre">{red.nombre}</h3>
                        <p className="red-descripcion">{red.descripcion}</p>
                    </a>
                ))}
            </div>

            <div className="formulario-container">
                <h3 className="formulario-titulo">{formularioTitulo}</h3>
                <p className="formulario-subtitulo">{formularioSubtitulo}</p>
                
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="formulario-row">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="formulario-input"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="formulario-input"
                            required
                        />
                    </div>
                    <textarea
                        name="mensaje"
                        placeholder="Tu mensaje..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="formulario-textarea"
                        rows={5}
                        required
                    />
                    <button type="submit" className="btn btn-enviar">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contacto;

