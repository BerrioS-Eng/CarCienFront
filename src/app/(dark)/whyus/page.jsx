"use client";

import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const counterBoxesData = [
  {
    id: "business-counter",
    number: 5,
    text: "Años en el negocio",
  },
  {
    id: "tires-counter",
    number: 650,
    text: "Llantas cambiadas",
  },
  {
    id: "wheels-counter",
    number: 2250,
    text: "Ruedas alineadas",
  },
  {
    id: "oil-counter",
    number: 5000,
    text: "Aceites cambiados",
  },
];

const reasonBoxesData = [
  {
    title: `Experiencia Inigualable`,
    body: `En CAR CIEN Planeta Rica, nuestro equipo de técnicos altamente calificados y certificados aporta años de experiencia y conocimientos. Puedes confiar en nosotros para manejar tu vehículo con precisión y cuidado, asegurando reparaciones y mantenimiento de primera calidad.`,
  },
  {
    title: `Enfoque Centrado en el Cliente`,
    body: `Priorizamos tu satisfacción y hacemos un esfuerzo adicional para brindar atención personalizada a cada cliente. Nuestro equipo amigable y accesible siempre está listo para escuchar tus preocupaciones y ofrecer soluciones a medida que se adapten a tus necesidades específicas.`,
  },
  {
    title: `Amplia Gama de Servicios`,
    body: `Desde trabajos de llantas y mantenimiento hasta reparaciones completas de automóviles, ofrecemos una amplia gama de servicios bajo un mismo techo. Ya sea mantenimiento de rutina o reparaciones complejas, te tenemos cubierto, ahorrándote tiempo y molestias.`,
  },
  {
    title: `Calidad y Confiabilidad`,
    body: `Nos comprometemos a utilizar piezas y materiales de alta calidad en todos nuestros servicios. Nuestro énfasis en la confiabilidad asegura que tu vehículo reciba el mejor cuidado posible, mejorando su rendimiento y longevidad.`,
  },
  {
    title: `Precios Transparentes`,
    body: `En CAR CIEN, creemos en precios transparentes y justos. Puedes contar con nosotros para proporcionar estimaciones honestas y sin tarifas ocultas, permitiéndote tomar decisiones informadas sin sorpresas.`,
  },
  {
    title: `Rápida Entrega`,
    body: `Entendemos que tu tiempo es valioso, por eso nos esforzamos por ofrecer un servicio eficiente y puntual. Nuestro equipo trabaja diligentemente para que vuelvas a la carretera lo más rápido posible, sin comprometer la calidad.`,
  },
];

export default function WhyUsPage() {
  const [counterBoxes, setCounterBoxes] = useState([]);
  const [reasonBoxes, setReasonBoxes] = useState([]);

  useEffect(() => {
    setCounterBoxes(counterBoxesData);
    setReasonBoxes(reasonBoxesData);

    // Setup counters
    const counterBoxesElement = document.getElementById("counter-boxes");
    if (counterBoxesElement) {
      counterBoxesElement.innerHTML = counterBoxesData
        .map((cb) => {
          const id = cb.id ? cb.id : ``;
          const number = cb.number ? cb.number : ``;
          const text = cb.text ? cb.text : ``;
          return `
          <div id="${id}" class="counter-widget col-6 col-lg-3">
            <div class="shadow-sm rounded p-4 bg-secondary text-bg-secondary h-100 d-flex flex-column justify-content-center">
              <div class="counter-container">
                <div class="counter-head fs-3">
                  <span class="counter-number">${number}</span>+
                </div>
              </div>
              <div>${text}</div>
            </div>
          </div>`;
        })
        .join("");
    }

    // Animate counters
    const reasonCounter = document.querySelectorAll(`.counter-number`);
    reasonCounter.forEach((reason) => {
      if (reason) countWhenVisible(reason, reason.innerHTML, 1000);
    });

    function countWhenVisible(element, targetCount, speed) {
      let hasCounted = false;
      let startTime = null;
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          hasCounted = true;
          startTime = performance.now();
          let count = 0;
          let duration = speed;
          let interval = setInterval(() => {
            let elapsedTime = performance.now() - startTime;
            let progress = elapsedTime / duration;
            if (progress >= 1) {
              clearInterval(interval);
              element.innerHTML = targetCount;
            } else {
              count = Math.floor(progress * targetCount);
              element.innerHTML = count;
            }
          }, 20);
        }
      });
      if (element) observer.observe(element);
    }

    // Setup reason boxes
    const reasonBoxesElement = document.getElementById("reason-boxes");
    if (reasonBoxesElement) {
      reasonBoxesElement.innerHTML = reasonBoxesData
        .map((rs) => {
          const title = rs.title ? rs.title : ``;
          const body = rs.body ? rs.body : ``;
          return `
          <div class="col-lg-4 col-6 col-12">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <div class="fs-5 text-primary fw-medium card-title">${title}</div>
                ${body}
              </div>
            </div>
          </div>`;
        })
        .join("");
    }
  }, []);

  return (
    <section id="whyus" className="whyus section py-4 d-flex">
      <div className="container my-3">
        <div className="heading-container text-primary">
          <h2 className="section-heading">
            <i className="bx bxs-wrench"></i> Por qué Nosotros
          </h2>
        </div>

        <p className="section-copy my-4 text-center text-md-start">
          Descubra el mejor lugar para servicios de reparación de automóviles en
          Planeta Rica, Córdoba. Nuestros técnicos expertos brindan soluciones
          de primer nivel para todas sus necesidades automotrices. Desde cambio
          de llantas hasta reparaciones completas de automóviles, confíe en
          nosotros para obtener servicios confiables y certificados.
        </p>

        <div
          id="counter-boxes"
          className="counter-box my-4 fw-medium text-center row row-gap-3"
        ></div>

        <div id="reason-boxes" className="row g-2"></div>
      </div>
    </section>
  );
}
