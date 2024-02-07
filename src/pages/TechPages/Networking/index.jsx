import Footer from '../../../components/Footer';
import HeroAndNavBar from '../../../components/HeroAndNavBar';

import NetworkingImage from '../../../assets/images/networking.avif';

const Networking = () => {
    document.title = 'Deeplord Consults | Tech';

    return (
        <div>
            <div>
                <HeroAndNavBar BackgroundImage={NetworkingImage} content={'Networking'} />
                <div className='w-full min-h-[50vh] tablet:w-[80%] mx-auto text-center flex flex-col items-center desktop:px-32 px-4 pb-5'>
                    <p className='mt-8'>
                        We provide network infrastructure, designs and implementation, technical support for Networking services, adequate network security and network routine troubleshooting.
                    </p>
                    <h2 className='mt-6 font-semibold text-3xl'>Our services</h2>

                    <ul className='text-left w-full px-4 mt-3'>
                        <li className='list-disc font-semibold'>Managing mobile and website content</li>
                        <li>We understand that some starting businesses may not exactly have the hang of managing their mobile and website content, we can handle that perfectly well and tailor the contents to suit the business.</li>
                        <li className='list-disc font-semibold'>
                            (Virtual Private Network) VPN Connectivity services.
                        </li>
                        <li className='list-disc font-semibold'>
                            Wireless Access (Network routes / Security)
                        </li>
                        <li className='list-disc font-semibold'>
                            Local Area Network (LAN)
                        </li>
                        <li className='list-disc font-semibold'>
                            Wide Area Network (WAN)
                        </li>
                        <li className='list-disc font-semibold'>
                            Wireless Local Area Network (WLAN)
                        </li>
                        <li className='list-disc font-semibold'>
                            Campus Area Network (CAN)
                        </li>
                        <li className='list-disc font-semibold'>
                            Personal Area Network (PAN)
                        </li>
                        <li className='list-disc font-semibold'>
                            Building and engaging communities
                        </li>
                        <li className='list-disc font-semibold'>
                            Social media / Google advertisements
                        </li>
                        <li className='list-disc font-semibold'>
                            ponsoring and featuring programs on the radio and television
                        </li>
                        <li className='list-disc font-semibold'>
                            Influencer Marketing
                        </li>
                        <li className='list-disc font-semibold'>
                            Print media on stationeries
                        </li>
                        <li className='list-disc font-semibold'>
                            Buying outdoor advertising
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Networking
