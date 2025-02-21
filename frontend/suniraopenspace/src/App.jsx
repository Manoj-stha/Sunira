import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Component/Testimonials";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mediation" element={<Mediation/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
