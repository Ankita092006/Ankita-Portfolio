import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";   

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">My Portfolio</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

        {/*  CV BUTTON */}
        <a 
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          Download CV
        </a>
      </div>

    </nav>
  );
}

export default Navbar;