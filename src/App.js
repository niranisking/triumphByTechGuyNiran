import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/services/Services";
import ContactForm from "./components/Contact";
import PetroleumDelivery from "./components/services/PetroleumDelivery";
import CarDealership from "./components/services/CarDealership";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/services/petroleum-delivery"
            element={<PetroleumDelivery />}
          />
          <Route path="/services/car-dealership" element={<CarDealership />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
