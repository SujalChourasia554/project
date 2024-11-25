import Image from "next/image";
import NavBarHead from "./components/Header/NavBarHead";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopFooter from "./components/Footer/TopFooter";
import FeedSection from "./components/FeedSection/FeedSection";
import BuildingAminities from "./components/AminitiesSection/BuildingAminities";
import AppartmentSection from "./components/AppartmentPlanSection/AppartmentSection";
import PropertySearchBox from "./components/Header/PropertySearchBox";
import ButtonDropdown from "./components/Header/LocationButtonDropdown";
import ClientFeedback from "./components/FeedbackSection/ClientFeedback";
import Parallax from "./components/ParallaxSection/Parallax";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import LatestListingSection from "./components/LatestListing/LatestListingSection";
import OurServices from "./components/OurServices/OurServices";



export default function Home() {
  return (
    <div className="bg-light-white relative overflow-hidden">
      {/* <div id="parallaxImg" className="w-full h-screen top-0 fixed -z-10">
        <img className="size-full object-cover" src="/images/11.jpg" alt="" />
      </div> */}
      <div className="w-full h-[1150px] md:h-[1000px] lg:h-[800px] relative">
        <div className='w-full h-[1150px] md:h-[1000px] lg:h-[800px] bg-[url("/images/11.jpg")] bg-cover bg-no-repeat bg-center'></div>
        <div className=" absolute top-0 w-full h-[1170px] md:h-[1000px] lg:h-[800px] bg-black opacity-50"></div>
        <div className="absolute top-0 w-full h-[1170px] md:h-[1000px] lg:h-[800px]">
          <NavBarHead />
          <hr className="opacity-20" />
          <Header />
          <PropertySearchBox/>
        </div>
      </div>
      <LatestListingSection></LatestListingSection>
      <OurServices></OurServices>
      <FeatureSection></FeatureSection>
      <AppartmentSection></AppartmentSection>
      <Parallax></Parallax>
      <BuildingAminities></BuildingAminities>
      <ClientFeedback></ClientFeedback>
      <FeedSection ></FeedSection>
      <TopFooter></TopFooter>
      <Footer></Footer>

    </div>
  );
}
