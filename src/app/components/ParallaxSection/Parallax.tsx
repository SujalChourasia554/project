"use client"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react';

const Parallax = () => {

  
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className='w-full h-[24rem] mb-5 mt-20 bg-fixed bg-center bg-cover' style={{ backgroundImage: 'url("/images/19.jpg")' }}>
        <div id="videoIcon" className='w-full h-full flex justify-center items-center'>
          <div id="icon" className='relative flex justify-center items-center size-20 bg-white rounded-full '>

            <div id="animation" className='animate-ping rounded-full size-20 absolute -left-0 -top-0  bg-white'></div>

            <button onClick={() => setIsOpen(true)} >
              <svg className='absolute w-[35rem] h-5 text-color-orange left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative">
                  <div className="fixed z-50 inset-0 flex w-screen items-center justify-center ">
                    <DialogPanel className="w-[50rem] h-[30rem]  border bg-white">
                    <div className='size-full' id="video">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/GAfHbMFhBqQ?autoplay=1`}  allowFullScreen allow="autoplay; encrypted-media"></iframe>
                    </div>
                    </DialogPanel>
                  </div>
                </Dialog>
                
            </button>
           
          </div>
        </div>
      </div>

    </div>
  );
};

export default Parallax;
