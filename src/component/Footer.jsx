import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <-- Import Autoplay module
import "swiper/css"; // Required Swiper styles
import logo from '../assets/images/logo-1.png'
import facebook from '../assets/images/social-icons/facebook.png'
import instagram from '../assets/images/social-icons/instagram.png'
import pinterest from '../assets/images/social-icons/pinterest.png'
import youtube from '../assets/images/social-icons/youtube.png'
import instaOne from '../assets/images/instagram/insta-1.jpg'
import instaTwo from '../assets/images/instagram/insta-2.jpg'
import instaThree from '../assets/images/instagram/insta-3.jpg'
import instaFour from '../assets/images/instagram/insta-4.jpg'
import instaFive from '../assets/images/instagram/insta-5.jpg'
import instaSix from '../assets/images/instagram/insta-6.jpg'
import instaSeven from '../assets/images/instagram/insta-7.jpg'
import instaEight from '../assets/images/instagram/insta-8.jpg'
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
                        slidesPerView: 2,
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
                    <img src={instaOne} alt="Slide 1" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaTwo} alt="Slide 2" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaThree} alt="Slide 3" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaFour} alt="Slide 4" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaFive} alt="Slide 5" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaSix} alt="Slide 6" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaSeven} alt="Slide 7" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={instaEight} alt="Slide 8" className="img-fluid rounded" style={{ height: '350px', objectFit: 'cover' }} />
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
                                    <a href="https://www.facebook.com/share/1LzzGTnvJM/?mibextid=wwXIfr">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://www.instagram.com/leaf9studios?igsh=bnRkaHhvYXNxNGFu&utm_source=qr">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://in.pinterest.com/leaf9studios">
                                        <img src={pinterest} alt="pinterest" />
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a href="https://www.youtube.com/@leaf9studios272">
                                        <img src={youtube} alt="youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p class="mt-4 text-body-secondary d-none d-lg-block">Copyright@leaf9studio.com</p>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-5">
                        <p className="fs-14 theme-txt-color mb-0">Phone Number</p>
                        <p>+91 90953 07543</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fs-14 theme-txt-color mb-0">Address</p>
                        <p>Edwin Complex,Near ICICI Bank,Cokkalinga Nager,Koodal Nager,
                            Madurai - 625018,Tamil Nadu</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fs-14 theme-txt-color mb-0">Mail</p>
                        <p>leaf9studios@gmail.com</p>
                    </div>
                    <p class="mt-4 text-body-secondary d-block d-lg-none">Copyright@leaf9studio.com</p>
                </footer>
            </div></>
    )
}

export default Footer