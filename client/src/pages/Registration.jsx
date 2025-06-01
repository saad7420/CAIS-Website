import { useState } from "react";
import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNumber: "",
    phone: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust endpoint if needed
      const res = await axios.post("http://localhost:5000/api/registration", formData);
      if (res.data.success) {
        setStatus("✅ Registered successfully!");
        setFormData({ name: "", email: "", regNumber: "", phone: "", description: "" });
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (err) {
      setStatus("❌ Error submitting form.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">CAIS Registration Form</h2>

      {status && <div className="alert alert-info">{status}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Registration Number</label>
          <input
            type="text"
            name="regNumber"
            className="form-control"
            value={formData.regNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Why do you want to join?</label>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Registration;
