import React, { useEffect, useRef, useState } from "react";
import vinoth from "../assets/images/about/vinoth.png";
import selectedwork from "../assets/images/about/selected-works.jpg";
import smile from "../assets/images/about/smile.jpg";
import videothumb from "../assets/images/about/video.png";
import portrait from "../assets/images/portrait.jpg";
// import selectedwork from "../assets/images/selected-works.png";
import BgOne from "../assets/images/bgone.jpg";
import phone from "../assets/images/phone.png";
import wallet from "../assets/images/wallet.png";
import event from "../assets/images/event.png";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
const About = () => {
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
        <div className="about-header">
          <h1 className="text-center text-white">About Us</h1>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 text-center">
              <img src={vinoth} alt="portrait" className="img-fluid" style={{ maxWidth: '300px', width: '100%' }} />
            </div>
            <div className="col-lg-8 mt-4 mt-lg-0">
              <h2>About Us</h2>
              <p className="mb-0 mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <div className="mt-4">
                <p className="sign mb-0">Vinoth</p>
                <p className="mb-0 fw-bold">Founder & Artist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-4 order-lg-2 text-center">
              <img src={selectedwork} alt="selectedwork" className="img-fluid"  style={{ maxWidth: '300px', width: '100%' }}/>
            </div>
            <div className="col-lg-8 order-lg-1 mt-4 mt-lg-0">
              <h2>Selected Works</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img src={smile} alt="portrait" className="img-fluid"  style={{ maxWidth: '300px', width: '100%' }}/>
            </div>
            <div className="col-lg-8  mt-4 mt-lg-0">
              <h2>Whats Make us Smile</h2>
              <div className="row mt-4">
                <div className="col-lg-6">
                  <h4>Our Philosophy</h4>
                  <p className="mt-2 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here',{" "}
                  </p>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h4>Our Philosophy</h4>
                  <p className="mt-2 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here',{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid section-poadding text-center px-0">
        {/* Thumbnail with Play Button */}
        <div
          className="position-relative d-inline-block mb-3 w-100"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
          <img
            src={videothumb}
            alt="Video Thumbnail"
            className="img-fluid rounded w-100"
          />
          <button
            type="button"
            className="bg-transparent border-0 position-absolute top-50 start-50 translate-middle shadow rounded-circle"
            style={{ width: "60px", height: "60px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 256 180"
            >
              <path
                fill="#f00"
                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
              />
              <path
                fill="#fff"
                d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
              />
            </svg>
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="videoModalLabel"
          aria-hidden="true"
          ref={modalRef}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    id="videoPlayer"
                    ref={iframeRef}
                    src="https://www.youtube.com/embed/foH30jJGUEU?si=FvWgQ5F4k1Hc3TPJ"
                    title="Video"
                    allow="autoplay"
                    width="100"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <h2 className="mb-0 text-center">How its Work</h2>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4 col-md-6 text-center">
              <img src={phone} alt="phone" className="img-fluid" width="48"/>
              <h4  className="mt-3">Chat with Experts</h4>
              <p className="mt-2 mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            </div>
            <div className="col-lg-4 col-md-6 text-center  mt-4 mt-md-0">
              <img src={wallet} alt="wallet" className="img-fluid" width="48"/>
              <h4  className="mt-3">Package Selection</h4>
              <p className="mt-2 mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            </div>
            <div className="col-lg-4 col-md-6 text-center  mt-4 mt-lg-0">
              <img src={event} alt="event" className="img-fluid" width="48"/>
              <h4  className="mt-3">Customize Your Event</h4>
              <p className="mt-2 mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            </div>
            <div className="text-center mt-4">
               <Link className="primary-button text-center" to="/contactus">Book Your Event</Link>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
