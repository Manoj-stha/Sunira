import React from "react";
import Navbar from "../Navbar";
import Hero from "../Components/Astrology/Hero";
import AstrologyService from "../Components/Astrology/AstrologyService";
import ContactUs from "../Components/Astrology/ContactUs";

import Faq from "../Components/Astrology/Faq";
import Footer from "../Footer";
import GoToTop from "../Common/GoToTop";
import SocialMediaBox from "../Common/SocialMediaBox";

const Astrology = () => {
  return (
    <div>
      <Navbar />
      <GoToTop/>
      <SocialMediaBox/>
      <Hero />
      <AstrologyService />
      <ContactUs />
      <Faq />
      <Footer />
    </div>
  );
};

export default Astrology;
