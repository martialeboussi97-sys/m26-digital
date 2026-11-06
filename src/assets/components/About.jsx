function About() {
  return (
    <section className="about" id="apropos">

      <div className="about-label">
        <span></span>
        QUI SOMMES-NOUS ?
      </div>

      <div className="about-content">

        <div className="about-heading">
          <h2>
            Le digital au service
            <br />
            de votre <em>ambition.</em>
          </h2>
        </div>

        <div className="about-description">
          <p>
            M.26 Digital est une agence digitale indépendante
            qui accompagne les marques, les entrepreneurs et
            les entreprises dans leur transformation numérique.
          </p>

          <p>
            Nous concevons des expériences web élégantes,
            stratégiques et performantes, pensées pour valoriser
            votre identité et donner une nouvelle dimension
            à vos projets.
          </p>

          <a href="#services" className="about-link">
            Découvrir notre approche <span>↗</span>
          </a>
        </div>

      </div>

      <div className="about-bottom">
        <div>
          <strong>01</strong>
          <span>Vision internationale</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Excellence digitale</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Approche sur mesure</span>
        </div>
      </div>

    </section>
  );
}

export default About;