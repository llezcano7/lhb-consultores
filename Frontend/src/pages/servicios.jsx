import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { services } from "../components/servicelist";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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
        <div className="flex-services">
          <div onClick={() => navigate('/servicios#servicio-1')}>
            <h3>Procesos y operaciones</h3>
          </div>
          <div onClick={() => navigate('/servicios#servicio-2')}>
            <h3>Estructuras financieras</h3>
          </div>
          <div onClick={() => navigate('/servicios#servicio-3')}>
            <h3>Costos</h3>
          </div>
          <div onClick={() => navigate('/servicios#servicio-4')}>
            <h3>Gestión de rentabilidad</h3>
          </div>
          <div onClick={() => navigate('/servicios#servicio-5')}>
            <h3>Tableros de gestión</h3>
          </div>
          <div onClick={() => navigate('/servicios#servicio-6')}>
            <h3>Control de gestión</h3>
          </div>
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