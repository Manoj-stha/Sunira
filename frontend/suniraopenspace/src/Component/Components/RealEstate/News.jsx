import React, { useRef } from "react";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import third from "../../../assets/Real estate/third.png";

const News = () => {
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
        <header className="font-semibold text-xl md:text-2xl">News and Updates</header>
        <p className="flex items-center gap-2 hover:underline cursor-pointer text-sm md:text-base">
          <FaPlus /> <span>View all news</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-[-3rem] top-1/3 transform -translate-y-1/2 bg-blue-500 text-white shadow-md p-2 rounded-full z-10 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-blue-600"
        >
          <FaArrowLeft className="text-lg md:text-xl" />
        </button>

        {/* Scrollable Cards Wrapper */}
        <div ref={scrollRef} className="overflow-x-scroll scroll-smooth whitespace-nowrap flex gap-4 no-scrollbar py-5">
          {listingData.map((data, index) => (
            <div key={index} className="w-72 md:w-[25rem] rounded-lg shadow-lg relative flex-shrink-0 bg-white">
              {/* Image */}
              <img src={data.img} className="rounded-t-lg w-full h-40 md:h-56 object-cover" alt={data.title} />
              
              {/* News Details */}
              <div className="px-4 py-3 flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-wrap  h-14">{data.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 "><span className="italic">Posted on</span> {data.date}</p>
                <p className="text-sm md:text-base text-wrap h-16 ">{data.desc}</p>
                <div className="mt-3 mb-2">
                  <button className="bg-blue-500 text-white font-semibold px-3 py-2 md:px-4 md:py-3 rounded-md hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 md:right-[-3rem] top-1/3 transform -translate-y-1/2 bg-blue-500 shadow-md text-white p-2 rounded-full z-10 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center hover:bg-blue-600"
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
    title: "Guide for buying house and land in Kathmandu",
    date: "2081/05/06",
    desc: "Comprehensive guide to buying houses and land in Kathmandu in 2024, Nepal's vibrant capital..."
  },
  {
    img: third,
    title: "Real estate market trends in 2024",
    date: "2081/05/10",
    desc: "An analysis of the latest real estate trends in Nepal and how they might impact future investments..."
  },
  {
    img: third,
    title: "Things to consider before buying land",
    date: "2081/05/12",
    desc: "Key factors you need to evaluate before making a land purchase decision..."
  },
  {
    img: third,
    title: "Home loan process simplified",
    date: "2081/05/14",
    desc: "A step-by-step guide on how to apply for a home loan in Nepal with minimal hassle..."
  }, {
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

export default News;