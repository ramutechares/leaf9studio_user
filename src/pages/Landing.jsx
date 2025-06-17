import React, {useEffect, useRef,  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <-- Import Autoplay module
import "swiper/css"; // Required Swiper styles
import { Modal } from "react-bootstrap";
import BgOne from "../assets/images/bgone.jpg";
import sliderOne from "../assets/images/landing-page/hero-banner/1.jpg";
import sliderTwo from "../assets/images/landing-page/hero-banner/2.jpg";
import sliderThree from "../assets/images/landing-page/hero-banner/3.jpg";
import sliderFour from "../assets/images/landing-page/hero-banner/4.png";
import sliderFive from "../assets/images/landing-page/hero-banner/5.png";
import selectedOne from "../assets/images/landing-page/selected-works/1.png";
import selectedTwo from "../assets/images/landing-page/selected-works/2.png";
import selectedThree from "../assets/images/landing-page/selected-works/3.png";
import selectedFour from "../assets/images/landing-page/selected-works/4.png";
import selectedFive from "../assets/images/landing-page/selected-works/5.png";
import selectedSix from "../assets/images/landing-page/selected-works/6.png";
import selectedSeven from "../assets/images/landing-page/selected-works/7.png";
import selectedEight from "../assets/images/landing-page/selected-works/8.png";
import portrait from "../assets/images/portrait.jpg";
import whychoose from "../assets/images/landing-page/whychoose.png";
import videothumb from "../assets/images/landing-video-thumb.jpg";
import { Link } from 'react-router-dom';

const Landing = () => {
  const images = [
    selectedSix,
    selectedOne,
    selectedTwo,
    selectedFive,
    selectedSeven,
    selectedThree,
    selectedFour,
    selectedEight,
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
      <section className="hero-banner-grp">
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} // <- Attach autoplay module
        >
          <SwiperSlide>
            <img src={sliderOne} alt="Slide 1" className="img-fluid" width="1200" height="628" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderTwo} alt="Slide 2" className="img-fluid"  width="1200" height="628" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderThree} alt="Slide 3" className="img-fluid"  width="1200" height="628" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderFour} alt="Slide 4" className="img-fluid"   width="1200" height="628"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderFive} alt="Slide 4" className="img-fluid"  width="1200" height="628" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="section-poadding">
        <div className="container">
          <h2 className="text-center">
            <span>About</span> Us
          </h2>
          <p className="text-center mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <div className="text-center mt-4">
            <Link className="primary-button text-center" to="/contactus">Contact</Link>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <h2 className="text-center">
            Selected <span>Works</span>
          </h2>
          <div className=" mt-4">
            <div className="row">
              {[0, 2, 4, 6].map((startIndex, col) => (
                <div className="col-6 col-lg-3 px-1 mt-2" key={col}>
                  <img
                    src={images[startIndex]}
                    alt={`Slide ${startIndex}`}
                    className="img-fluid"
                    style={{ cursor: "pointer",  }}
                    onClick={() => handleImageClick(startIndex)}
                  />
                  <img
                    src={images[startIndex + 1]}
                    alt={`Slide ${startIndex + 1}`}
                    className="img-fluid mt-2"
                    style={{ cursor: "pointer", }}
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
      <section className="section-poadding">
        <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 text-center">
          <img
                  src={whychoose}
                  alt="Popup"
                  className="img-fluid text-center"
                />
          </div>
          <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-4">
            <h2>Why Choose</h2>
            <p className="mb-0 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <div className=" mt-4">
            <Link className="primary-button text-center" to="/contactus">Contact</Link>
          </div>
          </div>
        </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              
              {/* Thumbnail with Play Button */}
              <div className="position-relative d-inline-block mb-3" onClick={openModal} style={{ cursor: 'pointer' }}>
                <img
                  src={videothumb}
                  alt="Video Thumbnail"
                  className="img-fluid rounded"
                />
                <button
                  type="button"
                  className="bg-transparent border-0 position-absolute top-50 start-50 translate-middle shadow rounded-circle"
                  style={{ width: '60px', height: '60px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
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
                          src="https://www.youtube.com/embed/AcHq8FGvb3I?si=2iEK5HjCoszw8Wiy"
                          title="Video"
                          allow="autoplay"
                          allowFullScreen
                        ></iframe>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end">

                <a href="/wedding-flims" className=" theme-txt-color text-end">More Videos</a>
              </div>
            </div>
            <div className="col-lg-6">
              <h3>Contact Form</h3>
              <div className="row mt-4">
                <div className="col-lg-6">
                  <label htmlFor="" className="label">User Name</label>
                  <div className="mt-1">
                     <input type="text" />
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
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
      {/* <section className="section-poadding">
      <Swiper
        className="instaSwiper"
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <img src={portrait} alt="Slide 1" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 2" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 3" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 4" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 5" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 6" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 7" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portrait} alt="Slide 8" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
      </section> */}
    </div>
  );
};

export default Landing;
