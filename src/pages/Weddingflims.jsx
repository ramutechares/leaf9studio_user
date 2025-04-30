import React, { useEffect, useRef, useState } from "react";
import portrait from "../assets/images/portrait.jpg";
import selectedwork from "../assets/images/selected-works.png";
import BgOne from "../assets/images/bgone.jpg";
import phone from "../assets/images/phone.png";
import wallet from "../assets/images/wallet.png";
import event from "../assets/images/event.png";
import { Modal } from "react-bootstrap";
const Weddingflims = () => {
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
        <div className="inner-header">
          <h1 className="text-center text-white">Wedding Flims</h1>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
               {/* Thumbnail with Play Button */}
                <div
                  className="position-relative d-inline-block mb-3 w-100"
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BgOne}
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
                            src="https://www.youtube.com/embed/xrRDlOWR1OU?si=tM8aYaH5IVvXJPn-"
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
            </div>
            <div className="col-lg-6">
              <h3 className="medium">Holi Street</h3>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 order-lg-2">
               {/* Thumbnail with Play Button */}
                <div
                  className="position-relative d-inline-block mb-3 w-100"
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BgOne}
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
                            src="https://youtu.be/a3ICNMQW7Ok?si=Hc_j5HVNDsBHs9JN"
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
            </div>
            <div className="col-lg-6 order-lg-1">
              <h3 className="medium">Holi Street</h3>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
               {/* Thumbnail with Play Button */}
                <div
                  className="position-relative d-inline-block mb-3 w-100"
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BgOne}
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
                            src="https://www.youtube.com/embed/xrRDlOWR1OU?si=tM8aYaH5IVvXJPn-"
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
            </div>
            <div className="col-lg-6">
              <h3 className="medium">Holi Street</h3>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 order-lg-2">
               {/* Thumbnail with Play Button */}
                <div
                  className="position-relative d-inline-block mb-3 w-100"
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BgOne}
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
                            src="https://youtu.be/a3ICNMQW7Ok?si=Hc_j5HVNDsBHs9JN"
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
            </div>
            <div className="col-lg-6 order-lg-1">
              <h3 className="medium">Holi Street</h3>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section-poadding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
               {/* Thumbnail with Play Button */}
                <div
                  className="position-relative d-inline-block mb-3 w-100"
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={BgOne}
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
                            src="https://www.youtube.com/embed/xrRDlOWR1OU?si=tM8aYaH5IVvXJPn-"
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
            </div>
            <div className="col-lg-6">
              <h3 className="medium">Holi Street</h3>
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
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Weddingflims;
