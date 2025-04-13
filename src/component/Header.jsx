import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-grp fixed-top" aria-label="Offcanvas navbar large">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body d-flex justify-content-between">
                            <ul class="navbar-nav pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item  ms-5">
                                    <a class="nav-link text-white" href="#">About</a>
                                </li>
                                <li class="nav-item dropdown  ms-5">
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
                                </li>
                            </ul>
                            <div>
                                <a class="navbar-brand" href="#">
                                    <img src={logo} alt="Logo" style={{ height: '50px' }} />
                                </a>
                            </div>
                            <ul className='navbar-nav'>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Wedding Flims</a>
                                </li>
                                <li class="nav-item ms-5">
                                    <a class="nav-link text-white " href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header