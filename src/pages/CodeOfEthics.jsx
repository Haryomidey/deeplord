import React from 'react';
import Footer from '../components/Footer';
import HeroAndNavBar from '../components/HeroAndNavBar';

import BackgroundImage from '../assets/images/code-of-ethics.avif';

const CodeOfEthics = () => {

  document.title = 'Deeplord Consults | Code of Ethics';

  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={BackgroundImage} content='Code of Ethics' />
        <div className='w-full h-[50vh] tablet:w-[70%] mx-auto text-center flex flex-col desktop:px-32 small:px-5 px-3 mt-10'>
          <h1 className='tablet:text-4xl small:text-xl text-lg w-full font-semibold mb-3'>
            Code of Ethics
          </h1>
          <p>Our Mission started with the passion for bridging the gap in the robust margin in the tech and human world. The passion of a burning speed of it's peak propel the idea of creating a solution oriented space in consulting and creating a space of learning in the area of technologies solution in, Agriculture, Real estate, Networking, Digital Marketing and comp............

          Taking into the creation of this, Joshua took in passion driven solution oriented crew that are only with the zeal of making a world reknowned consultancy organization.
          Our objective and mission </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CodeOfEthics
