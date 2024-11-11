"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    router.push("/servicios");
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    router.push("/about");
  };

  const handleWhyUsClick = (e) => {
    e.preventDefault();
    router.push("/whyus");
  };

  const handleScheduleClick = (e) => {
    e.preventDefault();
    router.push("/schedule");
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("/signin");
  };

  useEffect(() => {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav.nav-primary");

    const toggleMenu = () => {
      navigation?.classList.toggle("show");
      menuButton?.classList.toggle("activated");
      menuButton?.classList.toggle("bx-x");

      const isExpanded = menuButton?.getAttribute("aria-expanded") === "true";
      menuButton?.setAttribute("aria-expanded", (!isExpanded).toString());
      menuButton?.setAttribute("aria-pressed", (!isExpanded).toString());
    };

    menuButton?.addEventListener("click", toggleMenu);

    const menuLinks = document.querySelectorAll(".primary-menu .menu-item a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (navigation?.classList.contains("show")) {
          toggleMenu();
        }

        if (href.startsWith("#")) {
          if (pathname === "/") {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          } else {
            router.push(`/${href}`);
          }
        } else {
          router.push(href);
        }
      });
    });

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
    };
  }, [router, pathname]);

  return (
    <header id="header" className="site-header">
      <div className="container">
        <div className="nav-flex">
          <div className="title-area">
            <div className="site-title" itemProp="headline">
              <a href="/" onClick={handleHomeClick}>
                Los mejores servicios de reparación de automóviles y cambio de
                aceite en Planeta Rica, Cordoba | CARCIENPLANETARICA
              </a>
            </div>
            <div className="site-description" itemProp="description">
              Descubra los mejores servicios de reparación de automóviles y
              cambio de aceites en Planeta Rica, Cordoba, en CARCIENPLANETARICA.
              Nuestros técnicos expertos brindan soluciones de primer nivel para
              todas sus necesidades automotrices.
            </div>
          </div>
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
              <li className="menu-item">
                <a className="nav-link" href="/" onClick={handleHomeClick}>
                  <i className="bx bxs-home"></i> Home
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleServicesClick}>
                  <i className="bx bxs-gift"></i> Servicios
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleAboutClick}>
                  <i className="bx bxs-info-circle"></i> Acerca de
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleWhyUsClick}>
                  <i className="bx bxs-wrench"></i> Por qué nosotros
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleScheduleClick}>
                  <i className="bx bxs-contact"></i> Agenda tu cita!
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="#" onClick={handleLoginClick}>
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
