import React from 'react'
import logo from '../assets/images/logo-1.png'
import facebook from '../assets/images/social-icons/facebook.png'
import instagram from '../assets/images/social-icons/instagram.png'
import pinterest from '../assets/images/social-icons/pinterest.png'
import youtube from '../assets/images/social-icons/youtube.png'

const Footer = () => {
    return (
        <div className='container'>
            <footer class="row py-3 my-4 border-top">
                <div class="col-md-3">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
                        <img src={logo} alt="Logo" style={{ height: '50px' }} />
                    </a>
                    <div>

                    <ul className='list-unstyled d-flex mt-4'>
                        <li>
                            <a href="/">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a href="/">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a href="/">
                                <img src={pinterest} alt="pinterest" />
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a href="/">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </li>
                    </ul>
                    </div>
                    <span class="mt-4 text-body-secondary">Copyright@leaf9studio.com</span>
                </div>
                <div className="col-md-3">
                    <p className="fs-14 theme-txt-color mb-0">Phone Number</p>
                    <p>+9187966466</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-14 theme-txt-color mb-0">Address</p>
                    <p>Koodal Nager,Edwin Complex,
                    Madurai,Tamilnadu</p>
                </div>
                <div className="col-md-3">
                    <p className="fs-14 theme-txt-color mb-0">Mail</p>
                    <p>leaf9sttudio@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer