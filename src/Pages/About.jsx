import React from 'react';
import certified from '../Images/certified-team.png';
import timberland from '../Images/timberland.png';
import optoro from '../Images/optoro.png';
import PartnerCard from '../Components/PartnerCard';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
function About() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#e7e5e4';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className=' mx-36 my-32 grid gap-12 grid-cols-2'>
        <div className='justify-center'>
          <span className='font-Anek font-black text-5xl'>About Our Team</span>
          <div>
            <p className='text-xm font-Montserrat py-5'>
              Currently we are considered organically more than a team, a group
              of environmentalists who fight for the awareness of "Our Planet is
              in Danger of EXTINCTION", it is for this reason that we carry out
              different types of talks, training and above all conferences to
              carry out our objective. as activists.Currently we are considered
              organically more than a team, a group of environmentalists who
              fight.
            </p>
            <p className='font-Montserrat text-xm'>
              If you consider it opportune to support us in some way, here below
              you have options, we thank you !
            </p>
            <div>
              <button
                onClick={openModal}
                className=' rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'
              >
                Donation
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
              >
                <div className='bg-slate-300 p-6 rounded-xl'>
                  <h2
                    className='font-Anek'
                    ref={(_subtitle) => (subtitle = _subtitle)}
                  >
                    Este es el POP UP
                  </h2>
                  <button
                    onClick={closeModal}
                    className='rounded-lg bg-slate-200 text-slate-800 font-Anek hover:bg-cyan-500 active:bg-cyan-600 hover:text-slate-100 py-2 px-5 mr-5 my-5'
                  >
                    x{' '}
                  </button>
                  <div>I am a modal</div>
                  <form className=''>
                    <textarea
                      id='message'
                      rows='4'
                      class='block p-2.5 w-96 h-56 text-sm font-Montserrat text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300'
                      placeholder='Your message...'
                    ></textarea>
                    <button>See More</button>
                  </form>
                </div>
              </Modal>
            </div>
            <button className='rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5 mr-5 my-5'>
              Patronize
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
      <div className=' mt-32 mb-16 flex gap-64'>
        <div className='pl-36 w-1/2'>
          <span className='font-Anek font-black text-4xl'>
            Business Associate & Partners
          </span>
          <p className='font-Montserrat text-xm py-5'>
            We have 10+ partners around the world, with the best history of
            changing the mindset of tthe earth extinction
            conception.asdasdasdasdasdasd asdasdasdasdasdasdasda
          </p>
        </div>
        <div>
          <button className='mt-10 rounded-lg bg-slate-200 text-slate-800 font-Anek border-2 border-solid border-slate-500 hover:bg-cyan-500 active:bg-cyan-600 hover:border-slate-300 hover:text-slate-100 py-2 px-5'>
            Contact Us
          </button>
        </div>
      </div>
      <div className='justify-center mx-36 mb-64 grid gap-16 grid-cols-4 grid-rows-3'>
        <PartnerCard
          description='Provides full-time employees with up to 40 paid volunteer hours per year, including an annual Earth Day event in April'
          src={timberland}
        />
        <PartnerCard
          description='Provides its employees with paid time off to volunteer for multiple environmental causes each year, working with celebrated local Utah'
          src='https://ww1.prweb.com/prfiles/2015/03/16/12928414/gI_87228_ClearlinkLogo1400px.png'
        />
        <PartnerCard
          description='Technology start-up, Optoro, reduces landfill waste by helping clients extend the lifecycle of their overstocked, outdated, or returned inventory.'
          src={optoro}
        />
        <PartnerCard
          description='Dogfish Head Brewery recently built a $9 million on-site facility that will allow it to clean and reuse its waste water to clean pipes and tanks'
          src='https://images.squarespace-cdn.com/content/v1/510a02e0e4b0086d33c3c797/1472553003585-I2FZ7I5N8K5X2DOUHUP5/ke17ZwdGBToddI8pDm48kKfjwUDYLIfBqcv5lRhY7KFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxpoH2jH5ylKjm8CrdBvie44dEkm11O0jAn7CtYa_0bDLTiC3biUQM6TmBeEePIPZg/image-asset.png?format=original'
        />
        <PartnerCard
          description='Greenvelope, was founded with the goal of offering an ecofriendly alternative to paper invitations. Since the company first launched in 2008'
          src='https://cdnpng.greenvelope.com/pub/_images/greenvelope_textlogo.png'
        />
        <PartnerCard
          description='UGE International has deployed renewable energy solutions in over 80 countries around the world. Best-known for putting wind turbines on the Eiffel Tower.'
          src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397202861/a186c4e6c1888de2266bb0b867293d25.jpg'
        />
        <PartnerCard
          description='A leading provider of dialysis services, is working to reduce their carbon footprint both inside and outside of their Denver, Colorado headquarters'
          src='https://cdn.worldvectorlogo.com/logos/davita.svg'
        />
        <PartnerCard
          description='helps clients conserve energy by lowering consumption, incorporating energy-efficient appliances and systems'
          src='https://logodix.com/logo/1996468.png'
        />
        <PartnerCard
          description='Kicked off their GRO1000 initiative in 2011 with a goal of supporting the creation of more than 1,000 community gardens and green spaces by 2018'
          src='https://scottsmiraclegro.com/wp-content/themes/smg-2019/images/logos/SMG_Logo-Lg.png'
        />
        <PartnerCard
          description=' CEO David Crane recently announced the company is sustainability goals to reduce company carbon emissions by 50 percent by 2030 and 90 percent by 2050'
          src='https://images.power-eng.com/wp-content/uploads/2019/08/59307-file.jpeg'
        />
        <PartnerCard
          description='Today we have become the greatest threat to the health of our planet. We’re the first generation to know what we’re doing, and the last who have a chance to put things right'
          src='https://www.eurobrandmanagement.com/wp-content/uploads/2022/06/ebm-logo-for-zoom-background-1.png'
        />
        <PartnerCard
          description='Our operations constantly seek to generate efficiencies that allow us to reduce the impact of our activities and achieve efficient use of resources'
          src='https://imgs.search.brave.com/gzsFeg6FCKjOHol24FY_4ChsXaexcMMPQ0m7YRj-p88/rs:fit:174:63:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/L19jOWVCTnBOd1JM/Yy9Sek9GejVmb0tW/SS9BQUFBQUFBQUVy/cy9xUkRNcThsXzZK/by9zMzIwL2FsaWNv/cnArbG9nby5naWY.gif'
        />
      </div>
    </div>
  );
}

export default About;
