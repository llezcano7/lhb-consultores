import React from "react";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <section className="section container block">
      <div className="head-content">
        <span className="eyebrow">nosotros</span>
        <h3>
          Transformamos datos en <span>decisiones inteligentes</span>
        </h3>
        <p>
          Somos una consultora especializada en acompañar a pequeñas y medianas empresas que buscan ordenar su gestión, mejorar su rentabilidad y tomar decisiones con mayor claridad. Sabemos que muchas PyMEs crecen con esfuerzo y dedicación, pero en el camino suelen aparecer dificultades como falta de control financiero, problemas de organización interna, aumento de costos, baja previsibilidad o caída en los márgenes de ganancia.
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
    </section>
  );
};

export default Nosotros;
