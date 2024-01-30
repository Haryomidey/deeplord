import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import BrandingImage from '../../../assets/images/branding.avif';

const Branding = () => {
    document.title = 'Deeplord Consults | Tech';

    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={BrandingImage} content={'Branding'} />
                <div className='w-full min-h-[50vh] tablet:w-[70%] mx-auto text-center flex flex-col items-center desktop:px-32 small:px-5 px-3'>
                <p className='mt-8'>Our service under branding comprises the whole package. We understand the end goal of business owners and entrepreneurs is to drive traffic and in turn potential customers to their side of the business and keep them glued to either their goods or services. But to successfully have all of these, our team will see to it that the necessary questions are asked and properly answered.</p>

                    <h2 className='mt-3 font-semibold text-xl'>Our services</h2>
                    
                    <ul className='text-left'>
                        <li>
                            <li className=''>Logo Design</li>
                        </li>
                    </ul>
                {/* <h1 className='text-xl small:text-2xl mb-2 font-semibold'>{techProduct.contentTitle}</h1>
                <p className='tablet:text-xl text-lg w-full'>
                    {techProduct.contentDetails}
                </p> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Branding
