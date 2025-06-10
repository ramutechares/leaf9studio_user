import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import react from '@vitejs/plugin-react';
import portrait from "../assets/images/portrait.jpg";

import BgOne from "../assets/images/bgone.jpg";
import TaOne from "../assets/images/portfolio/tamil-wedding/ta-1.jpg";
import TaTwo from "../assets/images/portfolio/tamil-wedding/ta-2.jpg";
import TaThree from "../assets/images/portfolio/tamil-wedding/ta-3.jpg";
import TaFour from "../assets/images/portfolio/tamil-wedding/ta-4.jpg";
import TaFive from "../assets/images/portfolio/tamil-wedding/ta-5.jpg";
import TaSix from "../assets/images/portfolio/tamil-wedding/ta-6.jpg";
import TaSeven from "../assets/images/portfolio/tamil-wedding/ta-7.jpg";
import TaEight from "../assets/images/portfolio/tamil-wedding/ta-8.jpg";
import TaNine from "../assets/images/portfolio/tamil-wedding/ta-9.jpg";
// import TaTen from "../assets/images/portfolio/tamil-wedding/ta-10.png";
import TaEleven from "../assets/images/portfolio/tamil-wedding/ta-11.png";
import TaTwele from "../assets/images/portfolio/tamil-wedding/ta-12.png";
import TaThrirteen from "../assets/images/portfolio/tamil-wedding/ta-13.png";
import TaFourteen from "../assets/images/portfolio/tamil-wedding/ta-14.png";
import TaFifteen from "../assets/images/portfolio/tamil-wedding/ta-15.png";
import TaSixteen from "../assets/images/portfolio/tamil-wedding/ta-16.png";

import { Modal } from "react-bootstrap";
const Tamilwedding = () => {
  const images = [
    
      TaTwo,
      TaOne,
      TaThree,
      TaFive,
      TaSix,
      TaFour,
      TaEight,
      TaSeven,
      TaNine,
      TaTen,
      TaEleven,
      TaTwele,
      TaThrirteen,
      TaFourteen,
      TaFifteen,
      TaSixteen,
      
      
    ];
  
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleImageClick = (index) => {
      setCurrentIndex(index);
      setShowModal(true);
    };
  
    const handlePrev = () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    };
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
  const menuItems = [
    { name: "Tamil Wedding", path: "/tamil-wedding" },
    { name: "Telugu Wedding", path: "/telugu-wedding" },
    { name: "Christain Wedding", path: "/Christian-wedding" },
    { name: "Post & Pre Wedding", path: "/postpre-wedding" },
    { name: "Nre Born", path: "/newborn-wedding" },
  ];
  return (
    <div>
      <section>
        <div className="tamil-bg">
          <h1 className="text-center text-white">Tamil Wedding</h1>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row mt-4">
             <nav className="d-flex justify-content-center bg-light py-3 shadow-sm film-tabs">
                <ul className="nav nav-pills gap-3">
                  {menuItems.map((item) => (
                    <li className="nav-item" key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `nav-link px-4 py-2 rounded-pill fw-semibold ${
                            isActive ? "active text-white bg-primary" : "text-dark bg-white border border-secondary"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            <div className="row">
              {[0, 2, 4, 6,8,10,12,14].map((startIndex, col) => (
                <div className="col-6 col-lg-3 px-1" key={col}>
                  <img
                    src={images[startIndex]}
                    alt={`Slide ${startIndex}`}
                    className="img-fluid  mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(startIndex)}
                  />
                  <img
                    src={images[startIndex + 1]}
                    alt={`Slide ${startIndex + 1}`}
                    className="img-fluid mt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(startIndex + 1)}
                  />
                </div>
              ))}
            </div>

            {/* Modal Popup */}
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
              size="lg"
              dialogClassName="custom-modal"
              backdropClassName="custom-backdrop"
            >
              <Modal.Body className="p-0 position-relative modal-image-wrapper">
                {/* Close Icon */}
                <span
                  className="modal-close-icon"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </span>

                {/* Prev & Next */}
                <span
                  className="modal-arrow modal-arrow-left"
                  onClick={handlePrev}
                >
                  &#8249;
                </span>
                <span
                  className="modal-arrow modal-arrow-right"
                  onClick={handleNext}
                >
                  &#8250;
                </span>

                {/* Image Preview */}
                <img
                  src={images[currentIndex]}
                  alt="Popup"
                  className="img-fluid w-100 modal-image"
                />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tamilwedding;
