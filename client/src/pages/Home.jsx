import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faBullseye, faGraduationCap, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

const Button = ({ className, children }) => (
  <button className={className}>{children}</button>
);

const Card = ({ children }) => <div className="card">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;

const ImageCarousel = ({ images }) => (
  <div className="carousel">
    {images.map((img, idx) => (
      <div key={idx} className="carousel-slide">
        <img src={img.src} alt={img.alt} />
        <div className="carousel-caption">
          <h3>{img.title}</h3>
          <p>{img.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default function Home() {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600",
      alt: "Students Collaboration",
      title: "AI Workshop Series",
      description: "Hands-on collaboration sessions for AI learning",
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=600",
      alt: "Tech Conference",
      title: "Industry Expert Talks",
      description: "Learning from leading AI professionals",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600",
      alt: "AI Research Lab",
      title: "Research Laboratory",
      description: "Cutting-edge AI research facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=600",
      alt: "Programming Workspace",
      title: "Coding Sessions",
      description: "Collaborative programming environments",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Welcome to <span>CAIS</span>
            </h1>
            <p className="tagline">COMSATS Artificial Intelligence Society</p>
            <p className="description">
              Empowering the next generation of AI innovators through
              cutting-edge research, collaborative projects, and industry
              partnerships.
            </p>
            <div className="hero-buttons">
              <Button className="primary-btn">Join CAIS</Button>
              <Button className="secondary-btn">Learn More</Button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
              alt="AI Technology Workspace"
            />
          </div>
        </div>
      </section>

      <section className="foundation">
        <h2>Our Foundation</h2>
        <p className="subheading">
          Driving innovation in artificial intelligence through education,
          research, and community building.
        </p>
        <div className="foundation-cards">
          <Card>
            <CardContent>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBinoculars} />
              </div>
              <h3>Vision</h3>
              <p>
                To be the leading AI society that fosters innovation, research
                excellence, and ethical AI development while bridging the gap
                between academia and industry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3>Mission</h3>
              <p>
                To provide students with hands-on AI experience through
                workshops, research projects, and industry collaborations while
                promoting responsible AI practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3>Objectives</h3>
              <ul>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Foster AI research culture</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Industry partnerships</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Skill development programs</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ethical AI advocacy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="events">
        <h2>Event Highlights</h2>
        <p>
          Capturing moments from our AI workshops, conferences, and
          collaborative sessions.
        </p>
        <ImageCarousel images={carouselImages} />
      </section>
    </div>
  );
}
