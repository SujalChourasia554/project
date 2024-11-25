import React from 'react'
import TopSection from '../FeedSection/TopSection';
import Tabs from './Tabs';
import Image from 'next/image'; // Importing Image component from next/image

const AppartmentSection = () => {
  return (
    <div className='mt-28'>
      <TopSection top={'Apartment Sketch'} bottom={'Apartments Plan'} />
      <div className='w-full'>
        <div id="Navigation-tags" className='w-full py-5 px-12 custom_small:px-32 custom_small:pb-12 custom_small:pt-0 lg:px-44 flex justify-evenly flex-wrap gap-7 leading-3 mb-5 md:mb-0'>
          <Tabs text={'The Studio'}></Tabs>
          <Tabs text={'Delux Portion'}></Tabs>
          <Tabs text={'Penthouse'}></Tabs>
          <Tabs text={'Top Garden'}></Tabs>
          <Tabs text={'Double Height'}></Tabs>
        </div>

        <div className='px-4 md:px-36 lg:px-20 lg:py-10 lg:flex lg:items-stretch '>
          <div id="content" className='w-full lg:w-[50%] bg-orange-500 text-white p-7 md:p-16 lg:p-16 flex flex-col justify-center lg:mr-10 lg:shrink-0'>
            <h2 className='font-poppins font-bold text-[1.25rem] lg:text-[1.9rem] mb-4'>Deluxe Portion</h2>
            <p className='font-nunito_Medium mb-6 lg:mb-10 leading-7 text-[0.86rem] lg:text-[1rem] pr-1'>
              Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor. Incididunt labore et dolore magna aliqua. sed ayd minim veniam.
            </p>

            <div id="dets-container" className='leading-9 text-[0.85rem]'>
              <div id="dets" className='flex items-center'>
                <h1 className='pr-1 shrink-0'>Total Area</h1>
                <div id="border" className='w-[90%] border-b border-dashed border-white'></div>
                <h1 className='pl-1 shrink-0'>2800 Sq. Ft</h1>
              </div>
              <div id="dets" className='flex items-center'>
                <h1 className='pr-2 shrink-0'>Bedroom</h1>
                <div id="border" className='w-[90%] border-b border-dashed border-white'></div>
                <h1 className='pl-2 shrink-0'>150 Sq. Ft</h1>
              </div>
              <div id="dets" className='flex items-center'>
                <h1 className='pr-1 shrink-0'>Bathroom</h1>
                <div id="border" className='w-[90%] border-b border-dashed border-white'></div>
                <h1 className='pl-1 shrink-0'>45 Sq. Ft</h1>
              </div>
              <div id="dets" className='flex items-center'>
                <h1 className='pr-1 shrink-0'>Belcony/Pets</h1>
                <div id="border" className='w-[90%] border-b border-dashed border-white'></div>
                <h1 className='pl-1 shrink-0'>Allowed</h1>
              </div>
              <div id="dets" className='flex items-center'>
                <h1 className='pr-1 shrink-0'>Lounge</h1>
                <div id="border" className='w-[90%] border-b border-dashed border-white'></div>
                <h1 className='pl-1 shrink-0'>650 Sq. Ft</h1>
              </div>
            </div>
          </div>

          <div id="image" className='w-full lg:w-[50%] mt-12 lg:mt-0 lg:flex lg:items-center lg:shrink-0'>
            <div id="img" className='w-full h-[30rem] object-contain'>
              {/* Replace <img> with the <Image> component */}
              <Image
                src="/images/10.png"  // Ensure the image path starts with a leading slash
                alt="Apartment Image"
                width={500}  // Define width as per your image size
                height={500} // Define height as per your image size
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppartmentSection;
