// App.js
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Mechanism from "./Components/Mechanism/Mechanism";
import Story from "./Components/Story/Story";
import Partners from "./Components/Partners/Partners";
import Recents from "./Components/Recents/Recents";
import Footer from "./Components/Footer/Footer";
import DividerComponent from "./Components/Divider";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
        <DividerComponent />
      </div>
      <div id="impact">
        <Mechanism />
        <DividerComponent />
      </div>
      <div id='recents'>
        <Recents />
        <DividerComponent />
      </div>
      <div id="story">
        <Story />
        <DividerComponent />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
