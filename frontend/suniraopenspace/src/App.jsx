import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Component/Testimonials";
import LoginAndRegister from "../src/Component/Common/Login/LoginPage/LoginAndRegister"
import ContactUs from "./Component/Global/ContactUs"
import Contact from "./Pages/Contact"
import Legal from "./Component/Services/Legal";

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
      </Routes>
    </Router>
    </>
  )
}

export default App
