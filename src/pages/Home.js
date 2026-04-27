import React from "react";
import profile from "../assets/profile.jpeg";
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      {/* Your Name */}
      <h1>Hi, I'm Ankita 👋</h1>

      {/* Short Intro */}
      <h3>Frontend Developer | React Learner</h3>

      {/* Description */}
      <p style={{ maxWidth: "500px", margin: "20px auto" }}>
        I am a passionate Information Technology student who loves building
        modern and responsive websites using React, JavaScript, and CSS.
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <a href="/projects">
          <button style={{ marginRight: "10px" }}>View Projects</button>
        </a>

        <a href="/contact">
          <button>Contact Me</button>
        </a>
      </div>

    </div>
  );
}

export default Home;