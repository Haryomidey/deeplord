import React from 'react';

import { Link } from 'react-router-dom';

const HomesCard = ({ home }) => {

  return (
    <Link to = {`/home/${home.homesUrl}`} className='small:w-[350px] min-h-[500px] rounded-2xl bg-white shadow-md'>
      <div className='w-full h-[300px]'>
        <img src={home.homesDisplayImage} className='w-full object-cover h-full rounded-t-2xl' alt="" />
      </div>
      <div className='w-full h-[40%] px-3 pt-8 pb-3'>
        <p className='font-semibold w-[80%] text-sm small:text-md pb-2'>{home.homesTitle}</p>
        <p>Location: <span className='font-semibold text-sm small:textmd'>{home.location}</span></p>
        <p>Price: <span className='font-semibold'>₦{home.price}</span></p>
        <p className='flex items-center justify-between gap-3 w-[100%]'>Features: 
          <ul className='flex gap-1 w-full font-semibold flex-wrap items-center text-sm'>
            {home.features.slice(0, 1).map((feat) => (<li className='inline-block'>{feat.slice(0,3)},</li>))}
            ...
          </ul>
          <p className=''><span className='material-symbols-outlined custom_translate text-center hover:bg-slate-200 transition-bg ease duration-300 rounded-full'>chevron_right</span></p>
        </p>
      </div>
    </Link>
  )
}

export default HomesCard;
