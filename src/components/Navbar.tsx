interface NavbarProps {
    logoSrc?: string;
    enlaces: { texto: string; href: string }[];
}

export function Navbar({ logoSrc, enlaces }: NavbarProps) {
    return (
        <nav className="navbar">
            {logoSrc && (
                <a href="#inicio" className="navbar-logo" aria-label="Ir al inicio">
                    <img src={logoSrc} alt="Logo Cristopher Rivera - Portafolio" width="40" height="40" fetchPriority="high" />
                </a>
            )}
            <ul className="navbar-enlaces">
                {enlaces.map((enlace, index) => (
                    <li key={index}>
                        <a href={enlace.href}>{enlace.texto}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

