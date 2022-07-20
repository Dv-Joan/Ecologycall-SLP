import React from 'react';
import Logo from '../src/Images/logo512.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Try from '../src/Pages/Try';
import Home from './Pages/Home';
import twitter_footer from '../src/Images/twitter_footer.png';
import instagram_footer from '../src/Images/instagram_footer.png';
import linkedin_footer from '../src/Images/linkedin_footer.png';
import github_footer from '../src/Images/github_footer.png';

function App() {
  return (
    <Router>
      <div>
        <nav className='bg-white'>
          <div className='mx-auto  py-7 pt-14 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-start h-16'>
              <div className='flex-shrink-0 flex items-center justify-start drop-shadow-lg'>
                <Link to='/'>
                  <span className='inline-flex pt-5'>
                    <img
                      className='hidden lg:block h-16 pl-12 w-auto'
                      src={Logo}
                      alt='Earthly'
                    />
                    <span className=' text-3xl pt-4 pl-2 font-Anek'>
                      Earthly.io
                    </span>
                  </span>
                </Link>
              </div>
              <div className='flex-1 flex items-center justify-end pr-16 pt-7'>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    <Link
                      to='/about'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      <span className='font-black'>A</span>bout
                    </Link>

                    <Link
                      to='/contact'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      <span className='font-black'>C</span>ontact
                    </Link>
                    <Link
                      to='/try'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      <span className='font-black'>T</span>ry it free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/try' element={<Try />} />
        </Routes>
      </div>
      <footer>
        <div class='pt-5 bg-warmgray-200 border-2'>
          <div class='flex justify-center mb-2'>
            <a
              href='https://twitter.com/MarcaPaucar'
              class='mr-7  text-gray-800'
              target='_blank'
            >
              <img class='w-7 ' src={twitter_footer} />
            </a>
            <a
              href='https://www.instagram.com/joan.paucar/?hl=es-la'
              class='mr-7 text-gray-800'
              target='_blank'
            >
              <img class='w-7' src={instagram_footer} />
            </a>
            <a
              href='https://www.linkedin.com/in/brayan-paucar-marca-bb5a9017a/'
              class='mr-7 text-gray-800'
              target='_blank'
            >
              <img class='w-7' src={linkedin_footer} />
            </a>
            <a
              href='https://github.com/Dv-Joan'
              target='_blank'
              class='mr-7 text-gray-800'
            >
              <img class='w-7' src={github_footer} />
            </a>
          </div>
        </div>

        <div class='text-gray-800 px-3 py-2 bg-warmgray-200 rounded-b-xl font-RobotoCondensed text-footersize'>
          © Copyrigth 2022 - 2027 <br />
          All rights reserved. Powered by{' '}
          <a
            className='font-bold font-Edu text-gray-600 hover:text-gray-900 hover:font-black'
            href='https://github.com/Dv-Joan'
            target='_blank'
          >
            Krammer
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
