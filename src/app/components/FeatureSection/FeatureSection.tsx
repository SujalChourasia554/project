"use client"
import React, { useState, useRef } from 'react'
import FeaturesCard from '../Cards/FeaturesCard'
import TopSection from '../FeedSection/TopSection'
import { FeatureCardDets } from '../Cards/Cards_details/FeatureCardDetails'
import { gsap } from 'gsap'



const FeatureSlider = () => {

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

  const curoselslides = FeatureCardDets.length; // total number of slides
  const slides = [...FeatureCardDets]

  // Move to the previous slide
  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
      setSlideIndex((prevIndex) => (prevIndex - 1 + curoselslides) % curoselslides);
    }
  }

  // Move to the next slide
  const handleNextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
      setSlideIndex((prevIndex) => (prevIndex + 1) % curoselslides);
    }
  }

  // Move to a specific slide when a pagination button is clicked
  const handlePaginationClick = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
      setSlideIndex(index);
    }
  }

  // Automatically move to the next slide every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(handleNextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [slideIndex]);

  return (
    <div>
      <TopSection top={'Properties'} bottom={'Feature Listing'} />
      
      <div id="slider" className='w-full px-4 lg:px-8 2xl:px-14'>
        <div id="sliding-div" className='group w-full relative bg-[#F9FAFB] md:px-2'>
          <div ref={carouselRef} id="cards" className='w-full flex pb-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
            {slides.map((items, index) => (
              <div
                key={index} // Add unique key here
                id={`box${index + 1}`}
                className={`snap-start w-full custom_small:w-[50%] custom_screen:w-[33.5%] shrink-0 ${
                  index === 0 ? 'pr-3' : index === curoselslides - 1 ? 'pl-3' : 'px-3'
                } bg-slider-background-color`} >
                <FeaturesCard 
                  url={items.url} 
                  purpose={items.purpose} 
                  location={items.location} 
                  price={items.price} 
                  text={items.text} 
                  Number_of_bedroom={items.Number_of_bedroom} 
                  Number_of_bathroom={items.Number_of_bathroom} 
                  owner_name={items.owner_name} 
                  isRent={items.isRent} 
                />
              </div>
            ))}
          </div>

          {/* Previous slide button */}
          <button
            onMouseEnter={leftHoverAnimation}
            onMouseLeave={leftExitHoverAnimation}
            type="button"
            className="opacity-0 bg-white/90 rounded-full absolute top-1/2 left-[8px] 2xl:-left-[55px] z-30 flex items-center border justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <svg ref={leftButton} className='size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>

            <span className="sr-only">Previous</span>
          </button>

          {/* Next slide button */}
          <button
            onMouseEnter={rightHoverAnimation}
            onMouseLeave={rightExitHoverAnimation}
            type="button"
            className="group opacity-0 bg-white/90 rounded-full absolute top-1/2 right-[8px] 2xl:right-[55px] border z-30 flex items-center justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handleNextSlide}
          >
             <svg ref={rightButton} className='size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.7" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>


            <span className="sr-only">Next</span>
          </button>

          {/* Pagination buttons */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-5 items-center">
            {[...Array(curoselslides)].map((_, index) => (
              <a
                key={index} // Add unique key here
                onClick={() => handlePaginationClick(index)}
                className={`transition duration-500 ease-in-out rounded-full ${index === slideIndex ? 'bg-color-orange' : 'bg-gray-300'} ${index === slideIndex ? 'size-4' : 'size-3'} `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSlider;
