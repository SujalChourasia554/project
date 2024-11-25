'use client'
import React, { useState, useEffect, useRef } from 'react'
import RentSearchBox from './RentSearchBox'
import SaleSearchBox from './SaleSearchBox'

export default function PropertySearchBox() {
    const [rentButton, setRentButton]=useState(true)
    
    function handleRentButton(){      
        setRentButton(true)
    }
    function handleSaleButton(){
        setRentButton(false)
    }
    
    return (
        <div className='px-2 lg:px-4 mt-[10rem] lg:mt-5'>
            <div className='flex flex-col w-full px-1 min-[520px]:px-12 md:px-12 lg:px-24 gap-2'>
                <div className='flex max-[370px]:flex-col flex-row gap-2'>
                    <button id='rentbutton' onClick={handleRentButton}
                    className={`active ${rentButton ? 'bg-color-orange text-white' : 'bg-white text-black'} text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins text-base uppercase`} >
                        <div className='flex flex-row items-center'>
                            <svg className='me-2' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                </path>
                            </svg>Rent Home
                        </div>
                    </button>
                    <button id='salebutton' onClick={handleSaleButton} className={`${!rentButton ? 'bg-color-orange text-white' : 'bg-white text-black'} text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins text-base uppercase`}>
                        <div className='flex flex-row items-center'>
                            <svg className='me-2' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                </path>
                            </svg>Sale Home
                        </div>
                    </button>
                </div>
                {rentButton?(<div className='bg-[#F2F6F7]'><RentSearchBox/></div>):(<div className='bg-[#F2F6F7]'><SaleSearchBox/></div>) }
            </div>
        </div>
    )
}
