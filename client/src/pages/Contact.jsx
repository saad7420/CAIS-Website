import { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-submitted">
        <div className="submitted-box">
          <h2>Thank you!</h2>
          <p>Your message has been sent successfully.</p>
          <button onClick={() => setSubmitted(false)}>Send Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Feel free to reach out with any questions or ideas.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Our Office</h2>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Address:</strong><br />
            COMSATS University Islamabad<br />
            Computer Science Department<br />
            Islamabad, Pakistan
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong><br />
            cais@comsats.edu.pk<br />
            info@cais-society.org
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong><br />
            +92 51 9049 2000<br />
            +92 300 1234567
          </p>

          <p>
            <FontAwesomeIcon icon={faClock} /> <strong>Office Hours:</strong><br />
            Mon-Fri: 9:00 AM - 5:00 PM<br />
            Sat: 10:00 AM - 2:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
