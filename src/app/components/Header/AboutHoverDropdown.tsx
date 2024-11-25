import React from 'react'
import { gsap } from 'gsap';
import Link from 'next/link';
export default function AboutHoverDropdown() {
    const aboutList = [
        { id: '1', name: 'About' },
        { id: '2', name: 'Services' },
        { id: '3', name: 'Portfolio' },
        { id: '4', name: 'Portfolio - 02' },
        { id: '5', name: 'Team' },
        { id: '6', name: 'FAQ' },
        { id: '7', name: 'Google Map Locations' },
      ];
      function handleMouseEnter() {
        gsap.to(".aboutBox", { y: 0, duration: 0.2, display: 'block', opacity: 1 });
      }

      function handleMouseLeave() {
        gsap.to(".aboutBox", { y: 10, duration: 0.2, display: 'none', opacity: 0 });
      }

  return (
    <div><div className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
      <div className='flex flex-row items-center'>
              <a className="my-2 text-base xl:text-lg font-semibold text-white">
                About
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
                </div>  
      </div>
      <div className="absolute aboutBox hidden z-10 top-20 bg-grey-200">
        <div className='w-full h-[0.340rem] bg-color-orange'></div>
     
        <div className="w-[15rem] pl-8 pt-6 pb-6 bg-white shadow-lg">
        
          <div className="grid grid-cols-1 gap-5 cursor-pointer">
          
            {
                aboutList.map((list) => (
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
