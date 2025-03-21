import React from "react";
import astrology from "../../../assets/Astrology service/hero.png";
const Hero = () => {
  return (
    <div>
      <div>
        <img src={astrology} className="w-full h-[90vh] " />
      </div>
      <div className="flex flex-col items-center absolute top-[10rem] left-[43rem]">
        <header className="text-gray-100 font-bold text-[3rem] ">Astrology Consultation</header>
        <p className="text-gray-100 italic">A Platform for astrology guidance</p>
      </div>
      <div className=" w-[40rem] flex flex-col absolute top-[50vh] left-[16rem] text-gray-100 gap-5">
        <header className="w-[40rem] font-semibold text-[3rem] leading-14 ">Welcome to our Astrology Consultation platform</header>
        <p className="w-[30rem] text-[1rem] mx-2 flex flex-col">Here ancient wisdom meets modern guidance.
            <span>
        Our services provide personalized astrology insights to help you make informed decisions.</span></p>
      </div>
    </div>
  );
};

export default Hero;
