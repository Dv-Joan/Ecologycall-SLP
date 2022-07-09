import React from 'react';
import certified from '../Images/certified-team.png';

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
      <div className='mx-36 my-32 grid grid-flow-col gap-12'>
        <div>
          <span className='font-Anek font-black text-2xl'>
            Clients & Partners
          </span>
          <p className='font-Montserrat text-xm'>
            We have 400 partners around the world, with the best history of
            changing the mindset of tthe earth extinction
            conception.asdasdasdasdasdasd asdasdasdasdasdasdasda asdasdasdas
          </p>
        </div>

        <button className='mt-12 ml-6 rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'>
          See More
        </button>
      </div>
    </div>
  );
}

export default About;
