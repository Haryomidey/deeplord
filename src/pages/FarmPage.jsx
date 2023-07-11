import React from 'react';

import ImageOne from '../assets/images/farm-1.jpg';
import ImageTwo from '../assets/images/farm-2.jpg';
import ImageThree from '../assets/images/farm-6.jpg';
import ImageFour from '../assets/images/farm-4.jpg';
import BackgroundImage from '../assets/images/animal-hero-1.jpg';

import Footer from '../components/Footer';
import HeroAndNavBar from '../components/HeroAndNavBar';

const FarmPage = () => {
  return (
    <div className='w-full'>
      <HeroAndNavBar BackgroundImage={BackgroundImage} content = 'Farms' />
      <div className='w-full min-h-[100vh] py-10 laptop:px-20 px-5'>
        {/*  */}
        <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Get all your emails in a single place</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia nesciunt, ullam rem nobis maxime tempora asperiores illo at reiciendis porro quaerat nam est, dicta dolorum? Maiores tempora numquam accusamus quaerat iure temporibus corrupti quidem sed itaque! Enim sed dignissimos</p>
          </div>
          <div className='laptop:w-[45%] min-w-[200px] laptop:max-w-[600px] max-w-[400px] h-full'>
            <img src={ImageOne} className='laptop:rounded-tr-[30px] laptop:rounded-br-[30px] laptop:rounded-none rounded-xl shadow'/>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] min-w-[200px] laptop:max-w-[600px] max-w-[400px] h-full order-2 laptop:order-first'>
            <img src={ImageTwo} className='laptop:rounded-tl-[30px] laptop:rounded-bl-[30px] laptop:rounded-none rounded-xl shadow'/>
          </div>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Get all your emails in a single place</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia nesciunt, ullam rem nobis maxime tempora asperiores illo at reiciendis porro quaerat nam est, dicta dolorum? Maiores tempora numquam accusamus quaerat iure temporibus corrupti quidem sed itaque! Enim sed dignissimos</p>
          </div>
        </div>
        {/*  */}
         <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Get all your emails in a single place</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia nesciunt, ullam rem nobis maxime tempora asperiores illo at reiciendis porro quaerat nam est, dicta dolorum? Maiores tempora numquam accusamus quaerat iure temporibus corrupti quidem sed itaque! Enim sed dignissimos</p>
          </div>
          <div className='laptop:w-[45%] min-w-[200px] laptop:max-w-[600px] max-w-[400px] h-full'>
            <img src={ImageThree} className='laptop:rounded-tr-[30px] laptop:rounded-br-[30px] laptop:rounded-none rounded-xl shadow'/>
          </div>
        </div>
        {/*  */}
        <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] min-w-[200px] laptop:max-w-[600px] max-w-[400px] h-full order-1 laptop:order-first'>
            <img src={ImageFour} className='laptop:rounded-tl-[30px] laptop:rounded-bl-[30px] laptop:rounded-none rounded-xl shadow'/>
          </div>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Get all your emails in a single place</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia nesciunt, ullam rem nobis maxime tempora asperiores illo at reiciendis porro quaerat nam est, dicta dolorum? Maiores tempora numquam accusamus quaerat iure temporibus corrupti quidem sed itaque! Enim sed dignissimos</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default FarmPage;
