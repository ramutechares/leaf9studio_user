import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <-- Import Autoplay module
import "swiper/css"; // Required Swiper styles
import logo from '../assets/images/logo-1.png'
import facebook from '../assets/images/social-icons/facebook.png'
import instagram from '../assets/images/social-icons/instagram.png'
import pinterest from '../assets/images/social-icons/pinterest.png'
import youtube from '../assets/images/social-icons/youtube.png'
import portrait from "../assets/images/portrait.jpg";

const Footer = () => {
    return (
        <><section className="section-poadding">
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
                {/* Static Slides */}
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
                {/* Add more SwiperSlide blocks as needed */}
            </Swiper>
        </section><div className='container'>
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
                        <p class="mt-4 text-body-secondary d-none d-lg-block">Copyright@leaf9studio.com</p>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-5">
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
                    <p class="mt-4 text-body-secondary d-block d-lg-none">Copyright@leaf9studio.com</p>
                </footer>
            </div></>
    )
}

export default Footer