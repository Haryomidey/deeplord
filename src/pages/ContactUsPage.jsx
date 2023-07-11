import React from 'react';

import Footer from '../components/Footer';

import BackgroundImage from '../assets/images/tech-1.jpg';
import HeroAndNavBar from '../components/HeroAndNavBar';

const ContactUsPage = () => {
  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={BackgroundImage} content = 'Contact Us' />
        <div className='min-h-[50vh] my-20'>
          <div className='flex flex-wrap justify-center desktop:gap-40 gap-10 px-2'>
            <ul className="">
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-brands fa-whatsapp"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Whatsapp</p>
                  <p className='text-lg font-semibold'>09038779368</p>
                  <p className='laptop:text-lg text-sm break-all'>Click<a href="https://wa.me/2349038779368" className='ml-2 font-semibold' target="_blank" rel="noopener noreferrer">https://wa.me/2349033000001</a></p>
                </div>
              </li>
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-brands fa-twitter"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Twitter</p>
                  <p className='laptop:text-lg text-sm break-all'>Click<a href="https://wa.me/2349038779368" className='ml-2 font-semibold' target="_blank" rel="noopener noreferrer">https://wa.me/2349033000001</a></p>
                </div>
              </li>
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-brands fa-brands fa-facebook-f"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Facebook</p>
                  <p className='laptop:text-lg text-sm break-all'>Click<a href="https://wa.me/2349038779368" className='ml-2 font-semibold' target="_blank" rel="noopener noreferrer">http://www.facebook.com/MTNLoaded</a></p>
                </div>
              </li>
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-solid fa-phone"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Call</p>
                  <p className='text-lg font-semibold'>09038779368</p>
                  <p className='laptop:text-lg text-sm break-all'>Click<a href="https://wa.me/2349038779368" className='ml-2 font-semibold' target="_blank" rel="noopener noreferrer">https://wa.me/2349033000001</a></p>
                </div>
              </li>
            </ul>

            <ul className="">
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-brands fa-instagram"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Instagram</p>
                  <p className='laptop:text-lg text-sm break-all'>Click<a href="https://wa.me/2349038779368" className='ml-2 font-semibold' target="_blank" rel="noopener noreferrer">https://www.instagram.com/mtnng</a></p>
                </div>
              </li>

              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-solid fa-envelope"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Email</p>
                  <p className='text-lg font-semibold'>Send us an email:</p>
                  <p className='laptop:text-lg text-sm break-all'><a href="https://wa.me/2349038779368" className='font-semibold' target="_blank" rel="noopener noreferrer">deeplordconsults@gmail.com</a></p>
                </div>
              </li>
              <li className='flex items-center gap-2 mb-6 px-1'>
                <span className='bg-[#006837] text-white laptop:h-14 laptop:w-14 h-10 w-10 rounded-full flex items-center justify-center laptop:text-2xl text-lg'>
                  <i className="cursor-pointer fa-solid fa-location-dot"></i>
                </span>
                <div>
                  <p className='font-bold tablet:text-2xl text-lg'>Address</p>
                  <p className='laptop:text-lg text-sm break-all'>Wesco Estate, Akure Ondo State.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage;
