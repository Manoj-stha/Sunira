import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Component/Testimonials";
import Login from "./Component/Common/Login/Login";
import Register from "./Component/Common/Register";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mediation" element={<Mediation/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
