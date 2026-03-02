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
            Transformamos problemáticas en oportunidades de mejora.
            Ordenamos procesos, revisamos costos y estructuramos la gestión para crear una base sólida que impulse el crecimiento de tu negocio.
          </p>
        </div>

        <div className="about-card">
          <h3>¿Porqué LHB?</h3>
          <p>
            Nuestro enfoque combina análisis práctico, planificación y acompañamiento cercano. Ayudamos a implementar herramientas simples y efectivas para mejorar la eficiencia operativa, optimizar recursos, reducir gastos innecesarios y establecer indicadores que permitan recuperar el control del negocio. No creemos en soluciones complejas, sino en estructuras claras que faciliten el crecimiento sostenido.
          </p>
        </div>

        <div className="about-card">
          <h3>Nuestra misión</h3>
          <p>
            Más que realizar diagnósticos, acompañamos la implementación de mejoras concretas que impacten en la rentabilidad, la organización y la estabilidad financiera de tu empresa. Nuestro objetivo es que cada PyME pueda crecer con bases sólidas, mayor previsibilidad y una gestión profesional alineada a sus metas de largo plazo.
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
