interface NavbarProps {
    logo: string;
    enlaces: { texto: string; href: string }[];
}

export function Navbar({ logo, enlaces }: NavbarProps) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">{logo}</div>
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