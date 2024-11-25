import React, { useState } from 'react'
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HomeHoverDropdown() {
  const homeList = [
    { id: '1', name: 'Home Style 01' },
    { id: '2', name: 'Home Style 02' },
    { id: '3', name: 'Home Style 03' },
    { id: '4', name: 'Home Style 04' },
    { id: '5', name: 'Home Style 05' },
    
  ];

  function handleMouseEnter() {
      gsap.to(".homeBox", { y: 0, duration: 0.2, display:'block', opacity: 1 });
  }

  function handleMouseLeave() {
    gsap.to(".homeBox", { y: 10, duration: 0.2, display:'none', opacity: 0 });
  }

  return (
    <div>
      <div className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        <div className="relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <div className='flex flex-row items-center justify-center'>
              <a className="my-2 text-base xl:text-lg font-semibold text-white">
                Home
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
            </div>
          </div>
          <div className={`absolute homeBox hidden z-10 top-20 bg-grey-200`} >
            <div className='w-full h-[0.340rem] bg-color-orange'></div>

            <div className="w-[13rem] px-10 pt-6 pb-6 bg-white shadow-lg">

              <div className="grid grid-cols-1 gap-5 cursor-pointer">

                {
                  homeList.map((list) => (
                    <Link 
                      href={`/homePages/Home${list.id}`} 
                      key={list.id}
                      className="text-gray-500 text-base font-headfont tracking-wider hover:text-color-orange"
                    >
                      {list.name}
                    </Link>
                  ))
                }

              </div>
            </div>
          </div>
        </div>

      </div></div>

  )
}
