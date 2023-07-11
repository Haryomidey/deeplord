
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
                            <button className='text-white mt-5 px-8 py-3 bg-[#006837]'>Ask questions</button>
                        </div>
                    </div>
                    
                    <div>
                        <h1 className='text-lg font-semibold'>Communities</h1>
                        <ul className='mt-3 text-sm mobile_small:text-md'>
                            <li className='mb-3'>For Talents</li>
                            <li className='mb-3'>For Companies</li>
                            <li className='mb-3'>Facebook Group</li>
                            <li className='mb-3'>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>About Us</h1>
                        <ul className='mt-3 text-sm mobile_small:text-md'>
                            <li className='mb-3'>Code of ethics</li>
                            <li className='mb-3'>Our Story</li>
                            {/* <li className='mb-3'>Career</li> */}
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Contacts</h1>
                        <ul className='mt-3 text-sm mobile_small:text-md'>
                            <li className='mobile_small:w-[250px] max-w-[75%] w-full mb-3'>Feel free to get in touch with us via phone or send us message.</li>
                            <li className='mb-3'>+234-456-7890</li>
                            <li className='mb-3'>test123@example.com</li>
                            <li className='mb-3'>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className = 'border-t py-3 border-white text-white w-full mobile_small:flex items-center justify-between min-h-[60px]'>
                    <p className='mobile_small:pl-7 text-center mobile_small:mb-0 mb-4'>&copy; Deep Lord Consult 2023</p >
                    <div className='flex gap-6 justify-center mobile_small:pr-7'>
                        <i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-whatsapp"></i>
                        <i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-twitter"></i>
                        <i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-facebook-f"></i>
                        <i className="hover:text-[#006837] cursor-pointer transition-color duration-300 ease fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;