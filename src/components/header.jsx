"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleScheduleClick = (e) => {
    e.preventDefault();
    router.push("/schedule"); // Reemplaza '/schedule' con la ruta a la que deseas redirigir
  };

  return (
    <header id="header" className="site-header">
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
