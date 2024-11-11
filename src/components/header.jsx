export default function Header() {
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
              todas sus necesidades automotrices.
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
                <a className="nav-link" href="/servicios">
                  <i className="bx bxs-gift"></i> Servicios
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/about">
                  <i className="bx bxs-info-circle"></i> Acerca de
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/whyus">
                  <i className="bx bxs-wrench"></i> Por qué nosotros
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/schedule">
                  <i className="bx bxs-contact"></i> Agenda tu cita!
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/signin">
                  <i className="bx bxs-user"></i> Login
                </a>
              </li>
              <li className="menu-item">
                <a className="nav-link" href="/signup">
                  <i className="bx bxs-user-plus"></i> Registro
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
