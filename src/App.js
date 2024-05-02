import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Mechanism from "./Components/Mechanism/Mechanism";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import DividerComponent from "./Components/Divider";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mechanism" element={<Mechanism />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
          <DividerComponent />
          <Mechanism />
          <DividerComponent />
          <Partners />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
