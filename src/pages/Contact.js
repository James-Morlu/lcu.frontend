import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded

const Contact = () => {
  const president = {
    name: "Dr. Isaac P. Podah",
    position: "President & CEO/Lofa County University",
    contact: "isaacpodah@yahoo.com",
    image: "/images/lcupre.jpg",
  };

  const administrators = [
    { name: "Mr. Augustine M. Ngafua", position: "Acting Vice President for Academic Affairs", contact: "amngafua@gmail.com", image: "/images/an.jpg" },
    { name: "Mr. Danwolo B.S Catakaw Sr.", position: "Vice President for Administration", contact: "danwolo1966@gmail.com", image: "/images/dc.jpg" },
    { name: "Dr. Washington Kezelee", position: "Associate Vice President for Research", contact: "anesthetist15@gmail.com", image: "/images/kezele.jpg" },
    { name: "Madam Dormawah K. Johnson", position: "Dean for Students' Affairs", contact: "domowahjohnson71@gmail.com", image: "/images/df.jpg" },
    { name: "Mr. Joseph Kanneh", position: " Acting Comptroller", contact: "laurawilson@example.com", image: "/images/jkk.jpg" },
    { name: "Mr. John Lake", position: "Acting Human Resources Director", contact: "johnlake1980@gmail.com.com", image: "/images/rl.jpg" },
    { name: "Mr. Raphael K. Siafa", position: "Dean of Admission", contact: "rsiafa317@gmail.com", image: "/images/rs.jpg" },
    { name: "Mr. Momoh S. Taylor", position: "Dean/College of Business & Public Administration", contact: "momostaylor@gmail.com", image: "/images/momoh.jpg" },
    { name: "Mr. Paul L.S Nabieu", position: "Dean/College of Agriculture & Food Sciences", contact: "laminnabieu12@gmail.com", image: "/images/pn.jpg" },
    { name: "Mr. Mulbah J. Dolo", position: "Dean/College of Teachers' Education", contact: "jameslee@example.com", image: "/images/md.jpg" },
    { name: "Yankoi K. Suborzu", position: "Dean/College of Social Sciences & Humanities", contact: "oliviascott@example.com", image: "/images/ys.jpg" },
    { name: "Madam Oral T. Siakor", position: "Dean/College of Health Sciences", contact: "oliviascott@example.com", image: "/images/oral.jpg" },
    { name: "Mr. Wainright J.Koiwood", position: "Dean/College of Engineering Science & Technology", contact: "wainrighkoiwood752@gmail.com", image: "/images/wk.jpg" },
    { name: "Mr. J. Fayiah Momon", position: "Maintainence Director", contact: "fayiahmomoh@gmail.com", image: "/images/fm.jpg" },
    { name: "Mr. Joseph M. Koilor", position: "Director of Testing & Evaluation", contact: "joseph1962koilor@gmail.com", image: "/images/jk.jpg" },
    { name: "Mr. A. Kaifa Dunor Sr.", position: "Director of Records & Registration", contact: "akdunorsr99@gmail.com", image: "/images/kd.jpg" },
    { name: "Mr. James K. Yanquoi", position: "Director of Library", contact: "jameskyanquoi114@gmail.com", image: "/images/jy.jpg" },
    { name: "Mr. Tarnue K. Johnson", position: "Director of Procurement", contact: "tarnuekjohnsom84@gmail.com", image: "/images/tj.jpg" },
  ];

  return (
    <div className="container mt-4 bg-info text-white">
      {/* President's Card */}
      <div 
        className="card shadow-lg border-primary mb-4 text-center mx-auto" 
        style={{ maxWidth: "350px", minHeight: "350px", backgroundColor: "gray", color: "#ffffff" }}
      >
        <img 
          src={president.image} 
          className="card-img-top mx-auto" 
          alt={president.name} 
          style={{ 
            width: "180px", 
            height: "180px", 
            objectFit: "cover",  
            objectPosition: "top", 
            borderRadius: "50%", 
            marginTop: "10px" 
          }} 
        />
        <div className="card-body" style={{ padding: "10px" }}>
          <h5 className="card-title">{president.name}</h5>
          <p className="card-text"><strong>{president.position}</strong></p>
          <p className="card-text"><strong>Contact:</strong> {president.contact}</p>
        </div>
      </div>

      <h2 className="text-center mb-4">Our Administrators</h2>
      <div className="row">
        {administrators.map((admin, index) => (
          <div key={index} className="col-md-4 mb-3"> {/* 3 per row on medium+ screens */}
            <div className="card shadow-sm" style={{ minHeight: "350px", backgroundColor: "gray", color: "#ffffff" }}>
              <img 
                src={admin.image} 
                className="card-img-top" 
                alt={admin.name} 
                style={{ 
                  width: "100%", 
                  height: "220px",  
                  objectFit: "cover", 
                  objectPosition: "top", 
                  borderRadius: "30%"  
                }} 
              />
              <div className="card-body text-center" style={{ padding: "10px" }}>
                <h6 className="card-title">{admin.name}</h6>
                <p className="card-text" style={{ fontSize: "0.9rem" }}>{admin.position}</p>
                <p className="card-text" style={{ fontSize: "0.9rem" }}>
                  <strong>Contact:</strong> {admin.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
