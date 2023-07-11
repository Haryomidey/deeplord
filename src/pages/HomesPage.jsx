import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BackgroundImage from '../assets/images/tech-1.jpg';

import { HomesDb } from '../DBs/HomesDb';
import HomesCard from '../components/HomesCard';
import HeroAndNavBar from '../components/HeroAndNavBar';

const HomesPage = () => {

  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={BackgroundImage} content = 'Homes' />
        <div className='min-h-[100vh]'>
          <div className='flex items-center gap-10 flex-wrap justify-center py-20 laptop:px-20 px-5'>
            {HomesDb.map((home) => (
              <HomesCard home = {home} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomesPage;
