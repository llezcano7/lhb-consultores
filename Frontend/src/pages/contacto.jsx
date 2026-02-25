import "./contacto.css";

const Contacto = () => {
  return (
    <section className="contact-section container">
      <div className="contact-container block">
        <div className="contact-text">
          <span className="eyebrow">Contacto</span>
          <h3>Trabajemos juntos, potencia tu empresa</h3>
          <p>Impulsamos la gestión financiera de pequeñas y medianas empresas con enfoque estratégico, análisis de datos y planificación inteligente. Convertimos información en decisiones claras y sostenibles.
            Contactanos y empecemos a diseñar una estructura financiera más sólida para tu negocio.</p>
          <div className="contact-info">
            <div className="info-block">
              <span className="info-label">Email</span>
              <p>contacto@consultora.com</p>
            </div>

            <div className="info-block">
              <span className="info-label">Teléfono</span>
              <p>+54 9 11 5555 5555</p>
            </div>

            <div className="info-block">
              <span className="info-label">Ubicación</span>
              <p>Buenos Aires, Argentina</p>
            </div>

            <div className="info-note">
              Respondemos consultas dentro de las próximas 24 horas hábiles.
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <div className="form-group2">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div className="form-group2">
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" />
          </div>

          <div className="form-group2">
            <label>Empresa</label>
            <input type="text" placeholder="Nombre de tu empresa" />
          </div>

          <div className="form-group2">
            <label>Mensaje</label>
            <textarea
              placeholder="Contanos brevemente en qué podemos ayudarte"
              rows="4"
            />
          </div>

          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
