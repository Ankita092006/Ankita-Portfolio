import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">

      <h1>Contact Me</h1>

      {/* Contact Info */}
      <div className="contact-info">
      <div className="contact-row">

        <p><FaEnvelope /> sasmalankita09@gmail.com</p>
        <p><FaPhone /> +91 9332695380</p>
        <p><FaMapMarkerAlt /> West Bengal, India</p>

      </div>
</div>
      {/* Social Links */}
      <div className="contact-social">

        <a href="https://github.com/Ankita092006" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/ankita-sasmal-792459376/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

      </div>

      {/* Contact Form */}
      <form className="contact-form">

        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Contact;