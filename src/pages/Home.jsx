import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BackgroundImage from '../assets/images/hero-1.avif';
import WhoWeAre from '../components/WhoWeAre';
import SecondSection from '../components/SecondSection';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
  document.title = 'Deeplord Consults | Home';
  return (
    <div className=''>
      <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='h-[100vh]'>
        <div className='w-full h-full bg-[#000000b0]'>
          <Navbar />
          <HeroSection/>
        </div>
      </div>
      <WhoWeAre />
      <SecondSection />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;
