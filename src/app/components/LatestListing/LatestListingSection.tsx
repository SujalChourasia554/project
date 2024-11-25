import React from 'react'
import TopSection from '../FeedSection/TopSection'
import LatestListingCard from '../Cards/LatestListningCard'
import { LatestListingCardDets } from '../Cards/Cards_details/LatestListingDetails'


const LatestListingSection = () => {

  const cards = [...LatestListingCardDets];

  return (
    <div className='mb-24 mt-20'>
      <TopSection top={'Property'} bottom={'Latest Listing'}></TopSection>
    <div id="wContainer" className='px-5 lg:px-12 custom_screen:px-20 '>
      <div id="wrapper" className='w-full grid grid-cols-1 custom_small:grid-cols-2 md:grid-cols-2 custom_screen:grid-cols-3 gap-x-6 gap-y-20'>

        {cards.map((card , index) => (
          <div 
          key={index} 
          id={`box${index + 1}`}
          className='bg-red-400 '
          >

          <LatestListingCard 
          url={card.url} 
          purpose={card.purpose} 
          location={card.location} 
          price={card.price} 
          text={card.text} 
          Number_of_bedroom={card.Number_of_bedroom} 
          Number_of_bathroom={card.Number_of_bathroom} 
          owner_name={card.owner_name} 
          isRent={card.isRent}
          />
      </div>
        ))}
       
      </div>
      </div>
    </div>
  )
}

export default LatestListingSection
