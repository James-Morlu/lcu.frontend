import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container bg-dark">
        <Link className="navbar-brand bg-info text-dark" to="/" style={{ textTransform: "uppercase" }}>
          LCU-Websit
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-bold" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/colleges" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                Colleges
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admission" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/form" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                JobApplicationForm 
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Add custom CSS for hover effects */}
      <style jsx>{`
        .nav-link {
          color: #fff !important; /* Set text color to white */
          transition: all 0.3s ease; /* Smooth transition effect */
        }
        .nav-link:hover {
          color: #f8f9fa !important; /* Slightly lighter white on hover */
          text-decoration: underline; /* Underline text on hover */
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Add text shadow */
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
