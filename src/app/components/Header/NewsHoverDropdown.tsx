import React from 'react'
import { gsap } from 'gsap';
export default function NewsHoverDropdown() {
  const newsList = [
    { id: '1', name: 'News' },
    { id: '2', name: 'News Grid' },
    { id: '3', name: 'News Left sidebar' },
    { id: '4', name: 'News Right sidebar' },
  ];
  function handleMouseEnter() {
    gsap.to(".newsBox", { y: 0, duration: 0.2, display:'block', opacity: 1 });
}

function handleMouseLeave() {
    gsap.to(".newsBox", { y: 10, duration: 0.2, display:'none', opacity: 0 });
}
  return (
    <div>
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <div className='flex flex-row items-center'>
            <a className="my-2 text-base xl:text-lg font-semibold text-white">
              News
            </a>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg></span>
          </div>
        </div>
        <div className="absolute newsBox z-10 top-20 hidden bg-gray-200">
          <div className='w-full h-[0.340rem] bg-color-orange'></div>
          <div className="w-[14rem] px-8 pt-6 pb-6 bg-white shadow-lg">

            <div className="grid grid-cols-1 gap-5 cursor-pointer">
              {
                newsList.map((list) =>
                  <a className='text-gray-500 text-base font-headfont tracking-wider hover:text-color-orange' key={list.id}>
                    {list.name}
                  </a>)
              }
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
