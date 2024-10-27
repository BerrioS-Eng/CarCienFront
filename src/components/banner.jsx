export default function Banner() {
  return (
    <section id="home" className="font-sans hero section">
      <div className="background-overlay"></div>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 d-none d-lg-block"></div>
          <div className="col-lg-6 text-center text-lg-start">
            <div className="heading-container text-primary">
              <h1 className="fw-bold text-light">
                Descubra el mejor lugar para servicios de reparación de
                automóviles en Planeta Rica, Córdoba.
              </h1>
              <p className="text-light fw-medium">
                Nuestros técnicos expertos brindan soluciones de primer nivel
                para todas sus necesidades automotrices. Desde cambio de llantas
                hasta reparaciones completas de automóviles, confíe en nosotros
                para obtener servicios confiables y certificados.
              </p>
            </div>
            <div className="home-phone-container">
              <a
                className="home-phone fs-5 text-end fw-medium text-light"
                href="tel:+573000000000"
              >
                <i className="p-3-1 me-2 btn btn-lg btn-outline-light rounded-pill bx bxs-phone-call"></i>
                (300)-000-0000
              </a>
            </div>
            <div className="my-4">
              <a
                className="p-3 btn rounded-pill btn-secondary fw-bold"
                href="#schedule"
              >
                <i className="bx bxs-book"></i> Agenda tu cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
