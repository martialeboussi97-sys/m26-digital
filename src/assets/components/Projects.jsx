function Projects() {
  const projects = [
  {
    number: "01",
    category: "HOSPITALITÉ · SITE WEB",
    title: "Maison Aveline",
    description:
      "Une expérience digitale immersive imaginée pour un établissement hôtelier de luxe au charme méditerranéen.",
    image: "/images/maison-aveline.png",
    
  link:"https://maison-aveline-tau.vercel.app/"


  },
  {
    number: "02",
    category: "RESTAURATION · APPLICATION WEB",
    title: "Les Délices du G2",
    description:
      "Une solution numérique de gestion de restaurant associant interface web, API backend et base de données relationnelle.",
    image: "/images/les-delices-du-g2.jpeg",
    link: "#contact",
  },
  {
    number: "03",
    category: "ADMINISTRATION · SOLUTION NUMÉRIQUE",
    title: "MuniGest",
    description:
      "Une solution numérique destinée à moderniser la gestion municipale et faciliter l'organisation des services de la mairie.",
    image: "/images/munigest.jpeg",
    link: "#contact",
  },
];
  return (
    <section className="projects" id="projets">
      <div className="services-label">
        <span></span>
        NOS RÉALISATIONS
      </div>

      <div className="projects-header">
        <h2>
          Des idées transformées
          <br />
          en <em>expériences.</em>
        </h2>

        <p>
          Chaque projet est une nouvelle occasion de créer
          quelque chose de remarquable.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-placeholder">
                  <span>M.26 DIGITAL</span>
                  <strong>Votre prochain projet.</strong>
                </div>
              )}

              <span className="project-number">{project.number}</span>
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
             <a href={project.link} target="_blank" rel="noopener noreferrer">
  Découvrir le projet ↗
</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;