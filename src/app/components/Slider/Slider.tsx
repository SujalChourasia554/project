"use client"

import React, { useState, useRef } from 'react'
import Card from '../Cards/Card'
import { CardDets } from '../Cards/Cards_details/CardsDets'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


const Slider = () => {

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

  const slides = [...CardDets];

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

  return (
    <div>
      <div id="slider" className='w-full px-4 lg:px-9 2xl:px-20'>

        <div id="sliding-div" className='group w-full relative bg-slider-background-color lg:px-2 '>

          <div ref={carouselRef} id="cards" className='w-full flex py-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                id={`box${index + 1}`}
                className={`snap-start w-full custom_small:w-[50%] custom_screen:w-[33.5%] shrink-0 ${
                  index === 0 ? 'pr-3' : index === slides.length - 1 ? 'pl-3' : 'px-3'
                } bg-slider-background-color`}
              >
                <Card url={slide.url} location={slide.location} text={slide.text} date={slide.date} />
              </div>
            ))}
          </div>


            {/* HERE IS THE BUTTONS */}

            <button
            onMouseEnter={leftHoverAnimation}
            onMouseLeave={leftExitHoverAnimation}
            type="button"
            className="opacity-0 bg-white/90 overflow-hidden rounded-full absolute top-1/2 left-0 2xl:left-[-60px] border z-30 flex items-center justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <svg ref={leftButton} className='size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            <span className="sr-only">Previous</span>
          </button>

          {/* Next Button */}
          <button
            onMouseEnter={rightHoverAnimation}
            onMouseLeave={rightExitHoverAnimation}
            type="button"
            className="opacity-0 bg-white/90 rounded-full absolute top-1/2 right-0 2xl:right-[-60px] border z-30 flex items-center justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handleNextSlide}
          >
            <svg ref={rightButton} className='size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>

            <span className="sr-only">Next</span>
          </button>
          </div>

       
      </div>
    </div>
  )
}

export default Slider;
