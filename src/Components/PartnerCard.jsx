import React from 'react';

function PartnerCard() {
  return (
    <div className='pt-3 px-1 rounded-2xl'>
      <div class='lg:flex mb-4 m-10 mx-5'>
        <div class='pt-3 px-2 w-52 rounded  shadow-md m-10 relative flex flex-col'>
          <img
            class='w-full'
            src='https://1000logos.net/wp-content/uploads/2017/12/timberland-logo-500x281.png'
            alt='Sunset in the mountains'
          />
          <div class='pl-3 pr-2 py-4 h-full'>
            <p class='text-gray-700 text-xs font-Montserrat'>
              Provides its employees with paid time off to volunteer for
              multiple environmental causes each year in Utah
            </p>
          </div>
        </div>
      </div>
      <div className=' relative -mt-20 pl-56 pt-1 rounded-full '>
        <button className='h-7 ease-in-out duration-300 hover:scale-125 active:shadow-lg active:shadow-slate-500/100'>
          <img
            className='w-8'
            src='https://cdn-icons.flaticon.com/png/512/2899/premium/2899069.png?token=exp=1657726052~hmac=77f086814ba7aa51877e14cd337c5e48'
          ></img>
        </button>
      </div>
    </div>
  );
}

export default PartnerCard;
