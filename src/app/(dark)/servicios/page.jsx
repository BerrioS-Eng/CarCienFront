"use client";

import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const alertBoxesData = [
  { body: "Estamos abiertos los 7 días de la semana." },
  { body: "Aceptamos citas y visitas sin cita previa." },
  {
    body: "Descuentos especiales para veteranos y personal militar, estudiantes y personas mayores.",
  },
];

const dealsSlidesData = [
  {
    icon: <i className="icon bx bx-wind display-6"></i>,
    title:
      "Limpieza, vacío y recarga de sistema de aire acondicionado por $450,000!",
    body: "¡Combate el calor con nuestro servicio de primera! Obtén una limpieza, vacío y recarga de freón por solo $450,000.",
  },
  {
    icon: <i className="icon bx bxs-car-wash display-6"></i>,
    title: "Cambio de aceite sintético por solo $180,000",
    body: "¡Mantén tu auto funcionando sin problemas con nuestras ofertas de cambio de aceite! Cambio de aceite sintético por $180,000. ¡Servicio de calidad a excelentes precios!",
  },
  {
    icon: <i className="icon bx bxs-car-wash display-6"></i>,
    title: "Cambio de aceite convencional por solo $70,000",
    body: "¡Mantén tu auto funcionando sin problemas con nuestras ofertas de cambio de aceite! Cambio de aceite convencional por $70,000. ¡Servicio de calidad a excelentes precios!",
  },
  {
    icon: <i className="icon bx bx-stop-circle display-6"></i>,
    title: "Pastillas de freno desde solo $300,000",
    body: "¡Mejora la seguridad de tu vehículo con nuestra oferta limitada de pastillas de freno! Reemplazos expertos, precios especiales. ¡Actúa ahora y conduce con confianza!",
  },
  {
    icon: <i className="icon bx bx-color display-6"></i>,
    title: "Alineación de ruedas desde solo $180,000",
    body: "¡Alineación de ruedas por $180,000 y más! Oferta por tiempo limitado. Mejora el manejo y la eficiencia del combustible. ¡Visítanos hoy!",
  },
  {
    icon: <i className="icon bx bxs-wrench display-6"></i>,
    title: "Afinación completa desde solo $900,000",
    body: "¡Afinación completa desde solo $900,000! Oferta por tiempo limitado. Optimiza el rendimiento y la fiabilidad. ¡Visítanos hoy!",
  },
  {
    icon: <i className="icon bx bxs-color display-6"></i>,
    title: "4 llantas nuevas desde $1,500,000",
    body: "¡Ponte en marcha con una oferta fantástica! 4 llantas nuevas por $1,500,000 y alineación de ruedas gratis. Oferta por tiempo limitado. ¡Visítanos ahora!",
  },
  {
    icon: <i className="icon bx bxs-color display-6"></i>,
    title: "4 llantas usadas desde $750,000",
    body: "¡Prepárate para la carretera con nuestra oferta especial! 4 llantas usadas por $750,000 y alineación de ruedas gratis. Oferta por tiempo limitado. ¡Visítanos ahora!",
  },
  {
    icon: <i className="icon bx bxs-car-garage display-6"></i>,
    title: "Diagnóstico gratuito de luz de check engine.",
    body: "¿Preocupado por la luz de check engine? Obtén un diagnóstico gratuito de nuestros técnicos expertos y conduce con confianza.",
  },
  {
    icon: <i className="icon bx bxs-car-garage display-6"></i>,
    title: "Inspección gratuita del vehículo con cualquier servicio.",
    body: "¡Inspección completa del vehículo gratis con cualquier servicio! Oferta por tiempo limitado. ¡Visítanos hoy!",
  },
];

export default function ServicesPage() {
  const [alertBoxes, setAlertBoxes] = useState([]);
  const [dealsSlides, setDealsSlides] = useState([]);

  useEffect(() => {
    setAlertBoxes(alertBoxesData);
    setDealsSlides(dealsSlidesData);

    let glide = null;
    const glideElement = document.querySelector(".glide-deals");

    // Inicializar Glide solo si el elemento existe
    if (glideElement) {
      glide = new Glide(".glide-deals", {
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
    <section id="deals" className="deals section py-4 min-vh-100 d-flex">
      <div className="container my-3">
        <div className="heading-container text-primary">
          <h2 className="section-heading">
            <i className="bx bxs-gift"></i> Ofertas por tiempo limitado
          </h2>
        </div>

        <ul
          id="alert-boxes"
          className="card bg-secondary text-bg-secondary fw-medium"
        >
          <div className="card-body">
            {alertBoxes.map((bx, index) => (
              <li key={index}>{bx.body}</li>
            ))}
          </div>
        </ul>

        <div className="deals-container my-4 position-relative">
          <div className="glide-deals">
            <div className="glide__track" data-glide-el="track">
              <ul id="deals-slides" className="glide__slides list-unstyled">
                {dealsSlides.map((sl, index) => (
                  <li key={index} className="glide__slide h-auto">
                    <div className="ag-courses_item h-100 bg-primary p-3 text-light rounded">
                      <div className="ag-courses-item_bg"></div>
                      <div className="ag-courses-item_title fs-5 fw-medium mb-2">
                        <div>{sl.icon}</div>
                        <div>{sl.title}</div>
                      </div>
                      <div className="ag-course-body">{sl.body}</div>
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
                className="glide__arrow glide__arrow--left lh-1 m-0 p-0 fs-2 h-100 bg-opacity-25 border-0 shadow-none text-light"
                data-glide-dir="<"
              >
                <i className="bx bxs-chevron-left-circle"></i>
              </button>
              <button
                aria-label="next-slide"
                className="glide__arrow glide__arrow--right lh-1 m-0 p-0 fs-2 h-100 bg-opacity-25 border-0 shadow-none text-light"
                data-glide-dir=">"
              >
                <i className="bx bxs-chevron-right-circle display-6"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
