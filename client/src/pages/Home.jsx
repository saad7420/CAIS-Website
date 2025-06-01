import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Welcome to <span>CAIS</span>
            </h1>
            <p>COMSATS Artificial Intelligence Society</p>
            <p>
              Empowering the next generation of AI innovators through cutting-edge
              research, collaborative projects, and industry partnerships.
              Join us in shaping the future of artificial intelligence.
            </p>
            <div className="hero-buttons">
              <a href="/registration" className="btn-yellow">
                Join CAIS
              </a>
              <a href="/members" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="AI Technology Workspace"
            />
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="foundation-section">
        <h2>Our Foundation</h2>
        <p>
          Driving innovation in artificial intelligence through education,
          research, and community building
        </p>
        <div className="foundation-grid">
          <div className="foundation-card">
            <div className="foundation-icon">👁️</div>
            <h3>Vision</h3>
            <p>
              To be the leading AI society that fosters innovation, research
              excellence, and ethical AI development while bridging the gap
              between academia and industry.
            </p>
          </div>
          <div className="foundation-card">
            <div className="foundation-icon">🎯</div>
            <h3>Mission</h3>
            <p>
              To provide students with hands-on AI experience through
              workshops, research projects, and industry collaborations while
              promoting responsible AI practices.
            </p>
          </div>
          <div className="foundation-card">
            <div className="foundation-icon">🎯</div>
            <h3>Objectives</h3>
            <ul>
              <li>Foster AI research culture</li>
              <li>Industry partnerships</li>
              <li>Skill development programs</li>
              <li>Ethical AI advocacy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="carousel-section">
        <h2>Event Highlights</h2>
        <p>
          Capturing moments from our AI workshops, conferences, and
          collaborative sessions
        </p>
        {/* Replace this with your actual carousel implementation */}
        <div style={{ height: "300px", backgroundColor: "#ccc" }}>
          [Image Carousel Placeholder]
        </div>
      </section>
    </div>
  );
}
