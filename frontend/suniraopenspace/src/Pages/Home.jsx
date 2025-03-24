import Chooseus from "../Component/Chooseus";
import Footer from "../Component/Footer";
import { Hero } from "../Component/Hero";
import Navbar from "../Component/Navbar";
import SemiFooter from "../Component/SemiFooter";
import Services from "../Component/Services";
import Testimonials from "../Component/Testimonials";
import { Whatsapp } from "../Component/Whatssapp";
import {Link } from "react-router-dom"
import Contact from "./Contact";
import GoToTop from "../Component/Common/GoToTop";
import SocialMediaBox from "../Component/Common/SocialMediaBox";


const Home = () => {
  return (
    <>
      <Navbar />
      <GoToTop/>
      <SocialMediaBox/>
      {/* <Whatsapp /> */}
      <Hero />
      <Services />
      <Chooseus />
      <Testimonials />
      
      <SemiFooter />
      <Footer />
      <footer className="fixed bottom-0 left-0 w-full  bg-gradient-to-r from-[#131F38] to-[#101828ea] text-white text-center py-2 "></footer>
    </>
  );
};

export default Home;
