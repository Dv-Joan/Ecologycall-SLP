import React from 'react';
import BannerImage from '../Images/banner_image.jpg';
import burn_earth from '../Images/burn_earth.png';
function Home() {
  return (
    <div>
      <div className='ml-72 my-24'>
        <span className='text-xm text-slate-400 font-Montserrat '>
          We are the same side
        </span>
        <br />
        <br />
        <span className='text-6xl text-slate-900 font-bold font-Montserrat'>
          Don't play{' '}
        </span>
        <span className='text-6xl text-slate-300 font-bold font-Montserrat'>
          with nature{' '}
        </span>
        <br />
        <br />
        <div className='w-2/3 text-right'>
          <span className='text-xm text-slate-400 font-Montserrat text-right'>
            <span className='font-bold text-2xl text-slate-500'>｢</span> We love
            the secure earth{' '}
            <span className='font-bold text-2xl text-slate-500'>｣</span>
          </span>
        </div>
      </div>
      <img src={BannerImage} alt='Banner' />
      <div className='flex'>
        <div className=' w-3/5 py-16 pl-28 pr-10'>
          <span className='font-Montserrat text-xl text-slate-700 font-bold'>
            " We need to save our planet because the finals times is coming
            right now "{' '}
          </span>
          <br />
          <br />
          <div className='text-left'>
            <span className='font-Montserrat text-xm text-slate-700'>
              I am scared of climate change and the fact that a lot of adults
              aren’t taking it seriously – do you think politicians will take
              action and try to save what we have left? <br />–{' '}
              <span className='font-bold'>Brayan, aged 21, Lima.</span>
              <br />
              <br />
              Climate change is the most pressing threat{' '}
              <span className='font-bold text-red-500'>
                humanity has ever faced
              </span>
              . Changes in the natural balance of the Earth’s atmosphere, caused
              by human behaviour, are having a major impact on the environment.
              Hurricanes are becoming larger and more powerful than in the past.
              Floods cover vast regions, causing people to lose their homes.
              Droughts cause crops to die, which means{' '}
              <span class='text-red-500 font-bold'>people go hungry</span>. The
              sea level is rising, and will one day swallow up entire countries.
              Scientists from all over the world agree that the impacts of
              climate change will get worse, unless{' '}
              <span class='text-red-500 font-bold'> we take action now</span>.
            </span>
          </div>
        </div>
        <div className='w-80 py-16'>
          <img className='drop-shadow-lg' src={burn_earth} />
        </div>
      </div>
    </div>
  );
}

export default Home;
