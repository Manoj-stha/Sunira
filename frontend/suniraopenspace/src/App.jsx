import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Component/Testimonials";
import LoginAndRegister from "../src/Component/Common/Login/LoginPage/LoginAndRegister"
import ContactUs from "./Component/Global/ContactUs"
import Contact from "./Pages/Contact"
import Legal from "./Component/Services/Legal";
import Astrology from "./Component/Services/Astrology";
import RealEstate from "./Component/Services/RealEstate";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAndRegister/>}/>
        <Route path="/mediation" element={<Mediation/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/legal" element={<Legal/>}/>
        <Route path="/astrology" element={<Astrology/>}/>
        <Route path="/realestate" element={<RealEstate/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
