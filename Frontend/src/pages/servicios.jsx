import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../components/servicelist";
import "./servicios.css";

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={`servicio-${service.id}`}
      className={`service-card ${isEven ? "layout-normal" : "layout-reversed"}`}>

      {/* Columna del título */}
      <div className="service-col-title">
        <h6 className="service-card-title">{service.title}</h6>
        <p className="service-card-description">{service.description}</p>
      </div>

      {/* Columna del contenido */}
      <div className="service-col-content">

        {/* Problemáticas */}
        <div>
          <span className="service-card-eyebrow">Problemáticas típicas</span>
          <ul className="problems-list">
            {service.problems.map((item, i) => (
              <li key={i}>
                <span className="dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Qué queda */}
        <div className="result-card">
          <span className="service-card-eyebrow">Qué queda</span>
          <p>{service.result}</p>
        </div>

        {/* Beneficios */}
        <div className="benefits">
          <span className="service-card-eyebrow benefits-label">
            El desarrollo de procesos nos ayuda a:
          </span>
          <div className="benefits-grid">
            {service.benefits.map((item, i) => (
              <div key={i} className="benefit-card">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Servicios() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // si no hay hash, ir al top de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <section className="section container block">
        <div className="head-content">
          <span className="eyebrow">Nuestros servicios</span>
          <h3>
            <span>Soluciones financieras</span> diseñadas para el futuro
          </h3>
          <p>
            Combinamos análisis, estrategia y tecnología para impulsar decisiones
            financieras más inteligentes y sostenibles.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
    </section>
  );
}