import React from 'react';
import BannerImage from '../Images/banner_image.jpg';
import burn_earth from '../Images/burn_earth.png';
import project1 from '../Images/project1.svg';
import project2 from '../Images/project2.svg';
import project3 from '../Images/project3.svg';
import project4 from '../Images/project4.svg';

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
        <img className='w-1/4 h-1/4 pt-24 drop-shadow-lg' src={burn_earth} />
      </div>
      <div className='bg-slate-200'>
        <div className=' py-16 px-36 text-center justify-center'>
          <span className='font-Montserrat text-xl text-slate-700 font-bold'>
            What can we do ?{' '}
          </span>
          <br />
          <br />
          <div>
            <span className='font-Montserrat text-xm text-slate-700'>
              The lesson here is very simple –{' '}
              <span className='text-orange-400 font-bold'>
                climate change must be our number one priority
              </span>
              . People who can vote in elections should consider voting for
              parties that promise strong action on climate change. This usually
              means looking away from the major political groups: parties with a{' '}
              <span className='bg-green-500 rounded-lg py-0.5 px-1.5 hover:bg-green-600 text-white font-bold'>
                <a href='https://policy.greenparty.org.uk/'>
                  specific “green” focus
                </a>
              </span>{' '}
              will typically be the main ones tackling climate change. <br />{' '}
              <br />
              <br />
              Another option is to support global movements like{' '}
              <span className='bg-green-500 rounded-lg py-0.5 px-1.5 hover:bg-green-600 text-white font-bold'>
                <a href='https://rebellion.global/es/'>Extinction Rebellion</a>
              </span>{' '}
              . By turning up to rallies and showing support for groups like
              these, you can send a strong message to politicians that you care
              about{' '}
              <span className='text-orange-400 font-bold'>
                the planet and all the life on it
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=''>
        <br />
        <br />
        <span className='px-12 mt-12 font-bold font-Montserrat text-2xl '>
          Green PROJECTS 2022
        </span>
        <div className=' py-16 px-36 text-center justify-center'>
          <div className='gap-15'>
            <div className='flex justify rounded-lg w-2/3 pt-2 drop-shadow-lg'>
              <div>
                <img src={project1} />
                <br />
                <span className='pt-5 font-medium text-xm'>
                  Peruvian Jungle for forest 2015{' '}
                </span>
              </div>
              <div className='rounded-lg w-1/3 pt-2 drop-shadow-lg'>
                <img src={project3} />
                <br />
                <span className='pt-5 font-medium text-xm'>
                  Space Explorations{' '}
                  <span className='bg-red-500 rounded-lg py-0.5 px-1.5 hover:bg-red-400 text-white font-bold'>
                    <a href='https://solarsystem.nasa.gov/'>NASA</a>
                  </span>{' '}
                  <span className='bg-slate-700 rounded-lg py-0.5 px-1.5 hover:bg-slate-600 text-white font-bold'>
                    <a href='https://www.spacex.com/'>SpaceX</a>
                  </span>{' '}
                  <span className='bg-blue-800 rounded-lg py-0.5 px-1.5 hover:bg-blue-700 text-white font-bold'>
                    <a href='https://www.space.com/topics/blue-origin'>
                      BlueO.
                    </a>
                  </span>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
