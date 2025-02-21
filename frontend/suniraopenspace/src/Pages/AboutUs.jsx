import React from "react";
import { Line } from "rc-progress";
import Navbar from "../Component/Navbar";
import forAbout from "../assets/forAbout.jpg";
import Footer from "../Component/Footer";
import Faq from "../Component/Global/Faq";
import MeetOurTeam from "../Component/MeetOurTeam";
import Testimonials from "../Component/Testimonials";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="pt-16">
        <h2 className="text-4xl md:text-5xl flex justify-center font-bold text-gray-800">
          About Us
        </h2>
      </div>

      {/* Main Container */}
      <div className="px-10 md:px-20 lg:px-32 py-16 flex justify-center ">
        <div className="flex flex-col lg:flex-row gap-10 items-center  w-[80rem]">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 ">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Company Approach
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              At Advisol, we believe in a collaborative approach that focuses on understanding your unique business challenges and objectives. We work closely with you to develop tailored strategies and implement effective solutions that align with your vision and goals. Our holistic approach ensures that every aspect of your business is taken into consideration, from market analysis and financial planning to operational efficiency and talent management.
            </p>

            {/* Progress Bars */}
            <div className="flex flex-col gap-6 mt-8">
              {/* Legal Consulting */}
              <div>
                <div className="flex justify-between text-lg md:text-xl pb-2">
                  <h2 className="font-semibold">Legal Consulting</h2>
                  <p className="font-semibold">100%</p>
                </div>
                <Line percent={100} strokeWidth={2} strokeColor="#1B75BB" />
              </div>

              {/* Astrology Consultation */}
              <div>
                <div className="flex justify-between text-lg md:text-xl pb-2">
                  <h2 className="font-semibold">Astrology Consultation</h2>
                  <p className="font-semibold">98%</p>
                </div>
                <Line percent={98} strokeWidth={2} strokeColor="#1B75BB" />
              </div>

              {/* Real Estate Solutions */}
              <div>
                <div className="flex justify-between text-lg md:text-xl pb-2">
                  <h2 className="font-semibold">Real Estate Solutions</h2>
                  <p className="font-semibold">97%</p>
                </div>
                <Line percent={97} strokeWidth={2} strokeColor="#1B75BB" />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={forAbout}
              alt="About Us"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Testimonials />
      <MeetOurTeam />
      <Faq />
      <Footer />
    </div>
  );
};

export default AboutUs;
