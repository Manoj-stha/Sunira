import React from "react";
import hero from "../../../assets/Real estate/hero.png";
const Hero = () => {
  return (
    <div>
      <div className="bg-red-500 w-full h-[80vh] flex justify-end">
        <img src={hero} className="w- h-[80vh]" />
      </div>
        <div
          className="w-[60vw] h-[80vh] bg-blue-500 absolute top-[6rem] shadow-xl"
          style={{ clipPath: "polygon(0% 100%, 80% 100%, 100% 0, 0% 0)" }}
        ></div>
    </div>
  );
};

export default Hero;
