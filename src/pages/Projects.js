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

      
      {/* Project 3 */}
      <div style={{ marginTop: "20px" }}>
        <h3>Tic Tac Toe</h3>
        <p>
         This is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript, allowing two players to take turns and determine a winner based on game rules.
        </p>
        <p><b>Technology:</b> HTML5,CSS3,JS</p>
      </div>
  
      {/* Project 4 */}
      <div style={{ marginTop: "20px" }}>
        <h3>Snake Game</h3>
        <p>
          This is a simple Snake game built using HTML, CSS, and JavaScript, where the player controls a snake to collect food and grow while avoiding collisions.
        </p>
        <p><b>Technology:</b> HTML5,CSS3,JS</p>
      </div>
     {/* Project 5 */}
      <div style={{ marginTop: "20px" }}>
        <h3>Amazon Clone Website</h3>
        <p>
         This is a simple Amazon clone website built using HTML and CSS, displaying products with a basic user interface.
        </p>
        <p><b>Technology:</b> HTML5,CSS3</p>
      </div>
    

    </div>
  );
}

export default Projects;