import React from 'react';
import certified from '../Images/certified-team.png';
import timberland from '../Images/timberland.png';
import optoro from '../Images/optoro.png';
import PartnerCard from '../Components/PartnerCard';
function About() {
  return (
    <div>
      <div className=' mx-36 my-32 grid gap-12 grid-cols-2'>
        <div className=''>
          <span className='font-Anek font-black text-5xl'>About Our Team</span>
          <div>
            <p className='text-xm font-Montserrat py-5'>
              Currently we are considered organically more than a team, a group
              of environmentalists who fight for the awareness of "Our Planet is
              in Danger of EXTINCTION", it is for this reason that we carry out
              different types of talks, training and above all conferences to
              carry out our objective. as activists.Currently we are considered
              organically more than a team, a group of environmentalists who
              fight
            </p>
            <span className='font-Montserrat text-xm'>
              Currently we are considered organically more than a team ?
            </span>
            <button className=' rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'>
              Set Donation
            </button>
            <button className='rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'>
              Set Help
            </button>
          </div>
        </div>
        <div>
          <img
            src='https://images.pexels.com/photos/3453047/pexels-photo-3453047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='rounded-l-2xl drop-shadow-lg'
          />
          <img
            src={certified}
            className=' left-96 w-36 relative drop-shadow-2xl -mt-16 '
          />
        </div>
      </div>
      <div className='mx-36 mt-32 mb-10 flex gap-40 '>
        <div className='w-1/2'>
          <span className='font-Anek font-black text-4xl'>
            Business Associate & Partners
          </span>
          <p className='font-Montserrat text-xm py-5'>
            We have 400 partners around the world, with the best history of
            changing the mindset of tthe earth extinction
            conception.asdasdasdasdasdasd asdasdasdasdasdasdasda asdasdasdas
          </p>
        </div>
        <div className='flex-initial'>
          <button className=' mt-16 ml-6 rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'>
            Contact Us
          </button>
        </div>
      </div>
      <div className=' grid grid-cols-4 gap-8 mx-36 my-18 '>
        <div className='px-2 py-2'>
          <img src={timberland} className='container pl-1 ' />
          <p className='text-xs font-Montserrat tracking-wide pt-3'>
            Provides full-time employees with up to 40 paid volunteer hours per
            year, including an annual Earth Day event in April.
          </p>
        </div>
        <div className='px-2 py-2'>
          <img
            src='https://content.energage.com/company-images/SK17/SE66841/SE66841_logo_orig.jpg'
            className='container pl-1 '
          />
          <p className='text-xs font-Montserrat pt-5 tracking-wide'>
            Provides its employees with paid time off to volunteer for multiple
            environmental causes each year in Utah
          </p>
        </div>
        <div className='px-2 py-2'>
          <img src={optoro} className='container pl-1 ' />
          <p className='text-xs font-Montserrat pt-5 tracking-wide'>
            Provides its employees with paid time off to volunteer for multiple
            environmental causes each year in Utah
          </p>
        </div>
      </div>
      <div className='flex'>
        <PartnerCard />
      </div>
    </div>
  );
}

export default About;
