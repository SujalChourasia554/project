import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, {  useRef } from 'react'


const CopyRight = () => {

  
  
  return (
    <div className="">

                                                                    {/* */}
      <div id="copy_right-footer" className="bg-[#282B38] w-full py-7 pl-20 md:px-9 md:py-3 lg:py-3 lg:px-9 xl:px-12">
          <div className="  w-full h-full md:flex md: justify-between  lg:flex lg:justify-between lg:py-4">
            
            
            <div id="rights" className=" w-[80%] lg:w-full  mb-[2rem]  lg:mb-0  ">
              <h1 className="font-nunito_Medium text-gray-100 text-[0.9rem] tracking-tight lg:text-[1rem]" >
                All Rights Reserved @ Company
              </h1>
            </div>

            <div id="texts" className=" flex  w-[85%] flex-wrap md:justify-end md:w-[80%] md:pb-0 md:gap-4 lg:w-full lg:pb-0  lg:gap-4 lg:justify-end lg:items-center tracking-tighter">
              <h1 className=" font-sans-serif font-bold -tracking-[0.01rem] text-[0.85rem] md:text-[0.88rem] text-white mr-6 md:mr-0 lg:mr-0 hover:cursor-pointer hover:text-color-orange transition ease-in-out duration-300">Terms & Conditions</h1>
              <h1 className=" mb-1 font-sans-serif font-bold -tracking-[0.01rem] text-[0.85rem] md:text-[0.88rem] lg:mb-0 text-white hover:cursor-pointer hover:text-color-orange transition ease-in-out duration-300">Claim</h1>
              <h1 className=" font-sans-serif font-bold -tracking-[0.01rem] text-[0.85rem] md:text-[0.88rem] text-white ml-14 md:ml-0  lg:ml-0 l hover:cursor-pointer hover:text-color-orange transition ease-in-out duration-300">Privacy & Policy</h1>
            </div>


          </div>
        </div>
      </div>
    
  );
};

export default CopyRight;
