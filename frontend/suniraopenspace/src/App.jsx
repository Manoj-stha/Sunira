import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Component/Testimonials";
import Login from "./Component/Common/Login/Login";
import Register from "./Component/Common/Register";
import LoginAndRegister from "../src/Component/Common/Login/LoginPage/LoginAndRegister"
import ContactUs from "./Component/Global/ContactUs"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAndRegister/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mediation" element={<Mediation/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
