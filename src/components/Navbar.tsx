interface NavbarProps {
    logoSrc?: string;
    enlaces: { texto: string; href: string }[];
}

export function Navbar({ logoSrc, enlaces }: NavbarProps) {
    return (
        <nav className="navbar">
            {logoSrc && (
                <a href="#inicio" className="navbar-logo">
                    <img src={logoSrc} alt="Logo" />
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

