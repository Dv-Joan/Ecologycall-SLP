import React from 'react';
import read_more from '../Images/read_more.png';

function PartnerCard(props) {
  return (
    <div className='pt-3 px-1 rounded-2xl h-50'>
      <div class='flex mb-4 mx-5'>
        <div class='pt-1 px-2 w-52 h-50 rounded shadow-md m-10 relative flex flex-col'>
          <img class='w-48' src={props.src} alt='Timberland_Brand' />
          <div class='py-3 px-2 h-full'>
            <p class='text-gray-700 text-xs font-Montserrat'>
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className=' relative -mt-20 pl-60 pt-1 rounded-full '>
        <button className='h-7 ease-in-out duration-300 hover:scale-125 active:shadow-lg active:shadow-slate-500/100'>
          <img className='w-8' src={read_more}></img>
        </button>
      </div>
    </div>
  );
}

export default PartnerCard;
