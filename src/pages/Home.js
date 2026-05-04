import React from "react";
import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      {/* Profile Image */}
      <img 
        src={profile} 
        alt="profile"
        className="profile-img"
      />

      {/* Name */}
      <h1>Hi, I'm Ankita 👋</h1>

      {/* Intro */}
      <h3>Frontend Developer | React Learner</h3>

      {/* Description */}
      <p className="home-text">
        I am a passionate Information Technology student who loves building
        modern and responsive websites using React, JavaScript, and CSS.
      </p>

      {/* Buttons */}
      <div className="home-buttons">
        <a href="/projects">
          <button>View Projects</button>
        </a>

        <a href="/contact">
          <button>Contact Me</button>
        </a>
      </div>

      {/* 👇 Social Icons */}
      <div className="social-icons">

        {/* GitHub */}
        <a 
          href="https://github.com/Ankita092006" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={35} />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/ankita-sasmal-792459376/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={35} />
        </a>

      </div>

    </div>
  );
}

export default Home;