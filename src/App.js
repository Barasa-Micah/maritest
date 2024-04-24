import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Mechanism from "./Components/Mechanism/Mechanism";
import Partners from "./Components/Partners/Partners";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanism" element={<Mechanism />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
