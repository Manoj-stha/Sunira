import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mediation from "./Pages/Services/Mediation";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mediation" element={<Mediation/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
