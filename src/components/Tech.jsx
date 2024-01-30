import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {  Autoplay, Pagination } from "swiper";

import Branding from '../assets/images/branding.avif';
import TechCard from "./TechCard";
import TechDb from '../DBs/TechDb';
const Tech = () => {
  document.title = 'Deeplord Consults | Tech';

  console.log(TechDb)

  return (
    <div className = "mx-2 mobile_small:mx-10 my-7 slider_wrapper_container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          TechDb.map((tech) => (
            <SwiperSlide className="laptop:h-[480px]">
              <TechCard id={tech.id} image={tech.image} contentTitle={tech.contentTitle} contentDetails={tech.contentDetails} techUrl = {tech.techUrl} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Tech;