
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/images/logo_white.png';

const Footer = () => {
    return (
        <div>
            <div className='w-full min-h-[40vh] bg-black laptop:px-20 px-5 flex flex-col justify-between'>
                <div className="flex h-full text-white tablet:justify-between flex-wrap gap-5 py-5">
                    <div className="laptop:w-[40%] w-[250px] mb-8">
                        <img src={LogoWhite} alt="" className='tablet:w-[200px] w-[100px] mobile_small:w-[150px]' />
                        <div>
                            <p className='w-full text-white pt-7 text-sm mobile_small:text-md'>Your ultimate email solution to grow business and engaging with the future customer and clients.</p>
                        </div>
                    </div>
                
                    <div>
                        <h1 className='text-lg font-semibold'>About Us</h1>
                        <ul className='mt-3 text-sm mobile_small:text-md'>
                            <li className='mb-3'><Link to='/code-of-ethics' className='hover:text-[#006837] transition ease duration-300'>Code of ethics</Link></li>
                            <li className='mb-3'><Link to='/our-mission' className='hover:text-[#006837] transition ease duration-300'>Our Mission</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Contacts</h1>
                        <ul className='mt-3 text-sm mobile_small:text-md'>
                            <li className='mobile_small:w-[250px] max-w-[75%] w-full mb-3'>Feel free to get in touch with us via phone or send us message.</li>
                            <li className='mb-3'>+234-903-877-9368</li>
                            <li className='mb-3'>deeplordconsults@gmail.com</li>
                            <li className='mb-3'><Link to='/contact-us' className='hover:text-[#006837] transition ease duration-300'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className = 'border-t py-3 border-white text-white w-full mobile_small:flex items-center justify-between min-h-[60px]'>
                    <p className='mobile_small:pl-7 text-center mobile_small:mb-0 mb-4'>&copy; Deep Lord Consult 2023</p >
                    <div className='flex gap-6 justify-center mobile_small:pr-7'>
                        <a href="https://wa.me/2349038779368"><i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.x.com/deeplord645371"><i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-twitter"></i></a>
                        <a href="https://www.facebook.com/deeplordconsult"><i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/deeplordconsults"><i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;