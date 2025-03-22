import React from "react";
import astrology from "../../../assets/Astrology service/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div>
        <img
          src={astrology}
          className="w-full h-[90vh] object-cover"
          alt="Astrology Consultation"
        />
      </div>

      {/* Main Heading */}
      <div className="absolute top-[10%] w-full flex justify-center text-center px-4">
        <div className="text-gray-100 flex flex-col gap-5">
          <header className="font-bold text-4xl md:text-5xl lg:text-6xl">
            Astrology Consultation
          </header>
          <p className="text-sm md:text-xl italic">A Platform for astrology guidance</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="absolute top-[48%] w-full px-5 md:px-16 lg:px-32 text-gray-100">
        <div className="max-w-4xl mx-[5rem] text-center md:text-left">
          <header className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-snug">
            Welcome to our Astrology Consultation platform
          </header>
          <p className="text-base md:text-lg mt-4">
            Here ancient wisdom meets modern guidance.
            <span className="block mt-2">
              Our services provide personalized astrology insights to help you make informed
              decisions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
