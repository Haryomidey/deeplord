import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import BrandingImage from '../../../assets/images/branding.avif';

const Branding = () => {
    document.title = 'Deeplord Consults | Tech';

    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={BrandingImage} content={'Branding'} />
                <div className='w-full min-h-[50vh] tablet:w-[80%] mx-auto text-center flex flex-col items-center desktop:px-32 small:px-5 px-3 pb-5'>
                    <p className='mt-8'>Our service under branding comprises the whole package. We understand the end goal of business owners and entrepreneurs is to drive traffic and in turn potential customers to their side of the business and keep them glued to either their goods or services. But to successfully have all of these, our team will see to it that the necessary questions are asked and properly answered.</p>

                    <h2 className='mt-6 font-semibold text-3xl'>Our services</h2>
                    
                    <ul className='text-left w-full'>
                        <li className='list-disc font-semibold'>
                            Logo Design
                        </li>
                        <li>The logo of a company has to be just as strong because it is the first feel of a potential customer. Subconsciously, a good logo sticks to the memory.</li>
                        <li className='list-disc font-semibold'>
                            UI/UX design
                        </li>
                        <li>User Interface or User Experience design just has to do with the interaction and movement of users of a website or application of a business. It has to do with the feel of users when they visit the web pages of a brand, is it accommodating, easy to navigate, does it have what they came to find or check and the likes, is the ambience correlating with the brand and more.</li>
                        <li className='list-disc font-semibold'>
                            Web design / development
                        </li>
                        <li>This is the transformation of the already designed user interface into live accessible pages for potential customers, in this part, the developers make sure the site is easily accessible and not hard to get through to.</li>
                        <li className='list-disc font-semibold'>
                            Develop a brand guide and a strategy for your campaign, and channels
                        </li>
                        <li>A brand guide makes it easy for you to run your business easily on your own eventually without any hassle of any kind. It is more like a pipeline already created for easy technical operation.</li>
                        
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Branding
