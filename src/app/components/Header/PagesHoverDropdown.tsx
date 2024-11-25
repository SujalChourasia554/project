import React from 'react'
import { gsap } from 'gsap';
export default function PagesHoverDropdown() {
    const InnerPages1 = [
        { id: '1', name: 'Portfolio' },
        { id: '2', name: 'Portfolio - 02' },
        { id: '3', name: 'Team' },
        { id: '4', name: 'FAQ' },
    ];
    const InnerPages2 = [
        { id: '1', name: 'History' },
        { id: '2', name: 'Add Listing' },
        { id: '3', name: 'Google Map Locations' },
        { id: '4', name: '404' },
        { id: '5', name: 'Contact' },
        { id: '6', name: 'Coming Soon' }
    ];
    const propertyPages = [
        { id: '1', name: 'Property' },
        { id: '2', name: 'Property Left Sidebar' },
        { id: '3', name: 'Property Right Sidebar' },
        { id: '4', name: 'Property Grid' },
        { id: '5', name: 'Property List' },
        { id: '6', name: 'Cart' }
    ];
    function handleMouseEnter() {
        gsap.to(".pagesBox", { y: 0, duration: 0.2, display:'block', opacity: 1 });
    }
    
    function handleMouseLeave() {
        gsap.to(".pagesBox", { y: 10, duration: 0.2, display:'none', opacity: 0 });
    }
    return (
        <div><div className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row scrollbar-hide">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                    <div className='flex flex-row items-center'>
                        <a className="my-2 text-base xl:text-lg font-semibold text-white cursor-pointer">
                            Pages
                        </a>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                            </svg></span>
                    </div>
                </div>
                <div className="absolute pagesBox w-screen hidden z-10 top-20 -right-[23rem] xl:-right-[24rem] pr-[6rem] lg:pl-[6rem] custom_screen:pl-[8rem] bg-grey-200">
                    <div className='w-full h-[0.340rem] bg-color-orange'></div>
                    <div className="w-full px-10 pt-8 pb-6 bg-white shadow-lg">
                        <div className="grid grid-cols-4 gap-8 ">
                            <div className='col-span-1'>
                                <div className='grid grid-cols-1 gap-5 px-4'>
                                    <p className='bg-gray-100 text-gray-500 text-nowrap hover:text-color-orange py-2 text-base font-headfont tracking-wide border-dashed border-b pl-2 cursor-pointer'>Inner Pages</p>
                                    {
                                        InnerPages1.map((list) =>
                                            <a className='text-gray-500 text-nowrap text-base font-headfont tracking-wider hover:text-color-orange pl-2 cursor-pointer' key={list.id}>
                                                {list.name}
                                            </a>)
                                    }
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='grid grid-cols-1 gap-5 px-4'>
                                    <p className='bg-gray-100 text-gray-500 py-2 text-nowrap text-base font-headfont tracking-wide border-dashed border-b pl-2 cursor-pointer hover:text-color-orange'>Inner Pages</p>
                                    {
                                        InnerPages2.map((list) =>
                                            <a className='text-gray-500 text-base text-nowrap font-headfont tracking-wider hover:text-color-orange pl-2 cursor-pointer' key={list.id}>
                                                {list.name}
                                            </a>)
                                    }
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='grid grid-cols-1 gap-5 px-4'>
                                    <p className='bg-gray-100 text-gray-500 py-2 text-nowrap text-base font-headfont tracking-wide border-dashed border-b pl-2 cursor-pointer hover:text-color-orange'>Property Pages</p>
                                    {
                                        propertyPages.map((list) =>
                                            <a className='text-gray-500 text-base text-nowrap font-headfont tracking-wider hover:text-color-orange pl-2 cursor-pointer' key={list.id}>
                                                {list.name}
                                            </a>)
                                    }
                                </div>
                            </div>
                            <div className='col-span-1 px-4'>
                                <a >
                                <img src='/images/menu-banner-1.jpg' className='cursor-pointer border-[10px] border-gray-200'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>

    )
}
