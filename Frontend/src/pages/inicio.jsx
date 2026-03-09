import React from "react";
import { useEffect, useRef } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiZap } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { SiInstructure } from "react-icons/si";
import { BsTools } from "react-icons/bs";
import { BiExpand } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import './inicio.css';


export default function Inicio() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 80;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 200, 255, 0.6)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navigate = useNavigate();

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
            <>
                {/* FINTECH EFFECT */}

                <div className="fintech-wrapper">
                    <canvas ref={canvasRef} className="particles-canvas" />
                    <div className="gradient-bg">
                        <div className="gradient-orb orb-1"></div>
                        <div className="gradient-orb orb-2"></div>
                    </div>
                    <div className="grid-overlay"></div>

                    {/* INICIO SECTION */}

                    <section className='inicio-section container'>
                        <div className='inicio-text block'>
                            <h1>Consultoría empresarial </h1>
                            <h3>Pequeñas y medianas empresas</h3>
                            <button className="button" onClick={() => navigate("/contacto")}>
                                <span>Contactanos</span>
                            </button>
                        </div>
                    </section>
                </div>

                {/* METHOD SECTION */}

                <section className="method-inicio-section container block">
                    <div className="method-inicio-content">
                        <div className="method-inicio-text">
                            <h3>
                                ¿Caos operativo u <span>orden rentable?</span>
                            </h3>

                            <p>
                                Transformamos el desorden en datos y los datos en decisiones inteligentes. Profesionalizamos cada área de tu empresa con procesos diseñados a medida, asegurando que cada recurso invertido se traduzca en mayor rentabilidad y eficiencia.
                            </p>
                        </div>
                    </div>
                    <div className="method-inicio-animation">
                        <div className="tech-puzzle">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </section >


                <div className="inicio-separator container">
                    <h3> <span className="bold">Gestión</span> eficiente = crecimiento <span className="bold">sostenible</span>
                    </h3>
                </div>

                {/* SERVICE SECTION */}

                <section className="service-section container block">
                    <div className="service-inicio-title">
                        <h3>Nuestros servicios</h3>
                    </div>
                    <div className="service-grid ">
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-1')}>
                            <h3>Procesos y operaciones</h3>
                            <BiExpand className="item-icon" />
                        </div>
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-2')}>
                            <h3>Estructura financiera</h3>
                            <SiInstructure className="item-icon" />

                        </div>
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-3')}>
                            <h3>Costos</h3>
                            <FaMoneyBillTransfer className="item-icon" />
                        </div>
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-4')}>
                            <h3>Gestión de rentabilidad</h3>
                            <FaChartLine className="item-icon" />
                        </div>
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-5')}>
                            <h3>Tableros de gestión</h3>
                            <FaClipboardList className="item-icon" />
                        </div>
                        <div className="service-item" onClick={() => navigate('/servicios#servicio-6')}>
                            <h3>Control de gestión</h3>
                            <BsTools className="item-icon" />
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION */}

                <section className="content-section container">
                    <div className="content-wrapper block">
                        <div className="content-text">
                            <h3>La estructura financiera/técnica necesaria para la escabilidad<span> ordenada de organizaciones en crecimiento</span></h3>
                            <p> En LHB nos especilalizamos en la profesionalización de empresas, con foco en finanzas, optimización de procesos y gestión.</p>
                            <p>Ayudamos a pymes, empresas familiares y organizaciones a crecer de manera sostenible, con información clara, roles definidos y estructuras que perduran.</p>
                        </div>
                        <div className="content-features">
                            <div className="feature-1">
                                <div className="feature-title">
                                    <FiCpu className="feature-icon" />
                                    <h3>Ágil</h3>
                                </div>
                                <p>
                                    Optimizamos procesos para mejorar la eficiencia operativa de tu compañía llevando a cabo una metodología clara.
                                </p>
                            </div>
                            <div className="feature-2">
                                <div className="feature-title">
                                    <FiZap className="feature-icon" />
                                    <h3>Futuro</h3>
                                </div>
                                <p>
                                    Te ayudamos transformando datos en información estratégica para que tomes mejores decisiones, permitiendo tener un crecimiento sostenible en el tiempo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-animation">
                        <div className="loader">
                            <div className="loader__bar"></div>
                            <div className="loader__bar"></div>
                            <div className="loader__bar"></div>
                            <div className="loader__bar"></div>
                            <div className="loader__bar"></div>
                            <div className="loader__ball"></div>
                        </div>
                    </div>
                </section>

                {/* CONTACT  SECTION */}

                <section className="contact-inicio-section container block">
                    <div className="contact-inicio-text">
                        <h3>Contactanos y agendá tu consultoría</h3>
                    </div>
                    <form className="form-container" onSubmit={handleSubmit}>
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
                </section>
            </>
        );
    }

    return <Contacto />;
}