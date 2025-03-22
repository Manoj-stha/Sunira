import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "./AstrologyService.css";
const AstrologyService = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[18rem] md:px-auto py-[5rem] gap-10">
      <div className="flex flex-col items-center gap-5">
        <header className="text-5xl font-semibold">Astrology Services</header>
        <p className="w-[51vw] text-center text-xl">
          Our expert astrologers analyze celestial movements to provide deep
          insights into your life. We offer the following services:
        </p>
      </div>

      {/* service cards layout */}
      <div className="flex flex-wrap gap-5  w-[60vw] justify-center">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-[308px] h-[274px] gap-2 flex flex-col  shadow-md rounded-lg overflow-hidden px-6 py-4"
            id="card"
          >
            <div>
              <h3 className="text-2xl ">{service.title}</h3>
              <h3 className="text-xl">{service.nepali_title} </h3>
            </div>
            <h2 className="text-sm">Package Cost</h2>
            <div className="flex gap-4 text-xl">
              <h3 className="font-semibold">{service.price}</h3>
              <h3 className="line-through font-semibold">
                {service.past_price}
              </h3>
            </div>
            <p>{service.description}</p>
            <div className=" bg-orange-400 py-2 w-[9rem] mt-1 rounded-4xl flex justify-center  text-white hover:bg-blue-500 cursor-pointer">

            <button className="flex items-center gap-2 cursor-pointer">Learn More <FaArrowRight/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// service data
const servicesData = [
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
  {
    title: "Birth Chart Writing",
    nepali_title: "( चिना लेखन् )",
    past_price: "Rs.750",
    price: "Rs.500",
    description:
      "A detailed birth chart based on your date, time, and place of birth.",
  },
];

export default AstrologyService;
