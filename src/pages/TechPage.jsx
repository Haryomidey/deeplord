import React from 'react';

import Footer from '../components/Footer';
import Tech from '../components/Tech';
import HeroAndNavBar from '../components/HeroAndNavBar';


import BackgroundImage from '../assets/images/twitter-code.png';

const TechPage = () => {
  return (
    <div className='w-full'>
      <HeroAndNavBar BackgroundImage={BackgroundImage} content='Tech' />
      <div className='w-full min-h-[70vh]'>
        <h1 className='text-center mt-10 text-lg font-semibold uppercase mobile_small:text-xl tablet:text-3xl'>Lorem, ipsum dolor.</h1>
        <p className='text-center mx-auto mt-2 w-full max-w-[700px] px-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit eaque a, reprehenderit vitae facere odit similique eligendi ipsa explicabo mollitia!</p>
        <Tech />
      </div>
      <Footer />
    </div>
  )
}

export default TechPage;
