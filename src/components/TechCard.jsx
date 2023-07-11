import React from 'react';
import { Link } from 'react-router-dom';
const TechCard = ({ image, contentTitle, contentDetails, techUrl }) => {
    return(
        <Link to={`/tech/${techUrl}`} className='bg-white rounded-2xl overflow-hidden custom_shadow flex flex-col h-full'>
            <div className='h-1/2 '>
                <img src={image} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='h-1/2 py-5 px-2 laptop:px-8 text-black'>
                <h2 className='font-semibold text-xl pb-5'>{contentTitle}</h2>
                <p className='font-[400]'>{contentDetails.slice(0, 100)}...</p>
            </div>
        </Link>
    )
}

export default TechCard;