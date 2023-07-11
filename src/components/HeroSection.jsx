import React from 'react';

const HeroSection = () => {
  return (
    <div className='px-2 smallest:px-4 mobile:px-8 laptop:px-20'>
      <div className='h-full w-full desktop:pt-60 small:pt-[15rem] pt-[10rem]'>
        <h1 className='tablet:text-4xl tablet:leading-relaxed desktop:px-40 small:text-2xl text-lg leading-10 text-white font-semibold text-center rounded-md flex items-center justify-center py-10'>
          Providing value in properties, simplifying solutions, and building long-term business relationships.
        </h1>
      </div>
    </div>
  )
}

export default HeroSection;
