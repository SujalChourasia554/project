"use client"
import React, { useState, useRef } from 'react'
import FeedbackCard from './FeedbackCard'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


const FeedbackSlider = () => {

  const leftButton = useRef(null)
  const rightButton = useRef(null);

  const leftHoverAnimation = () => {
    gsap.to(leftButton.current, {
      duration: 0.2,
      color: '#FFFFFF', // Change the color to white
    });
  };
  
  const leftExitHoverAnimation = () => {
    gsap.to(leftButton.current, {
      duration: 0.2,
      color: '#000000', // Change the color to black
    });
  };
  const rightHoverAnimation = () => {
    gsap.to(rightButton.current, {
      duration: 0.2,
      color: '#FFFFFF', // Change the color to white
    });
  };
  
  const rightExitHoverAnimation = () => {
    gsap.to(rightButton.current, {
      duration: 0.2,
      color: '#000000', // Change the color to black
    });
  };
  

  const [slideIndex, setSlideIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const feedbackList = [
    {
      id: 1, name: "Jacob William", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    },
    {
      id: 2, name: "Kelian Anderson", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    },
    {
      id: 3, name: "Adam Joseph", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    },
    {
      id: 4, name: "James Carter", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    },
    {
      id: 5, name: "James Carter", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    },
    {
      id: 6, name: "James Carter", role: "SELLING AGENTS", image: "./images/2.jpg", feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi vel inventore, adipisci expedita consequatur voluptas totam provident dicta excepturi incidunt officia cum dolor illo iure similique. Quidem, beatae fugiat."
    }
  ]
  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  }

  const handleNextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  }

  const settings = {
    Infinity: true
  }
  return (
    <div>
      <div id="slider" className='w-full px-4 lg:px-6 flex justify-center'>

        <div id="sliding-div" className='group w-[95%] relative bg-slider-background-color lg:px-2'>

          <div ref={carouselRef} id="cards" className='w-full flex py-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
            {feedbackList.map((list) =>
              <div key={list.id} className='snap-start w-full custom_small:w-[50%] custom_screen:w-[33.5%] px-3 shrink-0 bg-slider-background-color '>
                <FeedbackCard name={list.name} role={list.role} image={list.image} feedback={list.feedback}></FeedbackCard>
              </div>
            )}
            {/* Slider controls */}

          </div>
          <button
             onMouseEnter={leftHoverAnimation}
             onMouseLeave={leftExitHoverAnimation}
            type="button"
            className="border opacity-0 bg-white rounded-full absolute top-1/2 left-[0.7rem] lg:left-[1.3rem] custom_bigScreen:left-[-2.6rem] z-30 flex items-center justify-center size-12  dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <svg ref={leftButton} className='size-5' xmlns=" http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>

            <span className="sr-only">Previous</span>
          </button>

          <button
            onMouseEnter={rightHoverAnimation}
            onMouseLeave={rightExitHoverAnimation}
            type="button"
            className="group border opacity-0 bg-white rounded-full absolute top-1/2 right-[0.7rem] lg:right-[1.3rem] custom_screen:right-[0.95rem] custom_bigScreen:right-[-3.1rem] z-30 flex items-center justify-center size-12  dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handleNextSlide}
          >
           <svg ref={rightButton} className='size-5' xmlns=" http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>

            <span className="sr-only">Next</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default FeedbackSlider;