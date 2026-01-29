interface FooterProps {
    nombre: string;
    tecnologias: string;
    año: number;
}

function Footer({ nombre, tecnologias, año }: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-contenido">
                <p className="footer-copyright">
                    © {nombre} {año}
                </p>
                <p className="footer-tecnologias">
                    Desarrollado con <span className="footer-tech">{tecnologias}</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
