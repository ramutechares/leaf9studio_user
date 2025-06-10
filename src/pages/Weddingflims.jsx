import React, { useEffect, useRef, useState } from "react";
import weddingOne from "../assets/images/flims/wedding-1.png";
import weddingTwo from "../assets/images/flims/wedding-2.png";
import weddingThree from "../assets/images/flims/wedding-3.png";

const Street = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const modalRef = useRef(null);
  const iframeRef = useRef(null);

  // Reset video when modal is hidden
  useEffect(() => {
    const modalEl = modalRef.current;

    const handleHidden = () => {
      if (iframeRef.current) {
        iframeRef.current.src = "";
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

  const openModal = (url) => {
    setVideoUrl(url);
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const renderVideoBlock = (title, description, videoSrc, image, reverse = false) => (
    <section className="section-poadding">
      <div className="container">
        <div className={`row justify-content-between align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="col-lg-5">
            <div
              className="position-relative d-inline-block mb-3 w-100"
              onClick={() => openModal(videoSrc)}
              style={{ cursor: "pointer" }}
            >
              <img src={image} alt="Video Thumbnail" className="img-fluid rounded w-100" />
              <button
                type="button"
                className="bg-transparent border-0 position-absolute top-50 start-50 translate-middle shadow rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="medium">{title}</h3>
            <p className="mb-0 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
  

  return (
    <div>
      <section>
        <div className="inner-head-pad">
          <h1 className="text-center">Wedding Flims</h1>
        </div>
      </section>

      {renderVideoBlock(
  "Wedding 1",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  "https://www.youtube.com/embed/7SGNV9pqb8o?si=gZKxRZGv59G0AxpF",
  weddingOne
)}

{renderVideoBlock(
  "Wedding 2",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  "https://www.youtube.com/embed/bvgvU5Rq6F4?si=MMCoJKxS4y7cSiA1",
  weddingTwo,
  true
)}

{renderVideoBlock(
  "Wedding 3",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  "https://www.youtube.com/embed/oO2egcig44A?si=QbbpvK710fndpRM0",
  weddingThree
)}
      {/* Modal */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  ref={iframeRef}
                  src={videoUrl}
                  title="Video"
                  allow="autoplay"
                  width="100%"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Street;
