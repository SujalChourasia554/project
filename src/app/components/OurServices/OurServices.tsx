import FeedbackTopSection from "../FeedbackSection/FeedbackTopSection";
import ServicesCard from "./ServicesCard";


export default function OurServices() {
    return (
        <>
            <div className="bg-gray-100 pt-[5rem] pb-[7.5rem]">
                <FeedbackTopSection top="Our Services" bottom="Our Main Focus"></FeedbackTopSection>

                <div id="wContainer" className='px-5 lg:px-12 custom_screen:px-20 '>
                    <div id="wrapper" className='w-full grid grid-cols-1  place-content-center md:grid-cols-2 custom_screen:grid-cols-3 gap-x-6 gap-y-7'>
                        <div id="box" className='bg-red-400  group relative overflow-hidden hover:shadow-none transition duration-1000 ease-in-out'>
                            <ServicesCard img="./aminitiesIcons/services1.png" title="Buy a home"></ServicesCard>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-color-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
                        </div>
                        <div id="box" className='bg-green-400 group relative overflow-hidden hover:shadow-none transition duration-1000 ease-in-out'>
                            <ServicesCard img="./aminitiesIcons/services2.png" title="Rent a home"></ServicesCard>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-color-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
                        </div>
                        <div id="box" className='bg-red-400 sm:col-span-2 sm:w-[50%] sm:ml-[25%] custom_screen:col-span-1 custom_screen:w-[100%] custom_screen:ml-[0%]  group relative overflow-hidden hover:shadow-none transition duration-1000 ease-in-out'>
                            <ServicesCard img="./aminitiesIcons/services3.png" title="Sell a home"></ServicesCard>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-color-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

