import React, { useEffect, useRef, useState } from "react";
import portrait from "../assets/images/portrait.jpg";

import BgOne from "../assets/images/bgone.jpg";
import PpOne from "../assets/images/portfolio/postpre/pp-1.png";
import PpTwo from "../assets/images/portfolio/postpre/pp-2.png";
import PpThree from "../assets/images/portfolio/postpre/pp-3.png";
import PpFour from "../assets/images/portfolio/postpre/pp-4.png";
import PpFive from "../assets/images/portfolio/postpre/pp-5.png";
import PpSix from "../assets/images/portfolio/postpre/pp-6.png";
import PpSeven from "../assets/images/portfolio/postpre/pp-7.png";
import PpEight from "../assets/images/portfolio/postpre/pp-8.png";
import { Modal } from "react-bootstrap";
const PostPreWedding = () => {
  const images = [
      PpOne,
      PpFive,
      PpSix,
      PpThree,
      PpTwo,
      PpSeven,
      PpEight,
      PpFour,
      
      
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

  return (
    <div>
      <section>
        <div className="postpre-bg">
          <h1 className="text-center text-white">Post & Pre Wedding</h1>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row mt-4">
            <div className="row">
              {[0, 2, 4, 6].map((startIndex, col) => (
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

export default PostPreWedding;
