"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const myClass = pathname == "/" ? "site-header" : "dark";

  const setMobileNavigation = () => {
    // Selecting the element
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav.nav-primary");

    // Show site navigation
    navigation.classList.toggle("show");

    // // Toggle activated class
    menuButton.classList.toggle("activated");
    menuButton.classList.toggle("bx-x");
  };

  const collapseMenuOnClick = () => {
    // Selecting the element
    const navigation = document.querySelector("nav.nav-primary");

    // Hide Main Navigation on click
    navigation.classList.remove("show");
  };

  return (
    <header id="header" className={myClass + " fixed top-0 left-0 w-full z-10"}>

      <div className="container">
        <div className="nav-flex">
          {/*  SITE LOGO  */}
          <div className="title-area">
            <div className="site-title" itemProp="headline">
              <Link href="/">
                Los mejores servicios de reparación de automóviles y cambio de
                aceite en Planeta Rica, Cordoba | CARCIENPLANETARICA
              </Link>
            </div>
            <div className="site-description" itemProp="description">
              Descubra los mejores servicios de reparación de automóviles y
              cambio de aceites en Planeta Rica, Cordoba, en CARCIENPLANETARICA.
              Nuestros técnicos expertos brindan soluciones de primer nivel para
              todas sus necesidades automotrices.
            </div>
          </div>
          {/* Primary Navigation */}
          <button
            className="menu-toggle icon-menu bx bx-menu"
            aria-label="Navigation Menu Button"
            aria-expanded="false"
            aria-pressed="false"
            onClick={() => setMobileNavigation()}
          ></button>
          <nav
            className="nav-primary"
            aria-label="Primary"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul id="primary-menu" className="primary-menu list-unstyled">
              <li
                className="menu-item active"
                onClick={() => collapseMenuOnClick()}
              >
                <Link className="nav-link" href="/">
                  <i className="bx bxs-home"></i> Home
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/servicios">
                  <i className="bx bxs-gift"></i> Servicios
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/about">
                  <i className="bx bxs-info-circle"></i> Acerca de
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/whyus">
                  <i className="bx bxs-wrench"></i> Por qué nosotros
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/schedule">
                  <i className="bx bxs-contact"></i> Agenda tu cita!
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/signin">
                  <i className="bx bxs-user"></i> Login
                </Link>
              </li>
              <li className="menu-item" onClick={() => collapseMenuOnClick()}>
                <Link className="nav-link" href="/signup">
                  <i className="bx bxs-user-plus"></i> Registro
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
