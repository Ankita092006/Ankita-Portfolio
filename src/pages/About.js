import React from "react";
import profile from "../assets/profile.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaCode,
  FaUser,
  FaProjectDiagram,
  FaBook,
  FaBullseye
} from "react-icons/fa";

function About() {
  return (
    <div className="about-container">

      <div className="about-card">

        {/* LEFT SIDE */}
        <div className="about-left">
          <img src={profile} alt="profile" className="about-img" />
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* 👤 WHO I AM */}
          <h2><FaUser /> Who I Am</h2>
          <p className="about-text">
            I am an enthusiastic Information Technology student passionate about 
            building modern and responsive web applications using React and JavaScript.
          </p>

          {/* 💻 SKILLS */}
          <h2><FaCode /> Skills</h2>
          <div className="skills">
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><FaJs /> JavaScript</span>
            <span><FaReact /> React.js</span>
            <span><FaCode /> C Programming</span>
            <span><FaGithub /> GitHub</span>
          </div>

         

          {/* 📚 CURRENTLY LEARNING */}
          <h2><FaBook /> Currently Learning</h2>
          <p>
            I am currently learning advanced React concepts and backend development 
            to improve my full stack development skills.
          </p>

          {/* 🎯 GOAL */}
          <h2><FaBullseye /> Career Goal</h2>
          <p>
            My goal is to become a skilled Full Stack Developer and build impactful 
            real-world projects.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;