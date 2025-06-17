import React, { useState } from "react";
import Weddingmenu from "../component/Weddingmenu";

import TaOne from "../assets/images/portfolio/tamil-wedding/ta-1.jpg";
import TaTwo from "../assets/images/portfolio/tamil-wedding/ta-2.jpg";
import TaThree from "../assets/images/portfolio/tamil-wedding/ta-3.jpg";
import TaFour from "../assets/images/portfolio/tamil-wedding/ta-4.jpg";
import TaFive from "../assets/images/portfolio/tamil-wedding/ta-5.jpg";
import TaSix from "../assets/images/portfolio/tamil-wedding/ta-6.jpg";
import TaSeven from "../assets/images/portfolio/tamil-wedding/ta-7.jpg";
import TaEight from "../assets/images/portfolio/tamil-wedding/ta-8.jpg";
import TaNine from "../assets/images/portfolio/tamil-wedding/ta-9.png";
import TaTen from "../assets/images/portfolio/tamil-wedding/ta-10.png";
import TaEleven from "../assets/images/portfolio/tamil-wedding/ta-11.png";
import TaTwele from "../assets/images/portfolio/tamil-wedding/ta-12.jpg";
import TaThrirteen from "../assets/images/portfolio/tamil-wedding/ta-13.png";
import TaFourteen from "../assets/images/portfolio/tamil-wedding/ta-14.jpg";
import TaFifteen from "../assets/images/portfolio/tamil-wedding/ta-15.jpg";
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
            <Weddingmenu />
            <div className="row">
              {[0, 2, 4, 6, 8, 10, 12, 14].map((startIndex, col) => (
                <div className="col-6 col-lg-3 px-1" key={col}>
                  <img
                    src={images[startIndex]}
                    alt={`Slide ${startIndex}`}
                    className="img-fluid mt-2"
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