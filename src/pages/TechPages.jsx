import React from 'react';
import { useParams } from 'react-router-dom';
import TechDb from '../DBs/TechDb';
import Footer from '../components/Footer';
import HeroAndNavBar from '../components/HeroAndNavBar';

const TechPages = () => {

    const { id } = useParams();

    const techProduct = TechDb.find((tech) => {
      if (tech.techUrl == id) {
        return tech;
      }
    })
  
  document.title = 'Deeplord Consults | Tech';

  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={techProduct.image} content={techProduct.contentTitle} />
        <div className='w-full h-[50vh] tablet:w-[70%] mx-auto text-center flex items-center justify-center desktop:px-32 small:px-5 px-3'>
          <p className='tablet:text-2xl small:text-xl text-lg w-full'>
            {techProduct.contentDetails}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TechPages;
