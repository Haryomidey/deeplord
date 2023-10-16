import React from 'react';
import Footer from '../components/Footer';
import HeroAndNavBar from '../components/HeroAndNavBar';

import BackgroundImage from '../assets/images/mission-2.avif';

const Mission = () => {

  document.title = 'Deeplord Consults | Mission';

  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={BackgroundImage} content='Mission' />
        <div className='w-full h-[50vh] tablet:w-[70%] mx-auto text-center flex flex-col desktop:px-32 small:px-5 px-3 mt-10'>
          <h1 className='tablet:text-4xl text-2xl w-full font-semibold mb-3'>
            Our Mission
          </h1>
          <p>
            Our mission commenced with a fervent desire to narrow the substantial divide between the realms of technology and human endeavor. Fueled by an unwavering commitment to rapid progress, this vision spurred the creation of a consultancy dedicated to solution-centric approaches, while concurrently establishing an educational enclave focused on technological solutions within the domains of Agriculture, Real Estate, Networking, Digital Marketing, and Construction.

            Our team comprises impassioned professionals united by a common purpose: to devise and deliver strategic solutions through consultancy services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mission
