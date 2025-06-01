import { useState } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { value: "all", label: "All Events" },
    { value: "workshops", label: "Workshops" },
    { value: "seminars", label: "Seminars" },
    { value: "competitions", label: "Competitions" },
    { value: "social", label: "Social Events" },
  ];

  const defaultGalleryImages = [
    {
      id: 1,
      title: "AI Workshop Series",
      description: "Hands-on machine learning session",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "workshops",
      eventDate: new Date("2024-12-01"),
      createdAt: new Date("2024-12-01"),
    },
    {
      id: 2,
      title: "Industry Expert Talk",
      description: "AI in healthcare applications",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "seminars",
      eventDate: new Date("2024-11-28"),
      createdAt: new Date("2024-11-28"),
    },
    {
      id: 3,
      title: "AI Hackathon 2024",
      description: "48-hour coding challenge",
      imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "competitions",
      eventDate: new Date("2024-11-20"),
      createdAt: new Date("2024-11-20"),
    },
    {
      id: 4,
      title: "Deep Learning Workshop",
      description: "Neural network implementation",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "workshops",
      eventDate: new Date("2024-11-15"),
      createdAt: new Date("2024-11-15"),
    },
    {
      id: 5,
      title: "Lab Tour & Demo",
      description: "Advanced AI research facilities",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "seminars",
      eventDate: new Date("2024-11-10"),
      createdAt: new Date("2024-11-10"),
    },
    {
      id: 6,
      title: "Team Building Event",
      description: "CAIS annual retreat",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "social",
      eventDate: new Date("2024-11-05"),
      createdAt: new Date("2024-11-05"),
    },
    {
      id: 7,
      title: "Research Presentation",
      description: "Student research showcase",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "seminars",
      eventDate: new Date("2024-10-30"),
      createdAt: new Date("2024-10-30"),
    },
    {
      id: 8,
      title: "Project Exhibition",
      description: "Final project demonstrations",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      category: "competitions",
      eventDate: new Date("2024-10-25"),
      createdAt: new Date("2024-10-25"),
    },
  ];

  const displayImages = defaultGalleryImages;
  const filteredImages = selectedCategory === "all"
    ? displayImages
    : displayImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Event Gallery</h1>
        <p>Capturing memorable moments from our AI workshops, seminars, and collaborative sessions</p>
      </div>

      <div className="gallery-categories">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`category-btn ${selectedCategory === category.value ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-card"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.imageUrl} 
              alt={image.title} 
              className="gallery-img"
            />
            <div className="gallery-content">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}

        {filteredImages.length === 0 && (
          <div className="no-posts">No images found in this category.</div>
        )}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-inner">
            <img 
              src={lightboxImage.imageUrl} 
              alt={lightboxImage.title} 
            />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div className="lightbox-caption">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
