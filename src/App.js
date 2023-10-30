import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import "./App.css"

import Home from "./components/Home";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import AboutUs from "./components/AboutUs";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <div className="">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
