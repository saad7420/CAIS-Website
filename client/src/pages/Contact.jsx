import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: send formData to backend API
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out with questions, feedback, or collaboration ideas.</p>

      {status && <div className="form-status">{status}</div>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Full Name
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email Address
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Your Message
          <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
