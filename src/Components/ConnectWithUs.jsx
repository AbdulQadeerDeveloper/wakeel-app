import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import './ConnectWithUs.css';
import { connectWithUs } from '../Data';


export const ConnectWithUs = () => {

    const [slides, setSlides] = useState(2);
    const [space, setSpace] = useState(30);
    const navigate = useNavigate()
    
    const resizeSlider = () => {
        if (window.innerWidth > 768) {
            setSlides(2);
            setSpace(40);
        } else if (window.innerWidth > 425 && window.innerWidth <= 768) {
            setSlides(1);
            setSpace(20);
        } else {
            setSlides(1);
            setSpace(15);
        }
    };

    useEffect(() => {
        resizeSlider();
    }, []);


    window.addEventListener('resize', () => {
        resizeSlider();
    });

    return (
        <section id='connect-with-us' className='global-container'>
            <div className='global-spacer-mini'></div>
            <h1 className='global-heading'>Connect With Us</h1>
            <Swiper
                spaceBetween={space}
                slidesPerView={slides}
                navigation={true}
                modules={[Navigation]}
                className="Swiper mySwiper">
                {connectWithUs.map((card, i) => (
                    <SwiperSlide key={i} className="slider-card">
                        <h1 className='card-heading'>{card.heading}</h1>
                        <p className='card-paragraph'> {card.paragraph} </p>
                        <button className='global-btn' onClick={() => navigate(card.link)}>Read More</button>
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
}





export default ConnectWithUs;