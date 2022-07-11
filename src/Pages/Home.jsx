import React from 'react';
import BannerImage from '../Images/banner.jpg';
import earth from '../Images/earth.jpg';

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
      <div className='flex mt-16 mb-14'>
        <div className=' w-3/5 py-16 pl-28 pr-10'>
          <span className='font-Montserrat text-xl text-slate-700 font-bold'>
            " We need to save our planet because the finals times is coming
            right now "{' '}
          </span>
          <div className='text-left mt-5'>
            <span className='font-Montserrat text-xm text-slate-700'>
              I am scared of climate change and the fact that a lot of adults
              aren’t taking it seriously – do you think politicians will take
              action and try to save what we have left? <br />–{' '}
              <span className='font-bold'>Brayan, aged 21, Lima.</span>
              <br />
              <br />
              Climate change is the most pressing threat{' '}
              <span className='font-semibold'>humanity has ever faced</span>.
              Changes in the natural balance of the Earth’s atmosphere, caused
              by human behaviour, are having a major impact on the environment.
              Hurricanes are becoming larger and more powerful than in the past.
              Floods cover vast regions, causing people to lose their homes.
              Droughts cause crops to die, which means{' '}
              <span class='font-semibold'>people go hungry</span>. The sea level
              is rising, and will one day swallow up entire countries.
              Scientists from all over the world agree that the impacts of
              climate change will get worse, unless{' '}
              <span class='font-semibold'> we take action now</span>.
            </span>
          </div>
        </div>
        <div className='pt-7 pl-5 mt-2'>
          <img
            src={earth}
            alt='earth'
            className='w-full object-cover object-center shadow-xm h-96 rounded-t-xl '
          />

          <div class='relative px-3.5 -mt-16  '>
            <div class='bg-transparent backdrop-blur-2xl ease-out duration-300 hover:scale-110 cursor-context-menu p-5 rounded-b-xl shadow-lg'>
              <div class='flex items-baseline'>
                <span class='bg-red-500 text-white text-xs px-2 py-0.5 inline-block rounded-full uppercase font-semibold tracking-wide'>
                  Danger
                </span>
                <div class='ml-2 text-white uppercase text-xs font-semibold tracking-wider'>
                  21 centuries &bull; 22 years
                </div>
              </div>

              <h4 class='mt-1 text-xl font-semibold uppercase leading-tight truncate font-Anek'>
                We are At the End
              </h4>

              <div class='mt-1'>
                7800 Mill
                <span class='text-gray-600 text-sm'> /humans</span>
              </div>
              <div class='mt-4'>
                <span class='text-teal-600 text-md font-semibold'>
                  15.7% birth rate{' '}
                </span>
                <span class='text-sm text-gray-600'>(of 1000 people)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-100 py-16'>
        <div className=' py-16 px-48 text-center justify-center'>
          <span className='font-Montserrat text-2xl text-slate-800 font-bold'>
            What can we do ?{' '}
          </span>
          <br />
          <br />
          <div>
            <span className='font-Montserrat text-xm text-slate-700'>
              The lesson here is very simple – climate change must be our number
              one priority. People who can vote in elections should consider
              voting for parties that promise strong action on climate change.
              This usually means looking away from the major political groups:
              parties with a{' '}
              <span className='bg-green-500 rounded-full py-1 px-2 hover:bg-green-600 text-white font-semibold'>
                <a href='https://policy.greenparty.org.uk/'>
                  specific “green” focus
                </a>
              </span>{' '}
              will typically be the main ones tackling climate change. <br />{' '}
              <br />
              <br />
              Another option is to support global movements like{' '}
              <span className='bg-green-500 rounded-full   py-1 px-2 hover:bg-green-600 text-white font-semibold'>
                <a href='https://rebellion.global/es/'>Extinction Rebellion</a>
              </span>{' '}
              . By turning up to rallies and showing support for groups like
              these, you can send a strong message to politicians that you care
              about the planet and all the life on it
            </span>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <br />
        <br />
        <span className='px-16 py-1 font-bold font-Montserrat text-2xl border-solid border-y-4  '>
          PROJECTS FOR 'SAVE' THE HUMANITY
        </span>
        <div className=' py-7 px-36 text-center justify-center'>
          <div className='p-10 grid grid-cols-1 '>
            <div class='p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110'
                  src='https://images.unsplash.com/photo-1607391414256-ce739c31af36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  alt='Mountain'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Ecosystem Saving</div>
                  <p class='text-gray-700 text-base'>
                    Los hábitats se protegen, se gestionan, se restauran y se
                    reconectan a lo largo del gradiente climático por el que se
                    moverá la vida silvestre ante el cambio climático.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23ecosystem&src=typed_query'>
                      #ecosystem
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23wildlife&src=typed_query&f=top'>
                      #wildlife
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%20%23natureprotect&src=typed_query&f=top'>
                      #greenprotect
                    </a>
                  </span>
                </div>
              </div>
              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110'
                  src='https://images.unsplash.com/photo-1549986676-4a401c873ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                  alt='Coal'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Mines | Carbon sinks</div>
                  <p class='text-gray-700 text-base'>
                    Conocida como minería de superficie, se utiliza cuando el
                    carbón está a menos de 60 metros bajo tierra. Grandes
                    máquinas retiran la capa superior del suelo y las capas de
                    roca, y dejan al descubierto las capas de carbón.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%20%23coalmines&src=typed_query&f=top'>
                      #coalmines
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23rainforests&src=typed_query&f=top/'>
                      #rainforest
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23carbon&src=typed_query&f=top'>
                      #carbonC6
                    </a>
                  </span>
                </div>
              </div>

              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110'
                  src='https://images.unsplash.com/photo-1614314266357-8a2e58059af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
                  alt='Space'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Earth 2.0</div>
                  <p class='text-gray-700 text-base'>
                    Exo-S, una flor espacial para descubrir la Tierra 2.0.
                    Estudiar en profundidad los planetas extrasolares en busca
                    de una Tierra 2.0 es una de las prioridades científicas de
                    cara a la próxima década.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span className='bg-blue-600 rounded-full text-sm inline-block mr-2 mb-2 py-1 px-3 hover:bg-blue-800 text-white font-semibold'>
                    <a href='https://www.space.com/topics/blue-origin'>
                      Blue Origin
                    </a>
                  </span>
                  <span className='bg-red-500 rounded-full py-1 mr-2 mb-2 px-3 hover:bg-red-600 text-white font-semibold inline-block text-sm'>
                    <a href='https://solarsystem.nasa.gov/'>NASA</a>
                  </span>
                  <span className='bg-slate-700 rounded-full py-1  mr-2 mb-2 px-3 hover:bg-slate-800 text-white inline-block text-sm font-semibold'>
                    <a href='https://www.spacex.com/'>SpaceX</a>
                  </span>
                </div>
              </div>
              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110'
                  src='https://imgs.search.brave.com/OaKO1A_aQ3GBI2JFK9BLe5udF2a0g7ZII7KVSih7K24/rs:fit:1200:1153:1/g:ce/aHR0cHM6Ly9odWVs/bGFtaW5lcmEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA1L21pbmVyaWEt/ZXNwYWNpYWwuanBn'
                  alt='Asteroids'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Space Mining</div>
                  <p class='text-gray-700 text-base'>
                    ¿Podrían los asteroides convertirse en una futura fuente de
                    recursos? Algunas empresas, y Luxemburgo, ya están empezando
                    a subirse al carro de la minería espacial, abriendo la
                    puerta a grandes posibilidades pero también a inmensos
                    retos.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span className='bg-cyan-700 rounded-full text-sm inline-block mr-2 mb-2 py-1 px-3 hover:bg-cyan-800 text-white font-semibold'>
                    <a href='https://www.peterfisk.com/gamechanger/planetary-resources/'>
                      Planetary Resources
                    </a>
                  </span>
                  <span className='bg-slate-600 rounded-full text-sm inline-block mr-2 mb-2 py-1 px-3 hover:bg-slate-700 text-white font-semibold'>
                    <a href='https://deepspace.industries/en/'>DSi</a>
                  </span>
                  <span className='bg-orange-500 rounded-full text-sm inline-block mr-2 mb-2 py-1 px-3 hover:bg-orange-600 text-black font-semibold'>
                    <a href='https://asteroidminingcorporation.co.uk/'>AMC</a>
                  </span>
                </div>
              </div>
              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110'
                  src='https://images.unsplash.com/photo-1602475508643-735a79b7cbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='Coral Reefs'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Coral Reefs</div>
                  <p class='text-gray-700 text-base'>
                    La imagen de arriba es del Parque Nacional Laughing Bird
                    Caye, un sitio del Patrimonio Mundial de la UNESCO en
                    Belice. Muestra un arrecife de coral restaurado, previamente
                    víctima de blanqueamiento y en peligro de muerte.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23coralreefs&src=typed_query&f=top'>
                      #coralreefs
                    </a>
                  </span>
                  <span class=' hover:bg-gray-300 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23aqualife&src=typed_query&f=top'>
                      #aqualife
                    </a>
                  </span>
                  <span class=' hover:bg-gray-300 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%23sealife&src=typed_query&f=top'>
                      #sealife
                    </a>
                  </span>
                </div>
              </div>
              <div class='rounded overflow-hidden shadow-lg'>
                <img
                  class='w-full ease-out  duration-500 hover:scale-110 '
                  src='https://images.unsplash.com/photo-1549145313-da24d87b778e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  alt='Mountain Ranges'
                />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>Mountain Ranges</div>
                  <p class='text-gray-700 text-base'>
                    En las montañas de los Andes en América del Sur se produce
                    otro caso de esfuerzos de restauración y conservación a gran
                    escala: las comunidades locales de cinco países diferentes
                    están trabajando juntas para cultivar y plantar árboles
                    oriundos y proteger sus fuentes de agua.
                  </p>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%20%23andes&src=typed_query&f=top'>
                      #andes
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=water%20reserves&src=typed_query&f=top'>
                      #watereserves
                    </a>
                  </span>
                  <span class='inline-block hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    <a href='https://twitter.com/search?q=%20%23nowaternolife&src=typed_query&f=top'>
                      #nowaternolife
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
