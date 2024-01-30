import React from 'react';

import ImageOne from '../../assets/images/farm-1.jpg';
import ImageTwo from '../../assets/images/farm-2.avif';
import ImageThree from '../../assets/images/farm-6.avif';
import ImageFour from '../../assets/images/farm-4.jpg';
import BackgroundImage from '../../assets/images/animal-hero-1.avif';

import Footer from '../../components/Footer';
import HeroAndNavBar from '../../components/HeroAndNavBar';

const FarmPage = () => {

  document.title = 'Deeplord Consults | Farms';

  return (
    <div className='w-full'>
      <HeroAndNavBar BackgroundImage={BackgroundImage} content = 'Farms' />
      <div className='w-full min-h-[100vh] py-10 laptop:px-20 px-5'>
        {/*  */}
        <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>High-Grade Pigs for Sale</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>We are passionate about giving you cherished companions that represent the pinnacle of porcine excellence at our prestigious farm, not just pigs. Each stage of their development is painstakingly planned out to ensure that they uphold the highest standards of excellence and wellbeing. You're sure to find the porcine friend who perfectly reflects your needs and preferences if you browse the selection we've provided below.</p>
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
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Premium Fowls for Sale</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>When it comes to finding feathered companions for your farm or homestead, the journey begins here, at our dedicated haven. With a passion that knows no bounds, we raise our fowls with an abundance of love, care, and attention, ensuring that each one emerges as a testament to the highest standards of quality. Take your time to explore our expansive selection, and you're sure to discover the perfect addition to your flock, tailored precisely to your unique needs and preferences.</p>
          </div>
        </div>
        {/*  */}
         <div className='flex flex-wrap items-center justify-center min-h-[350px] mb-10 laptop:gap-10 gap-2'>
          <div className='laptop:w-[45%] w-full h-full'>
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Top-Quality Maize Available</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Embark on a journey to discover the epitome of top-grade maize, meticulously cultivated for a myriad of purposes. You've arrived at the perfect destination for maize enthusiasts seeking quality beyond compare. Every stalk and kernel is nurtured with painstaking care and unwavering attention, ensuring it not only meets but exceeds the highest standards of quality, nutrition, and versatility. Delve into our extensive selection below, and uncover the perfect grain that aligns seamlessly with your unique requirements.</p>
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
            <h1 className='font-semibold laptop:text-4xl mobile_small:text-3xl text-xl laptop:text-justify text-center mb-2'>Optimal Aquatic Excellence</h1>
            <p className='laptop:w-[500px] mobile_small:w-[500px] laptop:mx-0 mx-auto max-w-full laptop:text-justify text-center'>Find catfish that not only meet but also exceed your requirements for aquaculture or culinary endeavors. You've found the ideal place for catfish lovers looking for uncompromised quality. Each of our catfish is raised in a setting that closely resembles their natural habitat, ensuring that they thrive in pristine circumstances. They are of the highest quality, in excellent health, and prepared to make the ideal addition to your aquatic environment or culinary creations thanks to this meticulous care.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default FarmPage;
