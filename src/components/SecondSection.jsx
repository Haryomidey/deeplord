import React from 'react';
import BackgroundImage from '../assets/images/hero-3.jpeg';

const SecondSection = () => {
  return (
    <div>
      <div className='laptop:h-[70vh] h-[40vh]' style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='w-full h-full bg-[#00000059] flex items-center justify-center'>
          <h1 className='font-semibold text-white mobile_small:text-4xl text-xl mx-5 text-center mobile_small:leading-[50px]'>Our Investment solutions are designed to <br /> enhance and sustain wealth creation.</h1>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;
