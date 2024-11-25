import AppartmentSection from "@/app/components/AppartmentPlanSection/AppartmentSection";
import Footer from "@/app/components/Footer/Footer";
import LatestListingSection from "@/app/components/LatestListing/LatestListingSection";



import React from "react";


export default function RealEstateAgency() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-between items-center px-12 py-6 bg-grey-50">
        <div className="logo">
          <h1 className="text-2xl text-orange-500 font-bold">ApnaHostel.Com</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                Property
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                News
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 text-base hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-xl">🔍</span>
          <span className="text-xl">👤</span>
          <span className="text-xl">
            🛒<sup>0</sup>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-12 py-12 w-full h-full bg-gray-300">
        <div className="max-w-lg pt-16">
          <p className="text-orange-500 text-2xl mb-2 pb-1 mt-10">Real Estate Agency</p>
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Find Your Dream House By Us
          </h1>
          <p className="text-gray-600 text-base mb-6 w-72 pb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="relative inline-block px-6 py-3 bg-orange-500 text-white text-lg rounded transition overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-30 -translate-x-full group-hover:translate-x-0 transition"></span>
              <span className="relative z-10">Make An Enquiry</span>
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-100 border border-gray-300 text-gray-700 text-lg rounded transition hover:bg-gray-200 hover:-translate-y-1 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://quarter-nextjs.netlify.app/img/slider/21.png"
            alt="House Image"
            className="max-w-sm w-full h-auto object-cover"
          />
        </div>
      </section>
      <div className="size-full">
        <AppartmentSection></AppartmentSection>
      </div>

      <div id="animities" className="size-full">
        <LatestListingSection></LatestListingSection>
      </div>
      <div className="size-full">
        <Footer></Footer>
      </div>

      
    </div>
  );
}
