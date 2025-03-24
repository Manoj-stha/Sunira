import React from "react";
import Navbar from "../../Component/Navbar";
import group from "../../assets/group.jpg";
import About from "./About";
import Whatweprovide from "./whatweprovide";
import SemiFooter from "../../Component/SemiFooter";
import Footer from "../../Component/Footer";
import Testimonials from "../../Component/Testimonials";
import MeetOurTeam from "../../Component/MeetOurTeam";
import Faq from "../../Component/Global/Faq";
import GoToTop from "../../Component/Common/GoToTop";
import SocialMediaBox from "../../Component/Common/SocialMediaBox";
const Mediation = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[50rem] bg-amber-600 overflow-hidden">
        <img src={group} className="object-cover w-full h-full" />
      </div>
      <About/>
      <GoToTop/>
      <SocialMediaBox/>
      <Whatweprovide/>
      <MeetOurTeam/>
      <Testimonials/>
      <SemiFooter/>
      <Faq/>
      <Footer/>
      <footer className="fixed bottom-0 left-0 w-full  bg-gradient-to-r from-[#131F38] to-[#101828ea] text-white text-center py-2 "></footer>
    </div>
  );
};

export default Mediation;
