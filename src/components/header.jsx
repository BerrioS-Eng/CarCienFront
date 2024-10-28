"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  const handleScheduleClick = (e) => {
    e.preventDefault();
    router.push("/schedule"); // Reemplaza '/schedule' con la ruta a la que deseas redirigir
  };

  useEffect(() => {
    // Navigation
    /* ## Set Mobile Navigation stuff
    --------------------------------------------- */
    // selecting the element
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav.nav-primary");

    // Functionality for main menu-toggle button
    menuButton.addEventListener("click", function () {
      // Show site navigation
      navigation.classList.toggle("show");

      // toggle activated class
      menuButton.classList.toggle("activated");
      menuButton.classList.toggle("bx-x");

      // toggle attrs
      if (menuButton.getAttribute("aria-expanded") === "true") {
        menuButton.setAttribute("aria-expanded", "false");
      } else {
        menuButton.setAttribute("aria-expanded", "true");
      }

      if (menuButton.getAttribute("aria-pressed") === "true") {
        menuButton.setAttribute("aria-pressed", "false");
      } else {
        menuButton.setAttribute("aria-pressed", "true");
      }
    });

    // Collapse menu on click
    const menuLinks = document.querySelectorAll(
      ".primary-menu .menu-item a, a.top-link, .site-title a"
    );
    // Functionality of individual links
    menuLinks.forEach((eachLink) => {
      eachLink.addEventListener("click", function () {
        // Hide Main Navigation on click
        navigation.classList.remove("show");

        // remove activated class and attrs from menu-toggle button
        menuButton.classList.remove("activated");
        menuButton.classList.remove("bx-x");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-pressed", "false");
      });
    });

    /* ## Add dark class to the header and top link
    --------------------------------------------- */
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    });

    /* ## SETUP SCROLL SPY
    --------------------------------------------- */
    let menuSection = document.querySelectorAll(".nav-primary li.menu-item a");
    // for clickable event
    menuSection.forEach((v) => {
      v.onclick = () => {
        setTimeout(() => {
          menuSection.forEach((j) => j.classList.remove("active"));
          v.classList.add("active");
        }, 300);
      };
    });
    // for window scrolldown event
    window.onscroll = () => {
      let mainSection = document.querySelectorAll(
        "main.entry-content section.section"
      );

      mainSection.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y;

        if (rect < window.innerHeight - window.innerHeight + 100) {
          /* calculate till section reaches to top */
          menuSection.forEach((v) => v.classList.remove("active"));
          menuSection[i].classList.add("active");
        }
      });
    };
  }, []);

  return (
    <header
      id="header"
      className={`site-header ${!isHome ? "scrolled-header" : ""}`}
      style={isHome ? { backgroundColor: "transparent" } : {}}
    >
      <div className="container">
        <div className="nav-flex">
          {/*  SITE LOGO  */}
          <div className="title-area">
            <div className="site-title" itemProp="headline">
              <a href="/">
                Los mejores servicios de reparación de automóviles y cambio de
                aceite en Planeta Rica, Cordoba | CARCIENPLANETARICA
              </a>
            </div>
            <div className="site-description" itemProp="description">
              Descubra los mejores servicios de reparación de automóviles y
              cambio de aceites en Planeta Rica, Cordoba, en CARCIENPLANETARICA.
              Nuestros técnicos expertos brindan soluciones de primer nivel para
              todas sus necesidades automotrices. Desde el cambio de aceite y
              filtros hasta mecánica especializada, confíe en nosotros para
              obtener servicios confiables y certificados. Programe su cita hoy
              para disfrutar de un viaje más tranquilo y una satisfacción del
              cliente excepcional.
            </div>
          </div>
          {/* Primary Navigation */}
          <button
            className="menu-toggle icon-menu bx bx-menu"
            aria-label="Navigation Menu Button"
            aria-expanded="false"
            aria-pressed="false"
          ></button>
          <nav
            className="nav-primary"
            aria-label="Primary"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul id="primary-menu" className="primary-menu list-unstyled">
              <li className="menu-item active">
                <a className="nav-link" href="/">
                  <i className="bx bxs-home"></i> Home
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#services">
                  <i className="bx bxs-gift"></i> Servicios
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#about">
                  <i className="bx bxs-info-circle"></i> Acerca de
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#whyus">
                  <i className="bx bxs-wrench"></i> Por qué nosotros
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleScheduleClick}>
                  <i className="bx bxs-contact"></i> Agenda tu cita!
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/signin">
                  <i className="bx bxs-user"></i> Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
