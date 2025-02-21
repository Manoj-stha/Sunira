import React from "react";
import mediation from "../../assets/med.svg";
import choose from "../../assets/choosemediation.svg";

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 pt-[8rem] pb-[5rem]">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">About Us</h1>
          <header className="text-3xl md:text-5xl font-bold my-4">
            Mediation & Reconciliation Services
          </header>
          <p className="text-lg max-w-2xl mx-auto lg:mx-0">
            At <span className="font-bold">Sunira</span>, we specialize in
            mediation and reconciliation services, offering a structured and
            peaceful alternative to traditional legal disputes. Our experienced
            team of certified mediators, legal advisors, and psychologists works
            to ensure fair and amicable solutions for individuals, businesses,
            and communities. We believe that conflicts do not have to end in
            court—they can be resolved through mutual understanding, guided by
            professional mediators who prioritize fairness, confidentiality, and
            long-term harmony.
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-[30rem] ">
          <img src={mediation} alt="Mediation Illustration" className="w-full h-auto md:w-2/3 lg:w-[30rem]" />
        </div>
      </div>

      {/* Why Choose Mediation Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center mt-[10rem]">
        <div className="w-full md:w-2/3 lg:w-[30rem]">
          <img src={choose} alt="Choose Mediation" className="w-full h-auto" />
        </div>
        <div className="text-center lg:text-left">
          <header className="text-3xl md:text-5xl font-bold my-4">
            Why Choose Mediation?
          </header>
          <p className="text-lg max-w-2xl mx-auto lg:mx-0">
            Mediation is a faster, cost-effective, and emotionally healthier
            alternative to traditional legal battles. Unlike court trials that
            often lead to winners and losers, mediation focuses on mutual
            understanding and fair settlements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
