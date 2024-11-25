import AminitiesCard from './AminitiesCard';
import AminitiesTopSection from './AminitiesTopSection';

export default function BuildingAminities() {
    return (
        <>
            {/* main container of aminities cards */}
            <div className="w-full pt-[7.188rem] pb-[7.188rem] pr-[0.5rem] pl-[0.5rem]">
                <AminitiesTopSection top="Our Amenities" bottom="Building Amenities"></AminitiesTopSection>
                {/* card container */}
                <div className='w-full flex justify-center mt-[1rem]'>
                    {/* <div className='w-full px[0.5rem] grid grid-cols-1 gap-y-[2.85rem] sm:grid-cols-2 sm:gap-x-4 sm:w-[31.875rem] sm:px-0 md:grid-cols-3 md:gap-x-8 md:w-[45rem] md:px-[0.9rem] lg:w-[58rem] lg:px-0 lg:grid-cols-4  xl:w-[74.375rem]'> */}
                    <div className='w-full px[0.5rem] flex justify-center flex-wrap gap-y-[2.85rem] custom_small:gap-x-4 sm:w-[31.875rem] sm:px-0 md:gap-x-8 md:w-[45rem] md:px-[0.9rem] lg:w-[58rem] lg:px-0  xl:w-[74.375rem]'>

                        {/* cards */}
                        <AminitiesCard img="./aminitiesIcons/road.png"          title="Parking Space"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/swimming.png"      title="Swimming Pool"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/secure-shield.png" title="Private Security"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/stethoscope.png"   title="Medical"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/book.png"          title="Library Area"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/bed.png"           title="King Size Beds"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/home.png"          title="Smart Homes"></AminitiesCard>
                        <AminitiesCard img="./aminitiesIcons/slider.png"        title="Kid's Playland"></AminitiesCard>
                    </div>
                </div>
            </div>
        </>
    )
}