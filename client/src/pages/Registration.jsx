import { useState } from "react";
import axios from "axios";
import "../styles/Registration.css";

export default function Registration() {
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
    <div className="registration-container">
      <h2>CAIS Registration Form</h2>
      <p>Join us in shaping the future of Artificial Intelligence at COMSATS.</p>

      {status && <div className="form-status">{status}</div>}

      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Registration Number
          <input
            type="text"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Why do you want to join?
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
