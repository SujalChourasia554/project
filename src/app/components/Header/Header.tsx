'use client'
import { useState, useRef  } from 'react'
import { gsap } from 'gsap';
import {
  Dialog,
  DialogPanel
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import HomeHoverDropdown from './HomeHoverDropdown'
import AboutHoverDropdown from './AboutHoverDropdown'
import NewsHoverDropdown from './NewsHoverDropdown'
import PropertyHoverDropdown from './PropertyHoverDropDown'
import PagesHoverDropdown from './PagesHoverDropdown'
import SearchBox from './SearchBox';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [homeSubMenu, setHomeSubMenu] = useState(false)
  const [aboutSubMenu, setAboutSubMenu] = useState(false)
  const [propertySubMenu, setPropertySubMenu] = useState(false)
  const [newsSubMenu, setNewsSubMenu] = useState(false)
  const [pagesSubMenu, setPagesSubMenu] = useState(false)
  const minusHomeRef = useRef(null);
  const minusAboutRef = useRef(null);
  const minusPropertyRef = useRef(null);
  const minusNewsRef = useRef(null);
  const minusPagesRef = useRef(null);
  const homeList = [
    { id: '1', name: 'Home Style 01' },
    { id: '2', name: 'Home Style 02' },
    { id: '3', name: 'Home Style 03' },
    { id: '4', name: 'Home Style 04' },
    { id: '5', name: 'Home Style 05' },
    { id: '6', name: 'Home Style 06' },
    { id: '7', name: 'Home Style 07' },
    { id: '8', name: 'Home Style 08' },
    { id: '9', name: 'Home Style 09' },
    { id: '10', name: 'Home Style 10' },
    { id: '11', name: 'Home Style 11' },
  ];
  const aboutList = [
    { id: '1', name: 'About' },
    { id: '2', name: 'Services' },
    { id: '3', name: 'Portfolio' },
    { id: '4', name: 'Portfolio - 02' },
    { id: '5', name: 'Team' },
    { id: '6', name: 'FAQ' },
    { id: '7', name: 'Google Map Locations' },
  ];
  const propertyList = [
    { id: '1', name: 'Property' },
    { id: '2', name: 'Property Grid' },
    { id: '3', name: 'Property Left sidebar' },
    { id: '4', name: 'Property Right sidebar' },
    { id: '5', name: 'Cart' },
    { id: '6', name: 'Wishlist' },
    { id: '7', name: 'Checkout' },
    { id: '8', name: 'Order Tracking' },
    { id: '9', name: 'My Account' },
    { id: '10', name: 'Sign in' },
    { id: '11', name: 'Register' }
  ];
  const newsList = [
    { id: '1', name: 'News' },
    { id: '2', name: 'News Grid' },
    { id: '3', name: 'News Left sidebar' },
    { id: '4', name: 'News Right sidebar' },
  ];
  const pagesList = [
    { id: '1', name: 'Portfolio' },
    { id: '2', name: 'Portfolio - 02' },
    { id: '3', name: 'Team' },
    { id: '4', name: 'FAQ' },
    { id: '5', name: 'History' },
    { id: '6', name: 'Add Listing' },
    { id: '7', name: 'Google Map Locations' },
    { id: '8', name: '404' },
    { id: '9', name: 'Contact' },
    { id: '10', name: 'Coming Soon' }
  ];

  function handleHomeSubMenu() {
    gsap.to(minusHomeRef.current, { rotation: '+=90', duration:0.3 });
    if(!homeSubMenu){
    gsap.to(".homeBox1", { y:0, duration:0.5 ,height:'auto' });
    }
    else{
      gsap.to(".homeBox1", {duration:0.5 ,height:0 });
    }
    setHomeSubMenu(!homeSubMenu)
  }
  function handleAboutSubMenu() {
    gsap.to(minusAboutRef.current, { rotation: '+=90', duration:0.3 });
    if(!aboutSubMenu){
      gsap.to(".aboutBox1", { y:0, duration:0.5 ,height:'auto' });
      }
      else{
        gsap.to(".aboutBox1", {duration:0.5 ,height:0 });
      }
    setAboutSubMenu(!aboutSubMenu)
  }
  function handlePropertySubMenu() {
    gsap.to(minusPropertyRef.current, { rotation: '+=90', duration:0.3 });
    if(!propertySubMenu){
      gsap.to(".propertyBox1", { y:0, duration:0.5 ,height:'auto' });
      }
      else{
        gsap.to(".propertyBox1", {duration:0.5 ,height:0 });
      }
    setPropertySubMenu(!propertySubMenu)
  }
  function handleNewsSubMenu() {
    gsap.to(minusNewsRef.current, { rotation: '+=90', duration:0.3 });
    if(!newsSubMenu){
      gsap.to(".newsBox1", { y:0, duration:0.5 ,height:'auto' });
      }
      else{
        gsap.to(".newsBox1", {duration:0.5 ,height:0 });
      }
    setNewsSubMenu(!newsSubMenu)
  }
  function handlePagesSubMenu() {
    gsap.to(minusPagesRef.current, { rotation: '+=90', duration:0.3 });
    if(!pagesSubMenu){
      gsap.to(".pagesBox1", { y:0, duration:0.5 ,height:'auto' });
      }
      else{
        gsap.to(".pagesBox1", {duration:0.5 ,height:0 });
      }
    setPagesSubMenu(!pagesSubMenu)
  }

  return (
    <header >
      <nav className="w-full px-2 flex items-center justify-between py-1 lg:py-6 lg:px-4" aria-label="Global">
        <div className="flex pt-6 px-1 min-[520px]:px-12 md:px-12 lg:px-24 custom_screen:pt-0">
          <div id="div" className='bg-white p-4 border-black rounded-xl'>
            <h1 className='text-color-orange text-2xl font-bold'>ApnaHostel.com</h1>
          </div>
        </div>
        <div className="flex pt-6 px-1 min-[520px]:px-12 lg:px-24 custom_screen:pt-0 custom_screen:hidden">
          <button
            type="button"
            className="-m-4 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12 bg-white text-black p-3" aria-hidden="true" />
            {/* Insert your Bars3Icon component or icon here */}
          </button>
        </div>
        <div className="hidden custom_screen:flex custom_screen:flex-1 custom_screen:justify-end custom_screen:gap-x-9 xl:gap-x-10 custom_screen:mr-24 ">
          <div className='cursor-pointer'>
            <HomeHoverDropdown />
          </div>

          <div className='cursor-pointer'>
            <AboutHoverDropdown />
          </div>
          <div className='cursor-pointer'>
            <PropertyHoverDropdown />
          </div>

          <div className='cursor-pointer'>
            <NewsHoverDropdown />
          </div>
          <div>
            <PagesHoverDropdown />
          </div>

          <div className='flex items-center cursor-pointer'>
            <a className="my-2 text-base xl:text-lg  font-semibold text-white">
              Contact
            </a>
          </div>
          <div className='flex items-center cursor-pointer'>
            <button className='my-1 text-lg font-semibold text-nowrap text-white bg-color-orange px-8 py-4 hover:text-black hover:bg-white'>Add Listing</button>
          </div>

        </div>
      </nav>
      <div className="custom_screen:hidden">
        <div className='w-[100%]'>
        <div className="h-full fixed z-20 py-10 inset-y-0 left-0 w-[20rem] sm:w-[25rem] bg-white  duration-500" style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div id='scrollBar' className='z-20 h-[88%] fixed flex flex-col px-8 gap-10 w-[19rem] sm:w-[23rem] overflow-y-auto'>
            <div className='flex flex-row items-center'>
              <div className='w-[70%] '>
                <a href="#" >
                  <img className='w-full' src='https://quarter-nextjs.vercel.app/img/logo.png' />
                </a>
              </div>
              <div className='w-[30%] flex justify-end'>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  {/* Insert your XMarkIcon component or icon here */}
                </button>
              </div>
            </div>
            <hr></hr>
            <div >
              <SearchBox/>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>Home</a>
                <div className='flex w-full justify-end '>
                  <button className='inline-flex' onClick={handleHomeSubMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative z-10">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <svg ref={minusHomeRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90 absolute">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`homeBox1 h-0 overflow-hidden`}>
                <div className='flex flex-col pt-4 pl-5 '>
                {homeList.map((list) =>
                  <a key={list.id} className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito mt-5 tracking-wide hover:text-color-orange cursor-pointer'>{list.name}</a>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>About</a>
                <div className='flex w-full justify-end '>
                  <button className='inline-flex' onClick={handleAboutSubMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative active:animate-rotate_90 focus:animate-rotate_90">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <svg ref={minusAboutRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90 absolute">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`aboutBox1 h-0 overflow-hidden`}>
                <div className='flex flex-col pt-4 pl-5 '>
                {aboutList.map((list) =>
                  <a key={list.id} className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito mt-5 tracking-wide hover:text-color-orange cursor-pointer'>{list.name}</a>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>Property</a>
                <div className='flex w-full justify-end '>
                  <button className='inline-flex' onClick={handlePropertySubMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative active:animate-rotate_90 focus:animate-rotate_90">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <svg ref={minusPropertyRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90 absolute">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`propertyBox1 h-0 overflow-hidden`}>
                <div className='flex flex-col pt-4 pl-5 '>
                {propertyList.map((list) =>
                  <a key={list.id} className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito mt-5 tracking-wide hover:text-color-orange cursor-pointer'>{list.name}</a>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>News</a>
                <div className='flex w-full justify-end '>
                  <button className='inline-flex' onClick={handleNewsSubMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative active:animate-rotate_90 focus:animate-rotate_90">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <svg ref={minusNewsRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90 absolute">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`newsBox1 h-0 overflow-hidden`}>
                <div className='flex flex-col pt-4 pl-5 '>
                {newsList.map((list) =>
                  <a key={list.id} className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito mt-5 tracking-wide hover:text-color-orange cursor-pointer'>{list.name}</a>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>Pages</a>
                <div className='flex w-full justify-end '>
                  <button className='inline-flex' onClick={handlePagesSubMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative active:animate-rotate_90 focus:animate-rotate_90">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <svg ref={minusPagesRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90 absolute">
                      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`pagesBox1 h-0 overflow-hidden`}>
                <div className='flex flex-col pt-4 pl-5 '>
                {pagesList.map((list) =>
                  <a key={list.id} className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito mt-5 tracking-wide hover:text-color-orange cursor-pointer'>{list.name}</a>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 text-sm md:text-[15px] font-[400] font-nunito uppercase hover:text-color-orange cursor-pointer'>Contact</a>
              </div>
            </div>
            <hr></hr>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-color-orange cursor-pointer'>
                <span className='w-12 h-12 border-2 p-3 flex justify-center items-center'>
                  <svg className='size-3.5' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
                  </svg></span>
                <span className='tracking-wide pl-2 text-sm md:text-[15px] font-[400] font-nunito'>My Account</span></a>
            </div>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-color-orange cursor-pointer'>
                <span className="w-12 h-12 border-2 p-3 flex justify-center items-center">
                  <svg className='size-3.5' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" /></svg> <sup>0</sup></span>

                <span className='tracking-wide pl-2 text-sm md:text-[15px] font-[400] font-nunito'>Wishlist</span></a>
            </div>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-color-orange cursor-pointer'>
                <span className="w-12 h-12 border-2 p-3 flex justify-center items-center">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
                  <sup>0</sup></span>

                <span className='tracking-wide pl-2 text-sm md:text-[15px] font-[400] font-nunito'>Shopping Cart</span></a>
            </div>
            <hr></hr>
            <div className='flex flex-row gap-2'>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-white'>
                <span className='w-10 h-10 bg-slate-100 p-2 flex justify-center items-center hover:bg-color-orange cursor-pointer'>
                  <svg className='size-4' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                </span>
              </a>
            </div>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-white'>
                <span className='w-10 h-10 bg-slate-100 p-2 flex justify-center items-center hover:bg-color-orange cursor-pointer'>
                <svg className='size-4' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>

                </span>
              </a>
            </div>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-white'>
                <span className='w-10 h-10 bg-slate-100 p-2 flex justify-center items-center hover:bg-color-orange cursor-pointer'>
                <svg className='size' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

                </span>
              </a>
            </div>
            <div >
              <a className='inline-flex items-center text-gray-500 hover:text-white'>
                <span className='w-10 h-10 bg-slate-100 p-2 flex justify-center items-center hover:bg-color-orange cursor-pointer'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>

                </span>
              </a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>   
    </header>

  )
}