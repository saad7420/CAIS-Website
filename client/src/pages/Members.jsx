import React from "react";
import "../styles/Members.css"; // Make sure this path matches your project structure

export default function Members() {
  return (
    <div className="members-container">
      <h2 className="section-title">Our Team Members</h2>
      <p className="section-subtitle">Meet the minds behind CAIS-COMSATS.</p>

      <div className="members-grid">
        {[1, 2, 3].map((member) => (
          <div key={member} className="member-card">
            <img
              src={`https://source.unsplash.com/300x200/?person,ai,${member}`}
              alt={`Member ${member}`}
              className="member-img"
            />
            <div className="member-info">
              <h3>Member {member}</h3>
              <p>Role: AI Enthusiast</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
