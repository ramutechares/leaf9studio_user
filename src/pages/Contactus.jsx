import React, {useEffect, useRef,  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <-- Import Autoplay module
import "swiper/css"; // Required Swiper styles
import { Modal } from "react-bootstrap";
import BgOne from "../assets/images/bgone.jpg";
import portrait from "../assets/images/portrait.jpg";
import whychoose from "../assets/images/whychoose.png";

const Contactus = () => {
  const images = [
    portrait,
    BgOne,
    BgOne,
    portrait,
    portrait,
    BgOne,
    BgOne,
    portrait,
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
      modalEl.addEventListener('hidden.bs.modal', handleHidden);
    }

    return () => {
      if (modalEl) {
        modalEl.removeEventListener('hidden.bs.modal', handleHidden);
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
      <section className="section-poadding">
        <div className="container">

        <div className="row align-items-center justify-content-center">
          {/* <div className="col-lg-4 text-center">
          <img
                  src={whychoose}
                  alt="Popup"
                  className="img-fluid text-center"
                />
          </div> */}
          <div className="col-lg-10 text-center mt-5 ps-lg-5">
            <h2>Contact us</h2>
            <p className="mb-0 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            
          </div>
        </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="row mt-4">
                <div className="col-lg-6">
                  <label htmlFor="" className="label">User Name</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-4">
                  <label htmlFor="" className="label">Date & Time</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <label htmlFor="" className="label">Mobile Number</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <label htmlFor="" className="label">Mail Id</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <label htmlFor="" className="label">Number of Crowd</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <label htmlFor="" className="label">City</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div>
                  <button className="primary-button text-center w-100 mt-4">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
