// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Colleges from "./pages/Colleges";
import Admission from "./pages/Admission";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="text-center bg-success text-light py-3">
                <h1>
                    Lofa County University (LCU)
                    <img 
                        src="/images/lculogo.jpg" 
                        alt="LCU-LOGO"
                        style={{ maxWidth: "100px", height: "100px", marginLeft: "15px" }} 
                    />
                </h1>
            </div>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/colleges" element={<Colleges />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admission" element={<Admission />} />
                    <Route path="/form" element={<Form />} />  {/* No need for the refresh prop anymore */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
