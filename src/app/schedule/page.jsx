"use client";

import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    // Store status
    function storeStatus() {
      const timeZone = "America/New_York";
      const now = new Date();
      const localTime = new Date(
        now.toLocaleString("en-US", {
          timeZone: timeZone,
        })
      );
      // Days ---------------------------
      const options = { weekday: "long" };
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: timeZone,
      });
      const orangeCityDayToday = new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(localTime);
      const outputDay = `${orangeCityDayToday} ${formattedTime}`;

      // Time --------------------------
      const hours = localTime.getHours();
      const dayOfWeek = localTime.toLocaleString("en-US", {
        timeZone,
        weekday: "long",
      });

      let outputTime;
      // Check if it's during opening hours
      if (
        (dayOfWeek === "Sunday" && hours >= 9 && hours < 17) ||
        (dayOfWeek !== "Sunday" && hours >= 8 && hours < 19)
      )
        outputTime =
          '<span class="open text-success fw-bold">Open</span> come on down';
      // Check if it's after closing hours but before midnight
      else if (
        (dayOfWeek === "Sunday" && hours >= 17 && hours < 24) ||
        (dayOfWeek !== "Sunday" && hours >= 19 && hours < 24)
      )
        outputTime =
          '<span class="closed text-danger fw-bold">Closed</span> at the moment see you tomorrow. &#128578;';
      // Check if it's before opening hours but after midnight
      else if (hours >= 0 && (dayOfWeek === "Sunday" ? hours < 8 : hours < 9)) {
        if (dayOfWeek === "Sunday" && hours < 8)
          outputTime =
            '<span class="closed text-danger fw-bold">Closed</span> at the moment see you at 08:00 AM. &#128564;';
        else if (dayOfWeek !== "Sunday" && hours < 9)
          outputTime =
            '<span class="closed text-danger fw-bold">Closed</span> at the moment see you at 09:00 AM. &#128564;';
      }

      return `It is ${outputDay}, We are ${outputTime}`;
    }

    function updateStatusRealtime() {
      document.getElementById("storestatus").innerHTML = `${storeStatus()}`;
    }
    updateStatusRealtime();
    setInterval(updateStatusRealtime, 15000);

    // JavaScript form submission
    const formId = "homepage-contact-form";
    const contactForm = document.getElementById(formId);
    if (contactForm) {
      const nameInput = document.querySelector(
        "#" + formId + " #contact-form-name"
      );
      const emailInput = document.querySelector(
        "#" + formId + " #contact-form-email"
      );
      const messageInput = document.querySelector(
        "#" + formId + " #contact-form-message"
      );

      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };

      // Error Alerts
      const alertPlaceholder = document.querySelector(
        "#" + formId + " #errorAlerts"
      );
      const appendAlert = (message) => {
        alertPlaceholder.innerHTML = [
          `<div class="alert alert-danger alert-dismissible" role="alert">`,
          `<div>${message}</div>`,
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          "</div>",
        ].join("");
      };

      const validateForm = () => {
        if (nameInput.value.trim() === "") {
          appendAlert("Please enter your name");
          return false;
        }
        if (
          emailInput.value.trim() === "" ||
          !validateEmail(emailInput.value)
        ) {
          appendAlert("Please enter a valid email address.");
          return false;
        }
        if (messageInput.value.trim() === "") {
          appendAlert("Please enter a message.");
          return false;
        }
        return true;
      };

      contactForm.addEventListener("submit", function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Remove previous alerts
        const alertDismiss = this.querySelectorAll(
          "#" + formId + " #errorAlerts > *"
        );
        if (alertDismiss) {
          alertDismiss.forEach((e) => {
            e.remove();
          });
        }

        if (!validateForm()) {
          return false;
        } else {
          const receiveEmail = "carclubtire@gmail.com";
          // Compose email message
          const subject = `[Contact-Form] ${nameInput.value}`;
          const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;
          // Open default email app and fill in appropriate fields
          const mailtoUrl = `mailto:${encodeURIComponent(
            receiveEmail
          )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body
          )}`;
          // Open Email client on click
          window.open(mailtoUrl);
        }
      });
    }
  }, []);

  return (
    <section
      id="contactus"
      className="contactus section"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <div className="heading-container text-primary">
          <h2 className="section-heading">
            <i className="bx bxs-contact"></i> Contact Us
          </h2>
        </div>

        <p className="section-copy my-4 text-center text-md-start">
          Feel free to reach out to us at for any of your automotive needs.
          Whether it's a tire change, wheel alignment, or any other auto repair
          service, our expert technicians are here to assist you. Contact us
          today to schedule an appointment and let us keep your vehicle running
          smoothly and safely on the road.
        </p>

        <div className="d-lg-flex mb-4">
          <div className="col-lg-6 col-12 pe-lg-3">
            <ul className="contact-icon-list-items mb-5 fw-medium list-unstyled">
              <li className="contact-icon-list-item mb-4">
                <a href="tel:+13865619732">
                  <i className="bx bxs-phone-call"></i> +1-386-561-9732
                </a>
              </li>
              <li className="contact-icon-list-item mb-4">
                <a href="tel:+15593631550">
                  <i className="bx bxs-phone-call"></i> +1-559-363-1550
                </a>
              </li>
              <li className="contact-icon-list-item mb-4">
                <a
                  href="https://wa.me/+15593631550"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="bx bxl-whatsapp"></i> +1-559-363-1550
                </a>
              </li>
              <li className="contact-icon-list-item mb-4">
                <a href="mailto:carclubtire@gmail.com">
                  <i className="bx bxs-envelope"></i> info@carclubtire.com
                </a>
              </li>
              <li className="contact-icon-list-item">
                <a
                  href="https://maps.app.goo.gl/C56gKsbVXTg5ntiS8"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="bx bxs-map-alt"></i> 1130 S Volusia Ave, Orange
                  City, FL 32763
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
              <table className="table table-striped table table-bordered">
                <thead className="thead">
                  <tr>
                    <th className="text-primary">
                      <i className="bx bxs-calendar-event"></i> Day
                    </th>
                    <th className="text-primary">
                      <i className="bx bxs-time"></i> Hours ( EST/UTC-5 )
                    </th>
                  </tr>
                </thead>
                <tbody className="table table-striped">
                  <tr>
                    <td>Monday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>08:00 AM - 07:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
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
                  Please enable JavaScript in your browser to complete this
                  form.
                </noscript>
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-name"
                >
                  <i className="bx bx-user"></i> Name:
                  <span className="required-label text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="contact-form-name"
                  className="contact-form-name"
                  name="contact-form-name"
                  placeholder="Full name"
                  required
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-email"
                >
                  <i className="bx bx-envelope"></i> Email:
                  <span className="required-label">*</span>
                </label>
                <input
                  type="email"
                  id="contact-form-email"
                  className="contact-form-email"
                  name="contact-form-email"
                  placeholder="Email address"
                  required
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-number"
                >
                  <i className="bx bx-phone"></i> Contact Number:
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
                  <i className="bx bx-car"></i> Vehicle Make and Model:
                </label>
                <input
                  type="text"
                  id="contact-form-vehicle"
                  className="contact-form-vehicle"
                  name="contact-form-vehicle"
                  placeholder="Company name and model"
                />
                <label
                  className="contact-form-field-label"
                  htmlFor="contact-form-message"
                >
                  <i className="bx bx-message-dots"></i> Message:
                  <span className="required-label">*</span>
                </label>
                <textarea
                  id="contact-form-message"
                  className="contact-form-message"
                  name="contact-form-message"
                  placeholder="Your message here.."
                  rows="5"
                  required
                ></textarea>
                <div id="errorAlerts"></div>
                <button
                  type="submit"
                  name="form-submit-button"
                  id="form-submit-button"
                  className="form-submit-button btn rounded-pill btn-primary"
                  data-submit-text="Send us an E-Mail"
                  aria-live="assertive"
                  value="form-submit-button"
                >
                  <i className="bx bxs-envelope"></i> Send us an E-Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
