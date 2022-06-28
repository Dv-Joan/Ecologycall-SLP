import React from 'react';
import Logo from '../src/Images/logo512.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from '../src/Pages/About';
import Services from '../src/Pages/Services';
import Contact from '../src/Pages/Contact';
import Try from '../src/Pages/Try';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <nav className='bg-white'>
          <div className='max-w-7xl mx-auto px-5 py-7 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-start h-16'>
              <div className='flex-shrink-0 flex items-center justify-start'>
                <Link to='/home'>
                  <span className='inline-flex pt-5'>
                    <img
                      className='hidden lg:block h-16 pl-12 w-auto'
                      src={Logo}
                      alt='Workflow'
                    />
                    <span className=' text-3xl pt-4 pl-2 font-Anek'>
                      Earthly.io
                    </span>
                  </span>
                </Link>
              </div>
              <div className='flex-1 flex items-center justify-end pr-7 pt-5'>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    <Link
                      to='/about'
                      href='#'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      About
                    </Link>
                    <Link
                      to='/services'
                      href='#'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      Services
                    </Link>
                    <Link
                      to='/contact'
                      href='#'
                      className='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      Contact
                    </Link>
                    <Link
                      to='/try'
                      href='#'
                      className='bg-slate-900 text-white px-7 py-2 rounded-full text-sm font-medium'
                      aria-current='page'
                    >
                      Try it free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/try' element={<Try />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
