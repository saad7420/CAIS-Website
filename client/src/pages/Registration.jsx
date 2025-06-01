import React, { useState } from "react";
import "../styles/Registration.css";

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="registration-success">
        <div className="success-card">
          <div className="icon-circle">
            <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3>Registration Complete!</h3>
          <p>Thank you for registering with CAIS. We'll send you event details and updates soon.</p>
          <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
            Register for Another Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <h1>Event Registration</h1>
      <p>Register for upcoming AI workshops, seminars, and research sessions</p>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
          
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your.email@example.com" required />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select required>
            <option value="">Select your department</option>
            <option value="cs">Computer Science</option>
            <option value="se">Software Engineering</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="ds">Data Science</option>
            <option value="ee">Electrical Engineering</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Event Selection</label>
          <select required>
            <option value="">Choose an event</option>
            <option value="ai-workshop">AI Workshop Series</option>
            <option value="ml-seminar">Machine Learning Seminar</option>
            <option value="research-session">Research Presentation</option>
            <option value="industry-talk">Industry Expert Talk</option>
            <option value="hackathon">AI Hackathon</option>
          </select>
        </div>

        <div className="form-group">
          <label>Additional Information</label>
          <textarea placeholder="Tell us about your interests or experience in AI..." rows="4"></textarea>
        </div>

        <div className="form-check-inline">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
              I agree to the terms and conditions and consent to receive event updates
          </label>
        </div>

        <button type="submit" className="btn-primary">Register for Event</button>
      </form>
    </div>
  );
}
