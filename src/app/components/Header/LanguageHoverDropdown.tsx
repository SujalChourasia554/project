import React from 'react'
import { gsap } from 'gsap';
export default function LanguageHoverDropdown() {
    const language = [
        { id: '1', name: 'Arabic' },
        { id: '2', name: 'Bengali' },
        { id: '3', name: 'Chinese' },
        { id: '4', name: 'English' },
        { id: '5', name: 'French' },
        { id: '6', name: 'Hindi' },
    ];
    function handleMouseEnter() {
        gsap.to(".languageBox", { y: 0, duration: 0.2, display:'block', opacity: 1 });
    }
    
    function handleMouseLeave() {
        gsap.to(".languageBox", { y: 10, duration: 0.2, display:'none', opacity: 0 });
    }
    return (
        <div>
            <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='w-full flex flex-row items-center  md:justify-end md:pr-0'>
                    <a className='font-nunito font-medium text-white text-[0.813rem] md:text-sm'>
                        English
                    </a>
                    <svg className="text-white size-4 lg:size-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 268l144 144 144-144M256 392V100" /></svg>
                </div>
                <div className=" absolute z-10 left-[-7.0rem] top-[1.2rem] hidden languageBox">
                    <div id="filter" className='w-full h-3 '></div>
                    <div className='w-[180px] text-nowrap bg-white py-1 flex flex-col'>

                        {language.map((list) =>
                            <a key={list.id} className="my-1 w-full pl-4 font-nunito_Medium text-base text-gray-500 hover:text-color-orange md:mx-2">
                                {list.name}
                            </a>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
