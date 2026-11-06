import { ArrowUpRight, ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="accueil">

      <div className="hero-background">
        <div className="hero-circle"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">

        <div className="hero-label">
          <span></span>
          DIGITAL AGENCY · WEB DEVELOPMENT
        </div>

        <h1>
          Nous donnons
          <br />
          vie à vos <em>ambitions.</em>
        </h1>

        <p className="hero-description">
          M.26 Digital accompagne les marques et les entreprises
          dans leur transformation digitale à travers des expériences
          web élégantes, stratégiques et performantes.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-button">
            Démarrer un projet
            <ArrowUpRight size={18} />
          </a>

          <a href="#projets" className="hero-secondary">
            Découvrir nos réalisations
          </a>
        </div>

      </div>

      <div className="hero-bottom">
        <span>INDÉPENDANT · INTERNATIONAL · DIGITAL</span>

        <a href="#apropos">
          DÉFILER
          <ArrowDown size={15} />
        </a>
      </div>

      <div className="hero-index">01 / 06</div>

    </section>
  );
}

export default Hero;