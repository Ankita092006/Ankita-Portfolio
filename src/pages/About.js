import React from "react";

function About() {
  return (
    <div style={{ padding: "40px" }}>
      
      <h1>About Me</h1>

      {/* Introduction */}
      <p>
        Hello! I'm Ankita, an Information Technology student passionate about 
        web development and creating modern user-friendly websites.
      </p>

      {/* Education */}
      <h2>Education</h2>
      <p>
        B.Tech in Information Technology (or your course name)
      </p>

      {/* Skills */}
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C Programming</li>
      </ul>

      {/* Goal */}
      <h2>Career Goal</h2>
      <p>
        I aim to become a skilled frontend developer and work on real-world
        projects that solve problems.
      </p>

    </div>
  );
}

export default About;