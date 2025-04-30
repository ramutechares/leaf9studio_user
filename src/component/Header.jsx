import React from "react";
import logo from "../assets/images/logo.png";
import facebook from '../assets/images/social-icons/facebook.png'
import instagram from '../assets/images/social-icons/instagram.png'
import pinterest from '../assets/images/social-icons/pinterest.png'
import youtube from '../assets/images/social-icons/youtube.png'

const Header = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg nav-grp fixed-top menu-navbar"
        aria-label="Offcanvas navbar large"
      >
        <div class="container position-relative">
          <div className="d-block d-lg-none">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="Logo" style={{ height: "25px" }} />
            </a>
          </div>
          <button
            class="navbar-toggler border-0 mob-menu-toggle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#477E24"
                d="M2 5.995c0-.55.446-.995.995-.995h8.01a.995.995 0 0 1 0 1.99h-8.01A.995.995 0 0 1 2 5.995M2 12c0-.55.446-.995.995-.995h18.01a.995.995 0 1 1 0 1.99H2.995A.995.995 0 0 1 2 12m.995 5.01a.995.995 0 0 0 0 1.99h12.01a.995.995 0 0 0 0-1.99z"
              />
            </svg>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
                <a class="navbar-brand" href="/">
                  <img src={logo} alt="Logo" style={{ height: "25px" }} />
                </a>
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body d-lg-flex justify-content-between">
              <ul class="navbar-nav pe-3">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item  ms-lg-5">
                  <a class="nav-link text-white" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item  ms-lg-5">
                  <a class="nav-link text-white" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                {/* <li class="nav-item dropdown  ms-lg-5">
                                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Portfolio
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Tamil Wedding</a></li>
                                        <li><a class="dropdown-item" href="#">Christian Wedding</a></li>
                                        <li><a class="dropdown-item" href="#">Telugu Wedding</a></li>
                                        <li><a class="dropdown-item" href="#">Bra-min Wedding</a></li>
                                        <li><a class="dropdown-item" href="#">New Born Portrait</a></li>
                                    </ul>
                                </li> */}
              </ul>
              <div className="d-none d-lg-block">
                <a class="navbar-brand" href="/">
                  <img src={logo} alt="Logo" style={{ height: "50px" }} />
                </a>
              </div>
              <ul className="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white" href="/street-photography">
                    Street
                  </a>
                </li>
                <li class="nav-item  ms-lg-5">
                  <a class="nav-link text-white" href="/wedding-flims">
                    Flims
                  </a>
                </li>
                <li class="nav-item ms-lg-5">
                  <a class="nav-link text-white " href="/contactus">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-lg-none res-menu-bor">
                <ul className="list-unstyled d-flex mt-4">
                  <li>
                    <a href="/">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="/">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="/">
                      <img src={pinterest} alt="pinterest" />
                    </a>
                  </li>
                  <li className="ms-3">
                    <a href="/">
                      <img src={youtube} alt="youtube" />
                    </a>
                  </li>
                </ul>
                <div className="">
                        <p className="fs-14 theme-txt-color mb-0">Phone Number</p>
                        <p>+9187966466</p>
                    </div>
                    <div className="">
                        <p className="fs-14 theme-txt-color mb-0">Mail</p>
                        <p>leaf9sttudio@gmail.com</p>
                    </div>
                    <div className="">
                        <p className="fs-14 theme-txt-color mb-0">Address</p>
                        <p>Koodal Nager,Edwin Complex,
                            Madurai,Tamilnadu</p>
                    </div>
                    
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
