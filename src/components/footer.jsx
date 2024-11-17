"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const display = pathname == "/" ? "hidden" : "";

  useEffect(() => {
    // Show current year
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer
      className={display + " site-footer bg-primary text-bg-primary py-1"}
      itemType="https://schema.org/WPFooter"
      itemScope="itemscope"
    >
      <div className="container">
        <div className="row py-4 align-items-center g-4">
          <div className="logo col-lg-4 text-center text-lg-start">
            <img src="/media/cc-logo.png" alt="Logo" width="150" />
          </div>

          <div className="col-lg-4 social-links">
            <ul className="d-flex flex-wrap list-unstyled m-0 justify-content-around">
              <li>
                <a
                  href="https://www.instagram.com/carcienplanetarica/"
                  target="_blank"
                  rel="nofollow"
                  title="Facebook Page"
                >
                  <i className="btn btn-info rounded-pill p-2 bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+573008245437"
                  target="_blank"
                  rel="nofollow"
                  title="WhatsApp"
                >
                  <i className="btn btn-info rounded-pill p-2 bx bxl-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:carcienplanetarica@gmail.com"
                  title="Envianos un Email!"
                >
                  <i className="btn btn-info rounded-pill p-2 bx bxl-gmail"></i>
                </a>
              </li>
              <li>
                <a href="tel:+573008245437" title="LLamanos!">
                  <i className="btn btn-info rounded-pill p-2 bx bx-phone"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/P3TUz9J553EhcQmm7"
                  target="_blank"
                  rel="nofollow"
                  title="Encuentranos en Google Maps!"
                >
                  <i className="btn btn-info rounded-pill p-2 bx bxs-map-alt"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="text-lg-end text-center">
              <p className="m-0">
                Copyright &copy; <span id="year">2023</span>
              </p>
              <p>CarCien &amp; Taller mecánico</p>
            </div>
          </div>
        </div>
      </div>
      <a className="top-link" href="#home" title="Go to Top">
        <i className="btn rounded-pill btn-outline-info p-2 bx bxs-to-top fw-normal"></i>
      </a>
    </footer>
  );
}
