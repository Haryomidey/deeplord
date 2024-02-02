import Footer from '../../components/Footer'
import HeroAndNavBar from '../../components/HeroAndNavBar';

import AboutImage from '../../assets/images/about-us.avif';
import { Light } from 'three';

const About = () => {
    document.title = 'Deeplord Consults | About Us'
    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={AboutImage} content={'About Us'} />
                <div className='w-full min-h-[50vh] tablet:w-[85%] mx-auto text-center flex flex-col items-center desktop:px-32 small:px-5 px-3 pb-5'>
                    <p className='mt-8'>
                        Deeplord Consult offers a full range of branding and marketing services to help companies build stronger connections with their target audience. Our team of experienced strategists, designers, and writers work closely with each client to deeply understand their business, competitors, and customers. This allows us to develop branding that authentically represents our clients' identity and messaging that truly resonates with their audience.
                    </p>
                    <p className='text-center w-full max-w-[600px] mx-auto font-semibold mt-6'>Some of our core branding services include:</p>

                    <ul className='text-left w-full mt-3 grid gap-3'>
                        <li>- Brand strategy - We help clients articulate their mission, values, personality, and positioning in the marketplace. This provides a solid foundation for all branding and marketing efforts.</li>
                        <li>- Logo and visual identity design - Our designers create logos, color palettes, fonts, and other visual assets that express the essence of our clients' brands. This gives them recognizable and memorable visual representation.</li>
                        <li>- Brand guidelines - We produce brand style guides that document strategic branding elements like messaging, voice, and visual identity. This ensures branding consistency across all touchpoints.</li>
                        <li>- Brand asset development - We produce branded templates, signage, packaging, digital assets, and other materials that bring brands to life.</li>
                    </ul>

                    <p className='text-center w-full max-w-[600px] mx-auto font-semibold mt-6'>Our Digital Marketing services help clients promote their brands and connect with customers. This includes:</p>

                    <ul className='text-left w-full mt-3 grid gap-3'>
                        <li>- Marketing strategy - We develop data-driven plans to reach target audiences through the right channels and content.</li>
                        <li>- Content marketing - Our writers produce blogs, social media posts, articles, emails, and other content that engages audiences and positions brands as industry thought leaders.</li>
                        <li>- Advertising - We manage paid advertising campaigns across platforms like Google, Facebook, Instagram, and more.</li>
                        <li>- Analytics - We track and analyze marketing performance across all channels to optimize efforts for maximum ROI.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
