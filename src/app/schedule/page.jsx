"use client";

import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    function storeStatus() {
      const timeZone = "America/Bogota";
      const now = new Date();

      // Mostrar solo la hora local sin conversiones intermedias
      const formattedTime = now.toLocaleTimeString("es-CO", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: timeZone,
      });
      const dayToday = now.toLocaleDateString("es-CO", {
        weekday: "long",
        timeZone: timeZone,
      });
      const outputDay = `${dayToday} ${formattedTime}`;

      // Obtener hora y día
      const hours = now.getHours();
      const dayOfWeek = dayToday;

      let outputTime;
      if (
        (dayOfWeek === "domingo" && hours >= 9 && hours < 17) ||
        (dayOfWeek !== "domingo" && hours >= 8 && hours < 19)
      ) {
        outputTime =
          '<span class="open text-success fw-bold">Abiertos</span> ven a visitarnos';
      } else if (
        (dayOfWeek === "domingo" && hours >= 17 && hours < 24) ||
        (dayOfWeek !== "domingo" && hours >= 19 && hours < 24)
      ) {
        outputTime =
          '<span class="closed text-danger fw-bold">Cerrados</span> en este momento, nos vemos mañana. &#128578;';
      } else if (
        hours >= 0 &&
        (dayOfWeek === "domingo" ? hours < 8 : hours < 9)
      ) {
        if (dayOfWeek === "domingo" && hours < 8) {
          outputTime =
            '<span class="closed text-danger fw-bold">Cerrados</span> en este momento, nos vemos a las 08:00 AM. &#128564;';
        } else if (dayOfWeek !== "domingo" && hours < 9) {
          outputTime =
            '<span class="closed text-danger fw-bold">Cerrados</span> en este momento, nos vemos a las 09:00 AM. &#128564;';
        }
      }

      return `Es ${outputDay}, Estamos ${outputTime}`;
    }

    function updateStatusRealtime() {
      document.getElementById("storestatus").innerHTML = storeStatus();
    }
    updateStatusRealtime();
    setInterval(updateStatusRealtime, 15000);
  }, []);

  return (
    <section
      id="contactus"
      className="contactus section"
      style={{ paddingTop: "170px" }}
    >
      <div className="container">
        <div className="heading-container text-primary">
          <h2 className="section-heading">
            <i className="bx bxs-contact"></i> Contáctenos
          </h2>
        </div>

        <p className="section-copy my-4 text-center text-md-start">
          No dude en comunicarse con nosotros para cualquiera de sus necesidades
          automotrices. Ya sea un cambio de llantas, alineación de ruedas u otro
          servicio de reparación de automóviles, nuestros técnicos expertos
          están aquí para ayudarlo. Contáctenos hoy para programar una cita y
          permítanos mantener su vehículo funcionando sin problemas y de manera
          segura en la carretera.
        </p>

        <div className="d-lg-flex mb-4">
          <div className="col-lg-6 col-12 pe-lg-3">
            <ul className="contact-icon-list-items mb-5 fw-medium list-unstyled">
              <li className="contact-icon-list-item mb-4">
                <a href="tel:+573008245437">
                  <i className="bx bxs-phone-call"></i> 300 824 5437
                </a>
              </li>
              <li className="contact-icon-list-item mb-4">
                <a href="mailto:carcienplanetarica@gmail.com">
                  <i className="bx bxs-envelope"></i>{" "}
                  carcienplanetarica@gmail.com
                </a>
              </li>
              <li className="contact-icon-list-item">
                <a
                  href="https://maps.app.goo.gl/P3TUz9J553EhcQmm7"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="bx bxs-map-alt"></i> Calle 26 N° 7 - 17, Barrio
                  Santander, Planeta Rica, Córdoba, Colombia
                </a>
              </li>
            </ul>

            <div
              className="business-hours fs-5 mb-3 fw-medium"
              id="business-hours"
            >
              <p>
                <i className="bx bxs-calendar"></i>
                <span id="storestatus" className="storestatus"></span>
              </p>
            </div>

            <div className="working-hours border-primary mb-4 mb-lg-0">
              <table className="table table-striped table-bordered">
                <thead className="thead">
                  <tr>
                    <th className="text-primary">
                      <i className="bx bxs-calendar-event"></i> Día
                    </th>
                    <th className="text-primary">
                      <i className="bx bxs-time"></i> Horario ( EST/UTC-5 )
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lunes</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Martes</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Miércoles</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Jueves</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Viernes</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sábado</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Domingo</td>
                    <td>09:00 AM - 05:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-6 col-12 ml-lg-2 ps-lg-3">
            <div className="contact-form mb-5" id="contact-form">
              <form
                id="homepage-contact-form"
                className="homepage-contact-form"
                method="post"
              >
                <noscript className="wpforms-error-noscript">
                  Por favor habilite JavaScript en su navegador para completar
                  este formulario.
                </noscript>
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-name"
                >
                  <i className="bx bx-user"></i> Nombre:
                  <span className="required-label text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="contact-form-name"
                  className="contact-form-name"
                  name="contact-form-name"
                  placeholder="Nombre completo"
                  required
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-email"
                >
                  <i className="bx bx-envelope"></i> Correo electrónico:
                  <span className="required-label">*</span>
                </label>
                <input
                  type="email"
                  id="contact-form-email"
                  className="contact-form-email"
                  name="contact-form-email"
                  placeholder="Correo electrónico"
                  required
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-number"
                >
                  <i className="bx bx-phone"></i> Número de contacto:
                </label>
                <input
                  type="tel"
                  id="contact-form-number"
                  className="contact-form-number"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  placeholder="XXXXXXXXXX"
                  name="contact-form-number"
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-vehicle"
                >
                  <i className="bx bx-car"></i> Marca y modelo del vehículo:
                </label>
                <input
                  type="text"
                  id="contact-form-vehicle"
                  className="contact-form-vehicle"
                  name="contact-form-vehicle"
                  placeholder="Marca y modelo del vehículo"
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-message"
                >
                  <i className="bx bx-message-dots"></i> Mensaje:
                  <span className="required-label">*</span>
                </label>
                <textarea
                  id="contact-form-message"
                  className="contact-form-message"
                  name="contact-form-message"
                  placeholder="Su mensaje aquí..."
                  rows="5"
                  required
                ></textarea>
                <div id="errorAlerts"></div>
                <button
                  type="submit"
                  name="form-submit-button"
                  id="form-submit-button"
                  className="form-submit-button btn rounded-pill btn-primary"
                  data-submit-text="Envíenos un correo electrónico"
                  aria-live="assertive"
                  value="form-submit-button"
                >
                  <i className="bx bxs-envelope"></i> Envíenos un correo
                  electrónico
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
