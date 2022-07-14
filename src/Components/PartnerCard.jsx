import React from 'react';

function PartnerCard(props) {
  return (
    <div className='justify-center rounded-2xl hover:scale-110 ease-out duration-300 cursor-default max-h-48 min-h-48'>
      <div class='py-1 px-3 w-52 h-50 shadow-sm '>
        <img src={props.src} />
        <div class='py-3 px-2'>
          <p class='text-gray-700 text-xs font-Montserrat'>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;
