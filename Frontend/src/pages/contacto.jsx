import { useState } from "react";
import "./contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group2">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group2">
            <label>Empresa</label>
            <input
              type="text"
              name="company"
              placeholder="Nombre de tu empresa"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group2">
            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Contanos brevemente en qué podemos ayudarte"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === "success" && (
            <p className="form-success">¡Mensaje enviado correctamente!</p>
          )}
          {status === "error" && (
            <p className="form-error">Hubo un error, intentá de nuevo.</p>
          )}

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
