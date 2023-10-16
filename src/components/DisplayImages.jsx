import React, {useState} from 'react';

const DisplayImages = ({ homeDetails, isPictureClicked, setIsPictureClicked }) => {
    const [isShowClicked, setIsShowClicked] = useState(false);
    const [imageLarge, setImageLarge] = useState('');
    const [images] = useState(homeDetails.otherImages);
    const [value, setValue] = useState(0);

    const handleImageClicked = (e) => {
        setIsShowClicked(true);
        setImageLarge(e);
    }
    
    const handleIncrease = () => {
        if (value < images.length - 1) {
            setValue(prev => prev + 1)
        }
        else {
            setValue(0);
        }

        setImageLarge(images[value]);
        console.log(`increase: ${value}`);
    }
    
    const handleDecrease = () => {
        if (value > 0) {
            setValue(prev => prev - 1);
        }
        else {
            setValue(images.length - 1);
        }
        
        setImageLarge(images[value]);
        console.log(`decrease: ${value}`);
    }
    

  return (
    <div className='relative'>
        <div className={`fixed ${isPictureClicked ? 'top-0':'top-[100%]'} transition-top ease duration-700 right-0 left-0 z-50 bg-white w-full`}>
            <div className='overflow-y-scroll h-[100vh] hide_scroll_bar'>
                <div className='fixed w-full h-12 flex items-center custom_index bg-white shadow'>
                    <span className="material-symbols-outlined ml-3 hover:bg-slate-200 transition-bg duration-300 ease p-1 rounded-full cursor-pointer" onClick={() => setIsPictureClicked(false)}>
                        chevron_left
                    </span>
                </div>
                <div className='flex w-full items-center justify-center flex-wrap gap-6 mt-16 py-5 px-5'>
                    {homeDetails.otherImages.map((image, index) => (
                        <div className='tablet:w-[400px] mobile:w-[60%] small:w-[80%] w-[100%] h-full flex bg-transparent items-center' key={index} >
                            <img src={image} onClick={() => handleImageClicked(image)} className='w-full' alt="" />
                            <div className={`fixed ${isShowClicked ? 'top-0':'top-[100%]'} transition-top ease duration-700 right-0 left-0 z-20 bg-black w-full h-full`}>
                                <p className='w-full text-right'>
                                    <span className="material-symbols-outlined bg-white m-5 hover:bg-slate-200 transition-bg duration-300 ease p-1 rounded-full cursor-pointer" onClick={() => setIsShowClicked(false)}>
                                        close
                                    </span>
                                </p>
                                <div className='w-full h-full bg-[#000000fd] pb-5 flex items-center justify-center px-5'>
                                    <div className='mt-[-80px] absolute w-full flex items-center justify-between outline-none'>
                                        <span className="material-symbols-outlined bg-white m-5 hover:bg-slate-200 transition-bg duration-300 ease p-1 rounded-full cursor-pointer" onClick={handleDecrease}>
                                            chevron_left
                                        </span>
                                        <span className="material-symbols-outlined bg-white m-5 hover:bg-slate-200 transition-bg duration-300 ease p-1 rounded-full cursor-pointer" onClick={handleIncrease}>
                                            chevron_right
                                        </span>
                                    </div>
                                   <div className='laptop:w-[600px] mobile:w-[80%] w-[100%] mobile:h-[80%] mt-[-80px]'>
                                        <img src={imageLarge} className='w-full h-full' alt="" />
                                   </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayImages;
