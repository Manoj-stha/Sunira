import React, { useRef } from "react";
import { FaPlus, FaBed, FaCar, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import first from "../../../assets/Real estate/first.png";

const TopListing = () => {
  const scrollRef = useRef(null);

  // Function to scroll left and right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of container width
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-16 max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col gap-10">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <header className="font-semibold text-xl md:text-2xl">Top Listing</header>
        <p className="flex items-center gap-2 hover:underline cursor-pointer text-sm md:text-base">
          <FaPlus /> <span>View all listings</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-blue-500 text-white shadow-md p-2 md:p-3 rounded-full z-2 flex justify-center items-center hover:bg-blue-600"
        >
          <FaArrowLeft className="text-lg md:text-xl" />
        </button>

        {/* Scrollable Cards Wrapper */}
        <div ref={scrollRef} className="overflow-x-scroll scroll-smooth whitespace-nowrap flex gap-4 no-scrollbar py-5">
          {listingData.map((data, index) => (
            <div key={index} className="w-72 md:w-80 lg:w-96 rounded-lg shadow-lg relative flex-shrink-0">
              {/* Image */}
              <img src={data.img} className="rounded-lg w-full h-48 md:h-56 object-cover" alt={data.title} />

              {/* Black Overlay with Gradient */}
              <div className="absolute bottom-[8rem] w-full h-20 bg-gradient-to-t from-black to-transparent text-white px-5 py-2 rounded-b-lg">
                <h3 className="text-lg md:text-xl font-semibold uppercase">{data.title}</h3>
                <h3 className="text-sm flex items-center gap-1">
                  <IoLocationSharp className="text-lg" />
                  {data.location}
                </h3>
              </div>

              {/* Property Details */}
              <div className="px-5 py-3 bg-white">
                <p className="text-sm"><span className="italic">Posted on</span> {data.date}</p>
                <h4 className="text-sm md:text-base">Land: {data.land}</h4>
                <h4 className="font-semibold text-xl md:text-2xl text-orange-500">{data.price}</h4>
                <div className="flex gap-6 text-sm my-2">
                  <p className="flex items-center gap-2">
                    <FaBed className="text-blue-500" /> {data.bed}
                  </p>
                  <p className="flex items-center gap-2">
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
          className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-blue-500 shadow-md text-white p-2 md:p-3 rounded-full z-2 flex justify-center items-center hover:bg-blue-600"
        >
          <FaArrowRight className="text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
};

// Listing Data
const listingData = [
    {
  img: third,
  title: "Guide for buying house and land in kathmandu",
  
  date: "2081/05/06",
  desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
},
{
    img: third,
    title: "Guide for buying house and land in kathmandu",
    
    date: "2081/05/06",
    desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
  },
  {
    img: third,
    title: "Guide for buying house and land in kathmandu",
    
    date: "2081/05/06",
    desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
  },
  {
    img: third,
    title: "Guide for buying house and land in kathmandu",
    
    date: "2081/05/06",
    desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
  },
  {
    img: third,
    title: "Guide for buying house and land in kathmandu",
    
    date: "2081/05/06",
    desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
  },
  {
    img: third,
    title: "Guide for buying house and land in kathmandu",
    
    date: "2081/05/06",
    desc:"Comprehensive guide to buying houses and land in kathmandu in 2024 kathmandu, Nepal's vibrant capital..."
  },

];

export default TopListing;