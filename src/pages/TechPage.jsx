import React from 'react';

import Footer from '../components/Footer';
import Tech from '../components/Tech';
import HeroAndNavBar from '../components/HeroAndNavBar';


import BackgroundImage from '../assets/images/tech-main.avif';

const TechPage = () => {
  document.title = 'Deeplord Consults | Home';
  return (
    <div className='w-full'>
      <HeroAndNavBar BackgroundImage={BackgroundImage} content='Tech' />
      <div className='w-full min-h-[70vh]'>
        <h1 className='text-center mt-10 text-lg font-semibold uppercase mobile_small:text-xl tablet:text-3xl'>Welcome to the forefront of innovation! </h1>
        <p className='text-center mx-auto mt-4 w-full max-w-[700px] px-3'>The future is shaped by technology, and we're here to guide you through its dynamic landscape. Stay updated with our latest articles, deep-dive into emerging trends, and be part of the conversation that's transforming the way we live, work, and innovate. Welcome to the future of tech!</p>
        <Tech />
      </div>
      <Footer />
    </div>
  )
}

export default TechPage;
