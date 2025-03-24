import React from "react";
import hero from "../../../assets/Real estate/hero.png";
const Hero = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-[80vh] flex justify-end">
        <img src={hero} className="w- h-[80vh]" />
      </div>
      <div
        className="w-[60vw] h-[80vh] bg-blue-900 absolute top-[6rem] shadow-2xl z-2 flex justify-center items-center"
        style={{ clipPath: "polygon(0% 100%, 80% 100%, 100% 0, 0% 0)" }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[4rem] font-bold text-white flex-wrap w-[40vw] leading-[4.5rem] text-center uppercase ">
            The leading luxuary Sunira real estate team in nepal
          </h1>
          <h3 className="text-lg text-white text-center w-[20vw] my-5 ">Find your dream home with Sunira Real Estate – trusted, reliable, and built for you!</h3>
          <div className="flex gap-10 my-5">
            <button className="uppercase text-white font-semibold border py-4 px-8 bg-transparent  transform skew-x-[-20deg] cursor-pointer hover:bg-gray-200 hover:text-blue-900"><span className="inline-block transform skew-x-[20deg] text-xl">Get in touch</span></button>
            <button className="uppercase text-white font-semibold border py-4 px-8 bg-transparent  transform skew-x-[-20deg] cursor-pointer hover:bg-gray-200 hover:text-blue-900"><span className="inline-block transform skew-x-[20deg] text-xl">fair housing</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
