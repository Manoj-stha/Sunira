import React from "react";
import hero from "../../../assets/Real estate/hero.png";

const Hero = () => {
  return (
    <div>
      {/* Image Section */}
      <div className="bg-red-500 w-full h-[80vh] flex justify-end relative">
        <img src={hero} className="w-full h-[80vh] object-cover" />
      </div>

      {/* Content Section */}
      <div
        className="w-[60vw] h-[80vh] bg-blue-900 absolute top-[6rem] sm:top-[6rem] md:top-[10rem] lg:top-[10rem] left-0 sm:left-0 md:left-[10%] lg:left-[20%] shadow-2xl z-2 flex justify-center items-center transition-all duration-500 rounded-md ease-in-out"
        style={{
          transform: "translateX(0%)",
        }}
      >
        <div className="flex flex-col items-center px-4">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white flex-wrap w-[40vw] lg:leading-[4.5rem] text-center uppercase ">
            The leading luxury Sunira real estate team in Nepal
          </h1>

          {/* Subtitle */}
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center w-[80vw] sm:w-[60vw] my-5">
            Find your dream home with Sunira Real Estate – trusted, reliable, and built for you!
          </h3>

          {/* Buttons */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 my-5">
            <button className="uppercase text-white font-semibold border py-3 sm:py-4 px-6 sm:px-8 bg-transparent transform skew-x-[-20deg] cursor-pointer hover:bg-gray-200 hover:text-blue-900">
              <span className="inline-block transform skew-x-[20deg] text-sm sm:text-lg md:text-xl">
                Get in touch
              </span>
            </button>
            <button className="uppercase text-white font-semibold border py-3 sm:py-4 px-6 sm:px-8 bg-transparent transform skew-x-[-20deg] cursor-pointer hover:bg-gray-200 hover:text-blue-900">
              <span className="inline-block transform skew-x-[20deg] text-sm sm:text-lg md:text-xl">
                Fair housing
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
