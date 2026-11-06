function Services() {
  const services = [
    {
      number: "01",
      title: "Sites vitrines",
      description:
        "Des sites web élégants et modernes pour présenter votre activité, valoriser votre image et attirer de nouveaux clients.",
      tag: "IDENTITÉ DIGITALE",
    },
    {
      number: "02",
      title: "Sites hôteliers",
      description:
        "Des expériences digitales immersives pour les hôtels, maisons d'hôtes et établissements touristiques.",
      tag: "HOSPITALITÉ",
    },
    {
      number: "03",
      title: "Sites professionnels",
      description:
        "Des plateformes adaptées aux entreprises, indépendants et entrepreneurs qui souhaitent développer leur présence en ligne.",
      tag: "BUSINESS",
    },
    {
      number: "04",
      title: "Solutions web sur mesure",
      description:
        "Des solutions numériques pensées autour de vos besoins, de vos objectifs et de votre vision.",
      tag: "DÉVELOPPEMENT",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-label">
        <span></span>
        NOS EXPERTISES
      </div>

      <div className="services-header">
        <h2>
          Des solutions digitales
          <br />
          à la hauteur de vos <em>ambitions.</em>
        </h2>

        <p>
          Nous associons créativité, stratégie et technologie
          pour concevoir des expériences digitales qui font
          la différence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span>{service.number}</span>
              <span className="service-tag">{service.tag}</span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;