// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="text-center">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="CAIS Logo"
        className="mb-4"
        style={{ maxWidth: "150px" }}
      />

      {/* Vision & Mission */}
      <h2 className="text-primary">Vision</h2>
      <p>
        To promote AI education, research, and innovation at COMSATS University,
        empowering students to shape the future.
      </p>

      <h2 className="text-primary">Mission</h2>
      <p>
        Build a strong community passionate about Artificial Intelligence,
        providing opportunities for learning, collaboration, and impact.
      </p>

      {/* Objectives */}
      <h2 className="text-primary mt-5">Objectives</h2>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">💡 Organize workshops & seminars</li>
        <li className="list-group-item">🤖 AI project exhibitions</li>
        <li className="list-group-item">🧠 Research and collaboration</li>
        <li className="list-group-item">📚 Skill development sessions</li>
      </ul>

      {/* Description */}
      <p className="lead">
        The CAIS – COMSATS AI Society is a platform for students, researchers,
        and enthusiasts to explore the vast world of AI through events,
        research, and teamwork.
      </p>

      {/* Gallery Preview */}
      <div className="row mt-5">
        {[1, 2, 3, 4].map((img, i) => (
          <div key={i} className="col-md-3 mb-3">
            <img
              src={`https://source.unsplash.com/400x300/?technology,ai,${i}`}
              alt={`Gallery ${i}`}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
