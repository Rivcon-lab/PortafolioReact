import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

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

// Configuración EmailJS desde variables de entorno
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contacto({ 
    titulo, 
    subtitulo, 
    redesSociales, 
    formularioTitulo, 
    formularioSubtitulo 
}: ContactoProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [messageLength, setMessageLength] = useState(0);
    const MAX_MESSAGE_LENGTH = 3000;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            
            setSubmitStatus('success');
            formRef.current.reset();
            setMessageLength(0);
        } catch (error) {
            console.error('Error al enviar:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                
                <form className="formulario" ref={formRef} onSubmit={handleSubmit}>
                    <div className="formulario-row">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Nombre"
                            className="formulario-input"
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email"
                            className="formulario-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="textarea-container">
                        <textarea
                            name="message"
                            placeholder="Tu mensaje..."
                            className="formulario-textarea"
                            rows={5}
                            required
                            disabled={isSubmitting}
                            maxLength={MAX_MESSAGE_LENGTH}
                            onChange={(e) => setMessageLength(e.target.value.length)}
                        />
                        <span className={`char-counter ${messageLength >= MAX_MESSAGE_LENGTH ? 'limit-reached' : ''}`}>
                            {messageLength}/{MAX_MESSAGE_LENGTH}
                        </span>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={`btn btn-enviar ${isSubmitting ? 'btn-loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>

                    {submitStatus === 'success' && (
                        <p className="formulario-mensaje exito">
                            ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
                        </p>
                    )}
                    
                    {submitStatus === 'error' && (
                        <p className="formulario-mensaje error">
                            ❌ Hubo un error al enviar. Intenta nuevamente o contáctame por email.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contacto;
