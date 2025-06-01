import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <style>{`
        .notfound-container {
          text-align: center;
          padding: 5rem 2rem;
          background-color: #f8fafc;
          font-family: "Segoe UI", sans-serif;
        }

        .notfound-code {
          font-size: 6rem;
          color: #2c2e83;
          margin-bottom: 1rem;
        }

        .notfound-message {
          font-size: 1.25rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .notfound-button {
          display: inline-block;
          background-color: #facc15;
          color: #1f2937;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .notfound-button:hover {
          background-color: #fde047;
        }
      `}</style>

      <h1 className="notfound-code">404</h1>
      <p className="notfound-message">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="notfound-button">← Go to Home</Link>
    </div>
  );
}
