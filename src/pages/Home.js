import React from "react";

function Home() {
  return (
    <div className="px-3" style={{ backgroundColor: "purple", minHeight: "100vh", padding: "20px", color: "white" }}>
      <h4 className="text-center">Welcome to Lofa County University (LCU) – A Place of Excellence & Innovation!</h4>

      {/* Left-aligned paragraph */}
      <div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
        <p>
          At <strong>Lofa County University (LCU)</strong>, we are shaping the future through
          <strong> quality education, innovation, and leadership</strong>. Under the visionary leadership
          of <strong>Dr. Isaac P. Podah, President & CEO</strong>, LCU is committed to empowering students
          with <strong>knowledge, skills, and opportunities</strong> to excel in a rapidly changing world.
        </p>
      </div>

      {/* President's Image (Reduced Width) */}
      <div className="d-flex justify-content-center">
        <img
          src="/images/aud.jpg"
          alt="LCU AUD"
          className="img-fluid rounded mb-3 animate-pop reduced-width"
        />
      </div>

      {/* Encouraging Statement for Admin & Staff */}
      <div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
        <h4 className="mt-4">"Great institutions are built by great minds and dedicated leaders!"</h4>
        <p>
          At LCU, our Administration and Academic Staff are the driving force behind our students’ success.
          With passion, dedication, and expertise, they inspire and guide the next generation of leaders and innovators.
        </p>
      </div>

      {/* Administration and Academic Staff Image (Default Width) */}
      <div className="d-flex justify-content-center">
        <img
          src="/images/lcugra2.jpg"
          alt="Administration and Academic Staff"
          className="img-fluid rounded mb-3 animate-pop"
        />
      </div>

    {/* Statement About Our Graduates */}
<div className="text-start mx-auto" style={{ maxWidth: "800px" }}>
  <h4 className="mt-4">Empowered to Lead, Inspired to Transform!</h4>
  <p>
    At <strong>Lofa County University (LCU)</strong>, we take immense pride in our graduates who emerge as
    <strong> leaders, innovators, and change-makers</strong> in their respective fields. Equipped with 
    <strong> knowledge, skills, and real-world experience</strong>, they are making meaningful contributions to 
    society, driving progress, and upholding the values of excellence, integrity, and service. 
    <strong> LCU graduates are the embodiment of our commitment to education, empowerment, and a brighter future for all.</strong>
  </p>
</div>

{/* Graduates Image */}
<div className="d-flex justify-content-center">
  <img
    src="/images/lcugra1.jpg"
    alt="LCU Graduates"
    className="img-fluid rounded mb-3 animate-pop reduced-width"
  />
</div>

      <h1 className="text-center">Administrative Building</h1>
      <div className="d-flex justify-content-center">
        <img
          src="/images/admb1.jpg"
          alt="LCU Admin Building 1"
          className="img-fluid rounded mb-3 animate-pop reduced-width"
        />
      </div>

      <h1 className="text-center">Front View of the Administrative Building</h1>
      <div className="d-flex justify-content-center">
        <img
          src="/images/admb2.jpg"
          alt="LCU Admin Building 2"
          className="img-fluid rounded mb-3 animate-pop reduced-width"
        />
      </div>
      <h1 className="text-center">College of Nursing & Health Sciences Building</h1> <br >
      </br>
      <div className="d-flex justify-content-center">
        <img
          src="/images/health2.jpg"
          alt="LCU Health Department"
          className="img-fluid rounded mb-3 animate-pop reduced-width"
        />
      </div>

      {/* Global CSS for Smooth Animation and Reduced Width */}
      <style>
        {`
          @keyframes popEffect {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.9; }
          }

          .animate-pop {
            animation: popEffect 2.5s infinite ease-in-out;
          }

          .reduced-width {
            max-width: 60%; /* Adjust the width to match second and third images */
          }
        `}
      </style>
    </div>
  );
}

export default Home;
