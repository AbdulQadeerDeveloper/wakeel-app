'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'; // ✅ v10 me yahan se import karo

import 'swiper/css';
import 'swiper/css/pagination';

import connectWithUs from '../Data/connectWithUs';
import './ConnectWithUs.css';

const ConnectWithUs = () => {
  const navigate = useNavigate();

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="Swiper"
      >
        {connectWithUs.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="slider-card">
              <h1 className="card-heading">{card.heading}</h1>
              <p className="card-paragraph">{card.paragraph}</p>
              <button className="global-btn" onClick={() => navigate(card.link)}>
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
    </div>
  );
};

export default ConnectWithUs;
