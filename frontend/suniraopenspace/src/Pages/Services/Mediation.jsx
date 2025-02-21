import React from "react";
import Navbar from "../../Component/Navbar";
import group from "../../assets/group.jpg";
import About from "./About";
import Whatweprovide from "./whatweprovide";
import SemiFooter from "../../Component/SemiFooter";
import Footer from "../../Component/Footer";
import Testimonials from "../../Component/Testimonials";
import MeetOurTeam from "../../Component/MeetOurTeam";
const Mediation = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[50rem] bg-amber-600 overflow-hidden">
        <img src={group} className="object-cover w-full h-full" />
      </div>
      <About/>
      <Whatweprovide/>
      <MeetOurTeam/>
      <Testimonials/>
      <SemiFooter/>
      <Footer/>
    </div>
  );
};

export default Mediation;
