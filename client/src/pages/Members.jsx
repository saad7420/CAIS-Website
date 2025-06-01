import React, { useState } from "react";
import "../styles/Members.css";

export default function Members() {
  const [selectedCategory, setSelectedCategory] = useState("Our Team");

  const categories = [
    { value: "Our Team", label: "Our Team" },
    { value: "Our Partners", label: "Our Partners" },
  ];

  const members = [1, 2, 3, 4, 5, 6];
  const partners = [7, 8, 9, 10, 11, 12];

  const displayedList =
    selectedCategory === "Our Team" ? members : partners;

  return (
    <div className="members-container">
      <h2 className="section-title">Our Team & Partners</h2>
      <p className="section-subtitle">Meet the minds and collaborators behind CAIS-COMSATS.</p>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`category-button ${
              selectedCategory === cat.value ? "active" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="members-grid">
        {displayedList.map((item) => (
          <div key={item} className="member-card">
            <img
              src={`https://source.unsplash.com/300x200/?person,ai,${item}`}
              alt={`Member ${item}`}
              className="member-img"
            />
            <div className="member-info">
              <h3>{selectedCategory === "Our Team" ? `Member ${item}` : `Partner ${item}`}</h3>
              <p>{selectedCategory === "Our Team" ? "Role: AI Enthusiast" : "Collaboration Partner"}</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
