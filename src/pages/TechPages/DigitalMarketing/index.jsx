import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import DigitalMarketingImage from '../../../assets/images/digital-marketing.avif';

const DigitalMarketing = () => {
    document.title = 'Deeplord Consults | Tech';

    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={DigitalMarketingImage} />
                <div className='w-full h-[50vh] tablet:w-[70%] mx-auto text-center flex flex-col items-center justify-center desktop:px-32 small:px-5 px-3'>
                {/* <h1 className='text-xl small:text-2xl mb-2 font-semibold'>{techProduct.contentTitle}</h1> */}
                <p className='tablet:text-xl text-lg w-full'>
                    {/* {techProduct.contentDetails} */}
                </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DigitalMarketing
