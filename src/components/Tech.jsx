import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {  Autoplay, Pagination } from "swiper";

import Branding from '../assets/images/branding.avif';
import ContentCreation from '../assets/images/content-creation.avif';
import Media from '../assets/images/media.avif';
import Networking from '../assets/images/networking.avif';
import WebDev from '../assets/images/web-dev.avif';
import DigitalMarketing from '../assets/images/digital-marketing.avif';
import TechCard from "./TechCard";


const Tech = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  document.title = 'Deeplord Consults | Tech';

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
        className="mySwiper pb-4"
      >
        <SwiperSlide className="laptop:h-[450px] h-[400px]">
          <TechCard id={1} image={Branding} contentTitle='BRANDING' contentDetails={`What's your challenge? Let us know what's bothering you, what you want to achieve in your business, and we'll create a brand that's just right for you.`} techUrl = {'branding'} />
        </SwiperSlide>
        <SwiperSlide className="laptop:h-[450px] h-[400px] ">
          <TechCard id={2} image={ContentCreation} contentTitle='CONTENT CREATION' contentDetails={`High-quality content is not just an extra benefits, it's a must-have. We strive to make lasting impressions on our audience. Our team of content creators produces captivating and compelling material that catches the eye and stays in the memory.`} techUrl = {'content-creation'} />
        </SwiperSlide>
        <SwiperSlide className="laptop:h-[450px] h-[400px] ">
          <TechCard id={3} image={Media} contentTitle='MEDIA/DISTRIBUTION' contentDetails={`Let's get your content in-front of the right audience. We help you find and win the right audience and maximize your conversion rate.`} techUrl = {'media&distribution'} />
        </SwiperSlide>
        <SwiperSlide className="laptop:h-[450px] h-[400px] ">
          <TechCard id={4} image={Networking} contentTitle='NETWORKING' contentDetails={`We provide network infrastructure, designs and implementation, technical support for Networking services, adequate network security and network routine troubleshooting.`} techUrl = {'networking'} />
        </SwiperSlide>
        <SwiperSlide className="laptop:h-[450px] h-[400px] ">
          <TechCard id={5} image={WebDev} contentTitle='WEB DEV/DESIGN' contentDetails={`We provide network infrastructure, designs and implementation, technical support for Networking services, adequate network security and network routine troubleshooting.`}techUrl = {'web-development'} />
        </SwiperSlide>
        <SwiperSlide className="laptop:h-[450px] h-[400px] ">
          <TechCard id={6} image={DigitalMarketing} contentTitle='DIGITAL MARKETING' contentDetails={`Digital marketing isn't just about reaching your audience; it's about forging meaningful connections that drive growth and loyalty. Let's embark on this transformative journey together. Elevate your brand, captivate your audience, and leave an indelible mark on the digital landscape. Get in touch with us today and let's make your digital dreams a reality!`}techUrl = {'digital-marketing'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Tech;