import React from 'react';

function LandingPage() {
  return (
    <div>
      <header>
        <div className='text-red-500'>
          <div>Atomix</div>
          <div className=''>
            <ul>
              <li>
                <button>Home</button>
              </li>
              <li className='text-red-500'>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Try it free</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
