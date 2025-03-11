import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    qualification: "",
    contact: "",
    email: "",
    nationality: "",
    address: "",
    file: null,
  });

  const [password, setPassword] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [error, setError] = useState("");

  const predefinedPassword = "lcu.admin.321";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post("http://localhost:5000/upload", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(response.data.message);
      setFormData({
        fullName: "",
        gender: "",
        qualification: "",
        contact: "",
        email: "",
        nationality: "",
        address: "",
        file: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending data.");
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (password === predefinedPassword) {
      setIsAdminAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const toggleFormVisibility = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="container mt-5 bg-success text-white">
      <h2 className="text-center mb-4">Job Application</h2>

      {!isAdminAuthenticated ? (
        <form onSubmit={handleAdminLogin} className="card p-4 shadow bg-info">
          <div className="mb-3">
            <label className="form-label fw-bold fs-5">Enter Admin Password to Control Form</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter admin password"
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      ) : (
        <div className="card p-4 shadow bg-info">
          <h3 className="text-center">Admin Control Panel</h3>

          <button
            className="btn btn-danger w-100 mb-3"
            onClick={toggleFormVisibility}
          >
            {formOpen ? "Close Application Form" : "Open Application Form"}
          </button>

          {formOpen && (
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Highest Qualification</label>
                <select
                  className="form-select"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your highest qualification</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Associate">Associate</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="Enter your contact number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  placeholder="Enter your nationality"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Full Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full address"
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold fs-5">Upload your CV and associated documents</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit Application
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
