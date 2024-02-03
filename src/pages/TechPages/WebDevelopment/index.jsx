import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import WebDevImage from '../../../assets/images/web-dev.avif';

const WebDevelopment = () => {
    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={WebDevImage} content={'Web Development'} />
                <div className='w-full min-h-[50vh] tablet:w-[80%] mx-auto text-center flex flex-col items-center desktop:px-32 px-5 pb-5'>
                    <p className='mt-8'>
                        We offer comprehensive website development services, leveraging latest technologies like HTML, CSS, TailwindCSS, JavaScript, React, Node.js, and Express. Whether you need to build a website from the ground up or revamp an existing one, we have the expertise to meet your needs.
                    </p>
                    <h2 className='mt-6 font-semibold text-3xl'>Our services</h2>

                    <ul className='text-left w-full px-4 mt-3'>
                        <li className='list-disc font-semibold'>Website Development</li>
                        <li>We create websites from scratch using modern technologies like HTML, CSS, JavaScript, React, Node.js, and Express.</li>
                        <li className='list-disc font-semibold'>Website Revamping</li>
                        <li>We create websites from scratch using modern technologies like HTML, CSS, JavaScript, React, Node.js, and Express.</li>
                        <li className='list-disc font-semibold'>Responsive Design</li>
                        <li>We ensure that your website is responsive across all devices, including desktops, tablets, and smartphones, to reach a wider audience.</li>
                        <li className='list-disc font-semibold'>Consultation and Advice</li>
                        <li>We provide expert consultation and advice on web development strategies, technologies, and best practices to help you achieve your business goals.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WebDevelopment
