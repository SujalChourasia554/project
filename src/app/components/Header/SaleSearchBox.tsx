import React from 'react'
import BedroomButtonDropdown from './BedroomButtonDropdown'
import LocationButtonDropdown from './LocationButtonDropdown'
import PropertyButtonDropdown from './PropertyButtonDropdown'
import RangeSlider from './RangeSlider'
import SubLocationButtonDropdown from './SubLocationButtonDropdown'
import { gsap } from 'gsap';
import { useRef } from "react";
export default function SaleSearchBox() {
    const searchButtonRef = useRef(null);
  const searchTextRef = useRef(null);
    function activateAnimation(){
        
        gsap.to(searchTextRef.current , {
          color:'black'
        })
          gsap.to(searchButtonRef.current, {
            x:260,
            duration: 0.3,
          })
      }
  
      function deactivateAnimation(){
        console.log("leave")
        gsap.to(searchTextRef.current , {
          color:'white'
        })
  
        gsap.to(searchButtonRef.current, {
          x:0,
          duration: 0.3,
        })
      }
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 bg-[#F2F6F7] animate-pulse '>
                    <div className='m-4'>
                        <PropertyButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <LocationButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <SubLocationButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <BedroomButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Min Size (in Sqft)' />
                    </div>
                    <div className='m-4'>
                        <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Max Size (in Sqft)' />
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 m-4 pb-8 pt-2'>
                        <RangeSlider />
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 content-center mb-4 flex justify-center'>
                        <button onMouseEnter={activateAnimation} onMouseLeave={deactivateAnimation} className='relative group flex items-center bg-color-orange text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-white hover:text-black hover:bg-black outline outline-color-orange outline-1 hover:outline-1 hover:outline-black overflow-hidden'>
                        <h1 ref={searchTextRef} className=" absolute z-10">Search Inventory</h1>
                        <h1 className="text-black group-hover">Search Inventory</h1>
                        <div  ref={searchButtonRef}  className="absolute w-[500px] h-full top-0 left-[-500px] group-hover:inline bg-white">
                        </div>
                        </button>
                    </div>
                </div>
  )
}
