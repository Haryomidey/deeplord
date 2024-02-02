import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import DigitalMarketingImage from '../../../assets/images/digital-marketing.avif';

const DigitalMarketing = () => {
    document.title = 'Deeplord Consults | Tech';

    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={DigitalMarketingImage} content={'Digital Marketing'} />
                <div className='w-full min-h-[50vh] tablet:w-[80%] mx-auto text-center flex flex-col items-center desktop:px-32 small:px-5 px-3 pb-5'>
                    <p className='mt-8'>
                        Digital marketing isn't just about reaching your audience; it's about forging meaningful connections that drive growth and loyalty. Let's embark on this transformative journey together. Elevate your brand, captivate your audience, and leave an indelible mark on the digital landscape. Get in touch with us today and let's make your digital dreams a reality!
                        In digital marketing, we discuss everything that has to do with getting brands known, we handle awareness on and off-line, all social media advertisements and management if we have to. Some of the services include:
                    </p>
                    <h2 className='mt-6 font-semibold text-3xl'>Our services</h2>
                    <ul className='text-left w-full'>
                        <li className='list-disc font-semibold'>
                            Creating radio jingles
                        </li>
                        <li className='list-disc font-semibold'>
                            Facebook ads
                        </li>
                        <li className='list-disc font-semibold'>
                            Social media management
                        </li>
                        <li className='list-disc font-semibold'>
                            Video ads
                        </li>
                        <li className='list-disc font-semibold'>
                            Google ads
                        </li>
                        <li className='list-disc font-semibold'>
                            Instagram ads
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DigitalMarketing
