function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-label">
        <span></span>
        DONNONS VIE À VOTRE PROJET
      </div>

      <div className="contact-content">
        <h2>
          Votre prochaine
          <br />
          réussite commence <em>ici.</em>
        </h2>

        <p>
          Vous avez une idée, un projet ou une ambition ?
          Parlons-en et imaginons ensemble votre prochaine
          expérience digitale.
        </p>

        <div className="contact-actions">
  <a
    href="https://wa.me/213551295232"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button"
  >
    WhatsApp <span>↗</span>
  </a>

  <a
    href="mailto:martialeboussi97@gmail.com"
    className="contact-email"
  >
    Envoyer un e-mail <span>↗</span>
  </a>
</div>
      </div>

      <div className="contact-bottom">
        <span>M.26 DIGITAL</span>
        <span>CRÉONS QUELQUE CHOSE DE REMARQUABLE.</span>
      </div>
    </section>
  );
}

export default Contact;