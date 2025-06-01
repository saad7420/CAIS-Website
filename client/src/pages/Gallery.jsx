import React from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Event Gallery</h2>
      <p className="gallery-subtitle">Snapshots from our recent events.</p>

      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img} className="gallery-item">
            <img
              src={`https://source.unsplash.com/400x300/?ai,event,${img}`}
              alt={`Event ${img}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
