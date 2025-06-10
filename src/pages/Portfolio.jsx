import React, { useEffect, useRef, useState } from "react";
import portrait from "../assets/images/portrait.jpg";
import tamil from "../assets/images/portfolio/landing/tamil.png";
import christain from "../assets/images/portfolio/landing/christain.png";
import telugu from "../assets/images/portfolio/landing/telugu.png";
import pre from "../assets/images/portfolio/landing/pre.png";
import baby from "../assets/images/portfolio/landing/baby.png";
const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const modalEl = modalRef.current;

    const handleHidden = () => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src; // Reset video
      }
    };

    if (modalEl) {
      modalEl.addEventListener("hidden.bs.modal", handleHidden);
    }

    return () => {
      if (modalEl) {
        modalEl.removeEventListener("hidden.bs.modal", handleHidden);
      }
    };
  }, []);

  const openModal = () => {
    setShow(true);
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  return (
    <div>
      <section>
        <div className="portfolio-bg">
          <h1 className="text-center text-white">Portfolio</h1>
        </div>
      </section>
      <section className="section-poadding mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 ">
              <div className="row justify-content-center align-items-center">
                <div className="col-6 col-lg-3 text-center p-2 p-md-4">
                  <a href="/tamil-wedding" className="text-decoration-none portfolio-link">
                    <img src={tamil} alt="portrait" className="img-fluid" style={{ cursor: "pointer", maxHeight: '350px', height: '100%' }} />
                    <h4 className="mt-4 mb-0">Tamil Wedding</h4>
                  </a>
                </div>
                <div className="col-6 col-lg-3 text-center p-2 p-md-4">
                  <a href="/Christian-wedding" className="text-decoration-none portfolio-link">
                    <img src={christain} alt="portrait" className="img-fluid" style={{ cursor: "pointer", maxHeight: '350px', height: '100%' }} />
                    <h4 className="mt-4 mb-0">Christian Wedding</h4>
                  </a>
                </div>
                <div className="col-6 col-lg-3 text-center p-2 p-md-4">
                  <a href="/telugu-wedding" className="text-decoration-none portfolio-link ">
                    <img src={telugu} alt="portrait" className="img-fluid" style={{ cursor: "pointer", maxHeight: '350px', height: '100%' }} />
                    <h4 className="mt-4 mb-0">Telugu Wedding</h4>
                  </a>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-6 col-lg-3 text-center p-2 p-md-4">
                  <a href="/postpre-wedding" className="text-decoration-none portfolio-link">
                    <img src={pre} alt="portrait" className="img-fluid" style={{ cursor: "pointer", maxHeight: '350px', height: '100%' }} />
                    <h4 className="mt-4 mb-0">Post & Pre Wedding</h4>
                  </a>
                </div>
                <div className="col-6 col-lg-3 text-center p-2 p-md-4">
                  <a href="/newborn-wedding" className="text-decoration-none portfolio-link">
                    <img src={baby} alt="portrait" className="img-fluid" style={{ cursor: "pointer", maxHeight: '350px', height: '100%' }} />
                    <h4 className="mt-4 mb-0">New Born Portrait</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
