"use client";

import React, { useRef, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import BedroomButtonDropdown from "./BedroomButtonDropdown";
import LocationButtonDropdown from "./LocationButtonDropdown";
import PropertyButtonDropdown from "./PropertyButtonDropdown";
import RangeSlider from "./RangeSlider";
import SubLocationButtonDropdown from "./SubLocationButtonDropdown";
import { gsap } from "gsap";

export default function RentSearchBox() {
    const searchButtonRef = useRef(null);
    const searchTextRef = useRef(null);

    // State variables to capture user input
    const [propertyType, setPropertyType] = useState("");
    const [location, setLocation] = useState("");
    const [subLocation, setSubLocation] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [minSize, setMinSize] = useState("");
    const [maxSize, setMaxSize] = useState("");
    const [priceRange, setPriceRange] = useState([0, 100000]); // Range slider gives an array [min, max]

    function activateAnimation() {
        gsap.to(searchTextRef.current, {
            color: "black",
        });
        gsap.to(searchButtonRef.current, {
            x: 260,
            duration: 0.3,
        });
    }

    function deactivateAnimation() {
        gsap.to(searchTextRef.current, {
            color: "white",
        });
        gsap.to(searchButtonRef.current, {
            x: 0,
            duration: 0.3,
        });
    }

    // Format query params for the URL
    const queryParams = {
        //propertyType,
         location,
        // subLocation,
        // bedrooms,
        // minSize,
        // maxSize,
        // priceRange: priceRange.join("-"), // Format range as "min-max"
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 bg-[#F2F6F7]">
            <div className="m-4">
                <PropertyButtonDropdown onChange={setPropertyType} />
            </div>
            <div className="m-4">
                <LocationButtonDropdown onChange={(location) => setLocation(location.name)} />
            </div>
            <div className="m-4">
                <SubLocationButtonDropdown onChange={setSubLocation} />
            </div>
            <div className="m-4">
                <BedroomButtonDropdown onChange={setBedrooms} />
            </div>
            <div className="m-4">
                <input
                    className="w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1"
                    type="text"
                    placeholder="Min Size (in Sqft)"
                    value={minSize}
                    onChange={(e) => setMinSize(e.target.value)}
                />
            </div>
            <div className="m-4">
                <input
                    className="w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1"
                    type="text"
                    placeholder="Max Size (in Sqft)"
                    value={maxSize}
                    onChange={(e) => setMaxSize(e.target.value)}
                />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 m-4 pb-8 pt-2">
                <RangeSlider onChange={setPriceRange} />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 content-center mb-4 flex justify-center">
                <Link
                    href={{
                        pathname: `/search-results/${location}`,
                        // query: queryParams, // Pass query parameters in the URL
                    }}
                >
                    <button
                        onMouseEnter={activateAnimation}
                        onMouseLeave={deactivateAnimation}
                        className="relative group flex items-center bg-color-orange text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-white hover:text-black hover:bg-black outline outline-color-orange outline-1 hover:outline-1 hover:outline-black overflow-hidden"
                    >
                        <h1 ref={searchTextRef} className="absolute z-10">
                            Search Inventory
                        </h1>
                        <h1 className="text-black group-hover">Search Inventory</h1>
                        <div
                            ref={searchButtonRef}
                            className="absolute w-[500px] h-full top-0 left-[-500px] group-hover:inline bg-white"
                        ></div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
