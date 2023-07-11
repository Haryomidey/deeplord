import React from 'react';
import MeetingImage from '../assets/images/meeting.webp';

const WhoWeAre = () => {
  return (
    <div className='w-full laptop:px-20 px-5 min-h-[85vh] laptop:py-28 py-10'>
      <div className='laptop:flex items-center justify-center h-full w-full'>
        <div className='laptop:w-[34rem] min-h-[240px] rounded-xl laptop:relative laptop:left-[60px] z-10 mx-auto bg-white custom_shadow laptop:px-[50px] px-4 py-8 flex flex-col w-full justify-center'>
          <div>
            <h1 className='font-semibold mobile_small:text-3xl text-xl mb-2'>Our Mission</h1>
            <p className='mobile_small:text-lg text-sm font-semibold'>To create and Render maximum Productivity in Advance consultancy in Technology, Farming, Real Estate and Construction….</p>
          </div>
          <div className = "mt-8">
            <h1 className='font-semibold mobile_small:text-3xl text-xl mb-2'>Our Vision</h1>
            <p className='mobile_small:text-lg text-sm font-semibold'>We are envisioned to be globally recognized for excellence in productivity, creativity, accountability and stewardship with maximum integrity.</p>
          </div>
        </div>
        <div className='laptop:w-[600px] relative desktop:right-[80px] w-full laptop:mt-0 mt-3'>
          <img src={MeetingImage} className='w-full rounded-2xl object-cover' alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre;
