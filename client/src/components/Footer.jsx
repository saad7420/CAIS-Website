import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-logo">
          <img src="" alt="CAIS Logo" />
          <p>
            CAIS – COMSATS Artificial Intelligence Society is committed to advancing AI knowledge
            and fostering innovation among students and researchers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/members">Members</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt className="icon" /> COMSATS University, Lahore</p>
          <p><FaPhoneAlt className="icon" /> +92-321-1234567</p>
          <p><FaEnvelope className="icon" /> cais@comsats.edu.pk</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} CAIS - COMSATS AI Society. All rights reserved.
      </div>
    </footer>
  );
}
