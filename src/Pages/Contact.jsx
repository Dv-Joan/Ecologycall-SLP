import React from 'react';
import location from '../Images/location.png';
import telephone from '../Images/telephone.png';
import message from '../Images/message.png';
import phone_contact from '../Images/phone_contact.png';
import email_contact from '../Images/email_contact.png';
import name_contact from '../Images/name_contact.png';

function Contact() {
  return (
    <div className='flex justify-center my-16'>
      <div>
        <p className='font-Anek font-black text-2xl text-center my-2'>
          Get in touch
        </p>
        <p className='text-center mt-2 font-Montserrat text-xm'>
          Contact us for a quote, help or to join the team
        </p>
        <div className='flex justify-center gap-3 my-12'>
          <div className='grid justify-items-stretch hover:bg-slate-200 py-3 px-7  cursor-default w-52 rounded-lg'>
            <img
              src={location}
              alt='location'
              className='justify-self-center pb-2 pt-2'
            />
            <p className='text-xs font-Montserrat text-center'>
              Av. Giraldez Nº1566 /Perú
            </p>
          </div>
          <div className='grid justify-items-stretch hover:bg-slate-200 py-3 px-7  cursor-default w-52 rounded-lg'>
            <img
              src={telephone}
              alt='telephone'
              className='justify-self-center pb-2 pt-2'
            />
            <p className='text-xs font-Montserrat text-center'>+51 91409629</p>
          </div>
          <div className='grid justify-items-stretch hover:bg-slate-200 py-3 px-7  cursor-pointer w-52 rounded-lg'>
            <img
              src={message}
              alt='message'
              className='justify-self-center pb-2 pt-2'
            />
            <p className='text-xs font-Montserrat text-center'>
              jpm_2001@icloud.com
            </p>
          </div>
        </div>
        <div className='bg-gray-100 p-7 rounded-xl'>
          <p className='text-xm font-bold font-Montserrat pb-7'>Contact Form</p>
          <div className=''>
            <div className='flex gap-5'>
              <div>
                <div className='my-2'>
                  <p className='text-xs font-bold font-Montserrat pb-1'>
                    Your Name
                  </p>
                  <div class='relative w-full'>
                    <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                      <img
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        src={name_contact}
                      />
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      class='bg-gray-50 border-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 pl-10 p-2 font-Montserrat'
                    />
                  </div>
                </div>
                <div className='my-8'>
                  <p className='text-xs font-bold font-Montserrat pb-1'>
                    Email
                  </p>
                  <div class='relative w-full'>
                    <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                      <img
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        src={email_contact}
                      />
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      class='bg-gray-50 border-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 pl-10 p-2 font-Montserrat '
                    />
                  </div>
                </div>
                <div className='my-8 '>
                  <p className='text-xs font-bold font-Montserrat pb-1'>
                    Phone
                  </p>
                  <div class='relative w-full'>
                    <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                      <img
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        src={phone_contact}
                      />
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      class='bg-gray-50 border-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 pl-10 p-2 font-Montserrat'
                    />
                  </div>
                </div>
              </div>
              <div className='ml-3 pt-2 px-5'>
                <label
                  for='message'
                  class='block mb-1.5 text-xs font-bold font-Montserrat'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows='4'
                  class='block p-2.5 w-96 h-56 text-sm font-Montserrat text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300'
                  placeholder='Your message...'
                ></textarea>
              </div>
            </div>
            <div className='my-7'>
              <div>
                {' '}
                <p className='text-xs font-bold font-Montserrat'>Services</p>
              </div>
              <div>
                <button className='rounded-lg bg-slate-300 text-slate-800 font-Anek  hover:bg-cyan-500 active:bg-cyan-600  hover:text-slate-100 py-1.5 text-xs px-5 mr-5 my-5'>
                  Set Help
                </button>
                <button className='rounded-lg bg-slate-300 text-slate-800 font-Anek  hover:bg-cyan-500 active:bg-cyan-600  hover:text-slate-100 py-1.5 text-xs px-5 mr-5 my-5'>
                  Set Help
                </button>
                <button className='rounded-lg bg-slate-300 text-slate-800 font-Anek  hover:bg-cyan-500 active:bg-cyan-600  hover:text-slate-100 py-1.5 text-xs px-5 mr-5 my-5'>
                  Set Help
                </button>

                <button className='rounded-lg bg-slate-300 text-slate-800 font-Anek  hover:bg-cyan-500 active:bg-cyan-600  hover:text-slate-100 py-1.5 text-xs px-5 mr-5 my-5'>
                  Set Help
                </button>
                <button className='rounded-lg bg-slate-300 text-slate-800 font-Anek  hover:bg-cyan-500 active:bg-cyan-600  hover:text-slate-100 py-1.5 text-xs px-5 mr-5 my-5'>
                  Set Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
