import React, {useState, useEffect, useRef} from 'react';
import Logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuClicked(true);
    }

    const handleMenuClose = () => {
        setIsMenuClicked(false);
    }

    const navbarRef = useRef();

    useEffect(() => {
        const navbarOutsideClick = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            setIsMenuClicked(false);
        }
            else {
            setIsMenuClicked(true);
        }
        }

        document.addEventListener('mousedown', navbarOutsideClick);

        return () => {
        document.removeEventListener('mousedown', navbarOutsideClick);
        }
        
    }, []);

  return (
    <div>
        <div className={`w-full h-[80px] px-2 smallest:px-4 mobile:px-8 laptop:px-20 flex items-center fixed z-20 top-0 bg-white shadow `}>
            <div className='flex items-center justify-between w-full'>
                <div className='smallest:w-[150px] w-[100px] tablet:w-[180px]'>
                    <Link to ="/"><img src={Logo}/></Link>
                </div>
                <div>
                    <ul className = "desktop:flex items-center gap-10 hidden text-black">
                        <li className={`text-xl text-black cursor-pointer`}><NavLink to = "/">Home</NavLink></li>
                        <li className={`text-xl text-black cursor-pointer`}><NavLink to = "/tech">DeepTech</NavLink></li>
                        <li className={`text-xl text-black border-transparent transition-border ease duration-300 cursor-pointer`}><NavLink to = "/homes">DeepHomes</NavLink></li>
                        <li className={`text-xl text-black border-transparent transition-border ease duration-300 cursor-pointer`}><NavLink to = "/farms" >DeepFarm</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Link className={`text-xl border px-9 py-2 rounded-[7px] border-[#006837] text-[#006837] hidden smallest:hidden desktop:block`} to = "/contact-us">Contact Us</Link>
                </div>
                <p className ="desktop:hidden user-select-none">
                    {!isMenuClicked &&
                    <span className={`material-symbols-outlined cursor-pointer text-3xl text-black `} onClick ={handleMenuOpen}>
                        menu
                    </span>
                    }
                </p>
            </div>
            {/* Mobile and Tablet Navbar */}
            <div className = {`fixed top-0 w-[100%] h-[100vh] transition-[background] duration-300 ease ${!isMenuClicked ? 'bg-transparent left-[-100%]' : 'bg-[#000000a7] left-0'} right-0 bottom-0`}>
                {isMenuClicked && <span className={`material-symbols-outlined cursor-pointer mobile:text-2xl smallest:text-xl text-lg text-white absolute small:right-[12px] mobile:right-[30px] right-[10px] top-[30px] bg-[#0000003b] mobile:bg-transparent rounded-full smallest:px-2 smallest:py-[2px] px-1`} onClick ={handleMenuClose}>
                        close
                    </span>}
                <div className= {`bg-white max-w-[350px] w-[100%] h-full pt-6 pl-5 transition-[margin-left] duration-300 ease ${!isMenuClicked ? 'ml-[-100%]' : 'ml-0'}`} ref={navbarRef}>
                    <div className='smallest:w-[150px] w-[100px] tablet:w-[180px] mb-9'>
                        <Link to ="/"><img src={Logo}/></Link>
                    </div>
                    <ul className = "flex flex-col gap-7">
                        <li className={`text-xl text-black cursor-pointer`}><NavLink to = "/">Home</NavLink></li>
                        <li className={`text-xl text-black cursor-pointer`}><NavLink to = "/tech">DeepTech</NavLink></li>
                        <li className={`text-xl text-black border-transparent transition-border ease duration-300 cursor-pointer`}><NavLink to = "/homes">DeepHomes</NavLink></li>
                        <li className={`text-xl text-black border-transparent transition-border ease duration-300 cursor-pointer`}><NavLink to = "/farms" >DeepFarm</NavLink></li>
                        <li><Link className={`text-xl border px-9 py-3 rounded-[7px] border-[#006837] text-[#006837]`} to = "/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
