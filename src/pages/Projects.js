import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      
      <h1>My Projects</h1>

      {/* Project 1 */}
      <div style={{ marginTop: "20px" }}>
        <h3>RhythmBox</h3>
        <p>
          A music playlist application that lets users create, manage, and explore songs using Spotify features.
        </p>
        <p><b>Technology:</b> HTML5,CSS3,JS</p>
      </div>

      {/* Project 2 */}
      <div style={{ marginTop: "20px" }}>
        <h3>Pulsepy</h3>
        <p>
          A Python-based gamified platform that uses points and levels to make learning interactive.
        </p>
        <p><b>Technology:</b>HTML5,CSS3,JS,NODE.JS,DB FIREBASE</p>
      </div>

      
    

    </div>
  );
}

export default Projects;