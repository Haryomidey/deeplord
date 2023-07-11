import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { HomesDb } from '../DBs/HomesDb';
import DisplayImages from '../components/DisplayImages';
import BackgroundImage from '../assets/images/home_bg.jpg';


const EachHome = () => {

    const { id } = useParams();
    const [isPictureClicked, setIsPictureClicked] = useState(false);

    const homeDetails = HomesDb.find((home) => {
      if (home.homesUrl == id) {
        return home;
      }
    })

    console.log(id)

  return (
    <div>
        <div className='w-full h-full'>
            <div className='bg-[#006837] w-full  h-[80vh] overflow-hidden' style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <Navbar />
                <div className='w-full bg-[#00000073] h-full flex justify-center items-center'>
                    <p className='py-5 px-8 rounded-full text-4xl text-white'>Homes</p>
                </div>
            </div>
                <div className='w-full min-h-[100vh] mb-5'>
                    <div className='py-20 laptop:px-20 px-5'>
                        <h1 className='font-semibold mobile_small:text-2xl'>{homeDetails.homesTitle}</h1>
                        <div className='flex items-center gap-2 mt-3 mb-1'>
                            <i className="cursor-pointer text-lg text-[#006837] fa-solid fa-location-dot"></i>
                            <h1 className='mobile_small:text-lg'> {homeDetails.location} </h1>
                        </div>
                        <div className='mt-6 laptop:mt-0 laptop:flex items-center gap-2'>
                            <div className='laptop:w-1/2 w-full laptop:h-[450px]  tablet:w-[500px] mx-auto'>
                                <img src={homeDetails.homesDisplayImage} className='w-full h-full rounded-lg' alt="" onClick = {() => setIsPictureClicked(true)} />
                            </div>
                            <div className='laptop:w-1/2 w-full laptop:h-[450px] tablet:w-[450px] flex flex-wrap items-center justify-center gap-2 relative mx-auto mt-5 laptop:mt-0'>
                                {homeDetails.otherImages.slice(0, 4).map((image, index) => (<img src={image} key ={index} className='w-[40%] h-[48%] laptop:custom_border_radius rounded-lg' alt="" onClick = {() => setIsPictureClicked(true)} />))}
                                <div className='absolute bottom-4 desktop:right-14 laptop:right-10 bg-white laptop:px-8 laptop:py-2 laptop:text-md shadow cursor-pointer text-sm px-4 py-1 rounded font-semibold' onClick = {() => setIsPictureClicked(true)}>
                                    <p>Show all photos</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='tablet:text-2xl text-lg ml-2'>Price: <span className='font-semibold'>₦{homeDetails.price}</span></p>
                            <p className='tablet:text-2xl text-lg my-2 ml-2'>Features: </p>
                            <div className='flex gap-2 flex-wrap'>
                                {homeDetails.features.map((features, index) => (
                                    <div className='border rounded flex items-center justify-center p-2 text-center font-semibold mobile_small:text-md text-sm' key={index} >
                                        {features}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <DisplayImages homeDetails={homeDetails} isPictureClicked={isPictureClicked} setIsPictureClicked={setIsPictureClicked} />
        <Footer />
    </div>
  )
}

export default EachHome;
