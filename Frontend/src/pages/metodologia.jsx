import React from "react";
import { useEffect, useRef } from "react";
import { FaCaretRight } from "react-icons/fa";
import "./metodologia.css";

const steps = [
    {
        title: "Diagnóstico Situacional",
        description:
            "Antes de proponer, escuchamos y analizamos profundamente la realidad actual de tu PYME",
        items: [
            "- Entrevistas con actores clave",
            "- Recolección de datos históricos y operativos",
            "- Identificación de puntos críticos",
            "- Elaboración de propuesta de trabajo",
        ],
    },
    {
        title: "Onboarding y Alineación",
        description:
            "Establecemos las bases de la relación y definimos objetivos conjuntos",
        items: [
            "- Presentación del equipo",
            "- Definición de objetivos",
            "- Acceso a herramientas compartidas",
        ],
    },
    {
        title: "Ejecución del Plan",
        description:
            "Transformamos la estrategia en realidad operativa",
        items: [
            "- Despliegue táctico personalizado",
            "- Capacitación técnica",
            "- Implementación de cambios",
        ],
    },
    {
        title: "Seguimiento de Resultados",
        description:
            "Monitoreamos que la implementación funcione correctamente",
        items: [
            "- Medición periódica de KPIs",
            "- Ajustes en tiempo real",
            "- Reuniones de avance",
        ],
    },
    {
        title: "Consolidación y Cierre",
        description:
            "Garantizamos sostenibilidad sin dependencia eterna",
        items: [
            "- Entrega de reportes finales",
            "- Transferencia de conocimiento",
            "- Plan de sostenibilidad",
        ],
    },
];

////////////////////*METODOLOGÍA POR SERVICIO*/////////////////////

export const methodservices = [
    {
        title: "Procesos",
        description: [
            "On boarding",
            "Relevamiento de procesos",
            "Identificación de problemas",
            "Depuración de procesos irrelevantes",
            "Rediseño y definición de procesos",
            "Implementación y herramientas",
            "Seguimientos de los resultados y propuestas de mejoras"
        ]
    },
    {
        title: "Estructura financiera",
        description: [
            "On boarding",
            "Clasificaciòn de egresos",
            "Estructura de costos",
            "Asignación de costeos",
            "Implementación y actualización",
            "Seguimientos de los resultados y propuestas de mejoras"
        ]
    },
    {
        title: "Gestión de costos",
        description: [
            "On boarding",
            "Clasificación de egresos",
            "Estructura de costos",
            "Asignación de costeos",
            "Plan de optimización",
            "Implementación y actualización",
            "Seguimientos de los resultados y propuestas de mejoras"
        ]
    },
    {
        title: "Gestión de rentabilidad/resultados",
        description: [
            "On boarding",
            "Análisis de ventas",
            "Análisis de gastos",
            "Determinaciòn de puento de equilibrio",
            "Análisis de márgenes",
            "Estrategia de maximización",
            "Monitoreo y proyecciòn"
        ]
    },
    {
        title: "Tableros de gestión",
        description: [
            "On boarding",
            "Definición de KPIs críticos",
            "Consolidación de información",
            "Automatización de carga",
            "Análisis y ejecución de tableros",
            "Seguimientos de los resultados y propuestas de mejoras"
        ]
    },
    {
        title: "Auditoría de gestión",
        description: [
            "On boarding",
            "Definición de alcance y objetivos",
            "Evaluación de procesos afectados",
            "Diseño de controles",
            "Verificación de resultados",
            "Identificación de desvios y correciones",
            "Seguimientos de los resultados y propuestas de mejoras"
        ]
    }
]

export default function MethodologyTimeline() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        const progressLine = document.querySelector(
            ".timeline-line-progress"
        );
        const container = document.querySelector(
            ".timeline-container"
        );

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress =
                (windowHeight - rect.top) /
                (rect.height + windowHeight);

            const clamped = Math.min(Math.max(progress, 0), 1);

            progressLine.style.height = `${clamped * 100}%`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="section container block">
            <div className="head-content">
                <span className="eyebrow">Metodología</span>
                <h3>Procesos ágiles y sólidos que generan <span>resultados medibles y efectivos</span></h3>
                <p>Diseñamos un proceso ágil y estructurado que transforma cada intervención en resultados medibles, aportando el orden que tu empresa necesita.</p>
            </div>
            <div className="timeline-container">
                <div className="timeline-line">
                    <div className="timeline-line-progress"></div>
                </div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"
                            }`}
                    >
                        <div className="timeline-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <ul>
                                {step.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <section className="services-methodology">
                <h3>Metodología por Servicio</h3>

                <div className="services-grid">
                    {methodservices.map((service, index) => (
                        <div key={index} className="method-service-card">
                            <h4>{service.title}</h4>
                            <ul>
                                {service.description.map((description, i) => (
                                    <li key={i}>
                                        <FaCaretRight className="flex-icon"/>
                                        {description}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>


        </section>

    );
}
