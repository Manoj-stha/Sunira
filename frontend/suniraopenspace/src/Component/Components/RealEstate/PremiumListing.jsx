import React, { useRef } from "react";
import listingData from "./PremiumList"
import {
  FaPlus,
  FaBed,
  FaCar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";


const PremiumListing = () => {
  const scrollRef = useRef(null);

  // Function to scroll left and right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of container width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-10 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <header className="font-semibold text-lg md:text-2xl">
          Premium Listing
        </header>
        <p className="flex items-center gap-2 hover:underline cursor-pointer text-sm md:text-base">
          <FaPlus /> <span>View all listings</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-0 top-1/3 transform -translate-y-1/2 bg-blue-500 text-white shadow-md p-2 rounded-full z-2 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-blue-600 cursor-pointer"
        >
          <FaArrowLeft className="text-sm md:text-xl" />
        </button>

        {/* Scrollable Cards Wrapper */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth whitespace-nowrap flex gap-4 no-scrollbar py-5"
        >
          {listingData.map((data, index) => (
            <div
              key={index}
              className="w-[18rem] md:w-[22rem] lg:w-[25rem] rounded-lg shadow-lg relative flex-shrink-0"
            >
              {/* Image */}
              <img
                src={data.img}
                className="rounded-lg w-full h-40 md:h-52 lg:h-56 object-cover"
                alt={data.title}
              />

              {/* Black Overlay with Gradient */}
              <div className="absolute bottom-[6rem] md:bottom-[8rem] w-full h-16 md:h-20 bg-gradient-to-t from-black to-transparent text-white px-3 md:px-5 py-1 md:py-2 rounded-b-lg">
                <h3 className="text-base md:text-lg font-semibold uppercase">
                  {data.title}
                </h3>
                <h3 className="text-xs md:text-sm flex items-center gap-1">
                  <IoLocationSharp className="text-sm md:text-lg" />
                  {data.location}
                </h3>
              </div>

              {/* Property Details */}
              <div className="px-3 md:px-5 py-2 md:py-3 bg-white">
                <p className="text-xs md:text-sm">
                  <span className="italic">Posted on</span> {data.date}
                </p>
                <h4 className="text-xs md:text-sm">Land: {data.land}</h4>
                <h4 className="font-semibold text-lg md:text-2xl text-orange-500">
                  {data.price}
                </h4>
                <div className="flex gap-6 md:gap-10 text-xs md:text-sm my-1 md:my-2">
                  <p className="flex items-center gap-1 md:gap-2">
                    <FaBed className="text-blue-500" /> {data.bed}
                  </p>
                  <p className="flex items-center gap-1 md:gap-2">
                    <FaCar className="text-blue-500" /> {data.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 md:right-[-2.5rem] top-1/3 transform -translate-y-1/2 bg-blue-500 text-white shadow-md p-2 rounded-full z-2 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-blue-600 cursor-pointer"
        >
          <FaArrowRight className="text-sm md:text-xl" />
        </button>
      </div>
    </div>
  );
};



export default PremiumListing;
