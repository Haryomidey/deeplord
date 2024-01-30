import React from 'react';
import Footer from '../../components/Footer';
import HeroAndNavBar from '../../components/HeroAndNavBar';

import BackgroundImage from '../../assets/images/code-of-ethics.avif';

const CodeOfEthics = () => {

  document.title = 'Deeplord Consults | Code of Ethics';

  return (
    <div>
      <div>
        <HeroAndNavBar BackgroundImage={BackgroundImage} content='Code of Ethics' />
        <div className='w-full min-h-[50vh] tablet:w-[70%] mx-auto flex items-center flex-col desktop:px-32 small:px-5 px-3 pb-10 mt-10'>
          <h1 className='tablet:text-4xl text-2xl w-full font-semibold mb-3 text-center'>
            Code of Ethics
          </h1>
          <div>
            <ul className='flex flex-col gap-y-4 mt-5 px-5'>
              <li className="list-disc">We take full ownership of our responsibilities and we are committed to delivering results with the highest level of accountability. we consistently meet deadlines and ensure that all tasks are completed to the best of our ability. You can rely on us to take charge and be answerable for our actions in every professional endeavor.</li>

              <li className="list-disc">We hold our clients in the highest regard, valuing their unique needs and preferences. With a deep commitment to their well-being and satisfaction, we go the extra mile to ensure they receive exceptional service and attention. Every interaction is guided by a genuine care for their success and contentment, fostering a relationship built on trust and respect.</li>

              <li className="list-disc">We uphold a strong commitment to transparency and integrity in all of our professional interactions. our actions consistently align with our words, and we are dedicated to maintaining open and honest communication in every aspect of our work.</li>

              <li className="list-disc">We adhere rigorously to the principles of the rule of law, ensuring that all our actions and decisions are consistently guided by legal and regulatory frameworks. This commitment underscores our dedication to upholding ethical standards and maintaining the highest levels of integrity in all our professional endeavors.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CodeOfEthics
