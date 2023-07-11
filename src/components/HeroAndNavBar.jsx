import React from 'react';
import Navbar from '../components/Navbar';

const HeroAndNavBar = ({BackgroundImage, content}) => {
  return (
    <div className='bg-[#006837] w-full  h-[80vh] overflow-hidden' style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <Navbar />
      <div className='w-full bg-[#0000005b] h-full flex items-center justify-center'>
        <p className='py-5 px-4 rounded-full mobile_small:text-4xl small:text-3xl text-center break-all text-2xl text-white'>{content}</p>
      </div>
    </div>
  )
}

export default HeroAndNavBar;
