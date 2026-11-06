import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#projets" },
    { name: "Processus", href: "#processus" },
  ];

  return (
    <header className="navbar">
      <a href="#accueil" className="navbar-logo">
        M<span>.</span>26
        <small>DIGITAL</small>
      </a>

      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="navbar-contact"
          onClick={() => setMenuOpen(false)}
        >
          Parlons de votre projet
          <span>↗</span>
        </a>
      </nav>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
       {menuOpen ? "Fermer" : "Menu"}
      </button>
    </header>
  );
}

export default Navbar;