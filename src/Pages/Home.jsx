import Chooseus from "../Component/Chooseus";
import Footer from "../Component/Footer";
import { Hero } from "../Component/Hero";
import Navbar from "../Component/Navbar";
import SemiFooter from "../Component/SemiFooter";
import Services from "../Component/Services";
import Testimonials from "../Component/Testimonials";
import { Whatsapp } from "../Component/Whatssapp";

const Home = () => {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <Hero />
      <Services />
      <Chooseus />
      <Testimonials />
      <SemiFooter />
      <Footer />
    </>
  );
};

export default Home;
