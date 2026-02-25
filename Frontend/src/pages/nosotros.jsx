import React from "react";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <section className="about-section container">
      <div className="about-container block">
        <div className="about-header">
          <span className="about-text">NOSOTROS</span>
          <h2>
            Transformamos datos en <span>decisiones inteligentes</span>
          </h2>
          <p>
            Somos una consultora financiera que combina estrategia, tecnología
            y visión  para diseñar soluciones que impulsan el crecimiento
            sostenible de empresas en entornos dinámicos. Acompañamos a empresas que quieren crecer sin perder el control, ayudándolas a tomar mejores decisiones, reducir costos y escalar con confianza.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Visión Estratégica</h3>
            <p>
              Analizamos cada escenario desde múltiples dimensiones para
              anticiparnos a los cambios del mercado y convertir la
              incertidumbre en oportunidades reales.
            </p>
          </div>

          <div className="about-card">
            <h3>¿Porqué LHB?</h3>
            <p>
              Porque ofrecemos diagnósticos rápidos y soluciones claras con un enfoque consultivo, no invasivo. Nos gusta trabajar en equipo y acompañando a nuestros clientes en cada acción de manera personalizada.
            </p>
          </div>

          <div className="about-card">
            <h3>Nuestro equipo</h3>
            <p>
              Somos consultores con experiencia en procesos, finanzas, tecnología y gestión.
              Trabajamos junto a cada cliente como socios estratégicos,
              priorizando la transparencia, la confianza y resultados medibles
              a largo plazo.
            </p>
          </div>
        </div>

        <div className="about-vision">
          <h3>Miramos hacia el futuro</h3>
          <p>
            Creemos que las finanzas del mañana se construyen hoy. Nuestro
            enfoque combina inteligencia analítica, creatividad estratégica y
            una profunda comprensión del entorno empresarial para diseñar
            soluciones que evolucionan con tu negocio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
