import React from 'react';
import Logo from '../Images/logo512.png';

function LandingPage() {
  return (
    <div>
      <nav class='bg-white'>
        <div class='max-w-7xl mx-auto px-5 py-7 sm:px-6 lg:px-8'>
          <div class='relative flex items-center justify-start h-16'>
            <div class='flex-shrink-0 flex items-center justify-start'>
              <button>
                <span class='inline-flex pt-4'>
                  <img
                    class='hidden lg:block h-16 pl-12 w-auto'
                    src={Logo}
                    alt='Workflow'
                  />
                  <span class=' text-3xl pt-4 pl-2 font-Anek'>Earthly.io</span>
                </span>
              </button>
            </div>
            <div class='flex-1 flex items-center justify-end pr-7 pt-5'>
              <div class='hidden sm:block sm:ml-6'>
                <div class='flex space-x-4'>
                  <a
                    href='#'
                    class='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                    aria-current='page'
                  >
                    Home
                  </a>
                  <a
                    href='#'
                    class='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                    aria-current='page'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    class='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                    aria-current='page'
                  >
                    Services
                  </a>
                  <a
                    href='#'
                    class='hover:bg-slate-900 text-slate-600 hover:text-white px-7 py-2 rounded-full text-sm font-medium'
                    aria-current='page'
                  >
                    Contact
                  </a>
                  <a
                    href='#'
                    class='bg-slate-900 text-white px-7 py-2 rounded-full text-sm font-medium'
                    aria-current='page'
                  >
                    Try it free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingPage;
