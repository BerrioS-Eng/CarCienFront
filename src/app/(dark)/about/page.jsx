"use client";

import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const serviceSlidesData = [
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Trabajo de llantas",
    body: "Ya sea que necesites reparaciones o reemplazos de llantas, nuestros técnicos calificados están aquí para mantener tus ruedas rodando de manera segura y suave.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Llantas nuevas y usadas",
    body: "Ofrecemos una selección de llantas nuevas y usadas de alta calidad que brindan un excelente rendimiento y valor para tu vehículo.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Eliminación de llantas",
    body: "Como parte de nuestro compromiso con prácticas ecológicas, podemos eliminar tus llantas no utilizables de manera responsable por una tarifa nominal.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Parche y tapón",
    body: "Nuestro servicio profesional de parcheo de llantas restaura las llantas dañadas a condiciones seguras, ahorrándote el costo de reemplazo.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "TPMS e instalación",
    body: "Nuestros técnicos pueden instalar y dar servicio a los sensores del Sistema de Monitoreo de Presión de Llantas (TPMS) para mantenerte informado sobre la presión de tus llantas.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Alineación de ruedas",
    body: "Mejora el manejo y la longevidad de las llantas con una alineación de ruedas precisa, asegurando que todas las ruedas estén correctamente orientadas.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Recarga y tinte de A/C",
    body: "Mantente fresco durante los días calurosos con nuestro servicio de recarga de A/C utilizando el mejor refrigerante y tinte para la detección de fugas.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Cambio de aceite y filtro",
    body: "Mantén tu motor funcionando de manera suave y eficiente con nuestro servicio de cambio de aceite, que incluye la instalación de un nuevo filtro.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Pastillas de freno delanteras y traseras",
    body: "Asegura una potencia de frenado confiable con nuestro reemplazo de pastillas de freno delanteras y traseras, utilizando pastillas de freno de alta calidad para seguridad y rendimiento.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Batería nueva",
    body: "Si es hora de una batería nueva, confía en nuestros expertos para instalar un reemplazo confiable y duradero para tu vehículo.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Limpiaparabrisas",
    body: "Mejora la visibilidad durante la lluvia o la nieve con nuevos limpiaparabrisas que se ajustan perfectamente a tu vehículo.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Filtros de aire de cabina",
    body: "Respira aire limpio dentro de tu coche con nuestro servicio de reemplazo de filtros de aire de cabina.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Suspensión y dirección",
    body: "Experimenta viajes más suaves y un manejo mejorado con nuestros servicios expertos de suspensión y dirección. Conduce con confianza.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Reparación del sistema de escape",
    body: "Experimenta viajes más suaves y un manejo mejorado con servicios expertos de suspensión y dirección. ¡Visítanos hoy!",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Reparaciones del sistema eléctrico del coche",
    body: "Para reparaciones confiables del sistema eléctrico del coche, confía en nuestros técnicos experimentados. Conduce sin preocupaciones con nuestro servicio de primera.",
  },
  {
    icon: <i className="bx bxs-car-mechanic"></i>,
    title: "Diagnóstico de luz de check engine",
    body: "¿Está encendida la luz de check engine? ¡No te preocupes! Nuestros técnicos especializados en diagnóstico de luz de check engine están aquí para ayudarte.",
  },
];

export default function AboutPage() {
  const [serviceSlides, setServiceSlides] = useState([]);

  useEffect(() => {
    setServiceSlides(serviceSlidesData);

    let glide = null;
    const glideElement = document.querySelector(".glide-services");

    // Inicializar Glide solo si el elemento existe
    if (glideElement) {
      glide = new Glide(".glide-services", {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        autoplay: 3000,
        breakpoints: {
          768: {
            perView: 1,
          },
          992: {
            perView: 2,
          },
          1200: {
            perView: 3,
          },
        },
      });

      // Asegurarse de que los slides estén cargados antes de montar
      setTimeout(() => {
        try {
          glide.mount();
        } catch (error) {
          console.error("Error mounting Glide:", error);
        }
      }, 100);
    }

    // Función de limpieza
    return () => {
      if (glide) {
        try {
          glide.destroy();
        } catch (error) {
          console.error("Error destroying Glide:", error);
        }
      }
    };
  }, []);

  return (
    <section id="about" className="about section h-full py-4 d-flex">
      <div className="container my-3">
        <div className="heading-container text-primary">
          <h2 className="section-heading">
            <i className="bx bxs-info-circle"></i> Acerca de Nosotros
          </h2>
        </div>

        <p className="section-copy my-4 text-center text-md-start">
          Bienvenido a CAR CIEN Planeta Rica, su lugar de confianza para
          servicios de reparación automotriz en Planeta Rica, Córdoba. Nuestro
          enfoque centrado en el cliente asegura su satisfacción como nuestra
          máxima prioridad. Nuestros técnicos expertos brindan soluciones de
          primer nivel para todas sus necesidades automotrices, desde cambios de
          llantas hasta reparaciones completas de vehículos, con atención
          personalizada y un compromiso con la excelencia. Contáctenos al 300
          824 5437 o en carcienplanetarica@gmail.com, o visítenos en Calle 26 N°
          7 - 17, Barrio Santander, Planeta Rica, Córdoba. Conduzca con
          confianza y tranquilidad, ¡experimente la diferencia en CAR CIEN
          Planeta Rica!
        </p>

        <div className="services-container position-relative my-4">
          <div className="glide-services">
            <div className="glide__track" data-glide-el="track">
              <ul id="service-slides" className="glide__slides list-unstyled">
                {serviceSlides.map((sl, index) => (
                  <li key={index} className="glide__slide h-auto">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="card-title text-primary fw-medium fs-5">
                          {sl.icon} {sl.title}
                        </div>
                        <div>{sl.body}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="glide__arrows text-center d-flex justify-content-around"
              data-glide-el="controls"
            >
              <button
                aria-label="previous-slide"
                className="glide__arrow glide__arrow--left lh-1 m-0 p-0 fs-2 h-100 bg-opacity-25 border-0 shadow-none text-dark"
                data-glide-dir="<"
              >
                <i className="bx bxs-chevron-left-circle"></i>
              </button>
              <button
                aria-label="next-slide"
                className="glide__arrow glide__arrow--right lh-1 m-0 p-0 fs-2 h-100 bg-opacity-25 border-0 shadow-none text-dark"
                data-glide-dir=">"
              >
                <i className="bx bxs-chevron-right-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
