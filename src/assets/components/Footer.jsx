function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>M.26<span> DIGITAL</span></h2>
          <p>
            Des expériences digitales pensées
            pour les ambitions d'aujourd'hui
            et les réussites de demain.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>EXPLORER</h3>
          <a href="#apropos">À propos</a>
          <a href="#services">Services</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
  <h3>CONTACT</h3>

  <a
    href="https://wa.me/213551295232"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp : +213 551 29 52 32 ↗
  </a>

  <a href="mailto:martialeboussi97@gmail.com">
    martialeboussi97@gmail.com ↗
  </a>

  <span>Algérie · International</span>
</div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 M.26 DIGITAL. TOUS DROITS RÉSERVÉS.</span>
        <span>INDÉPENDANT. CRÉATIF. AMBITIEUX.</span>
      </div>
    </footer>
  );
}

export default Footer;