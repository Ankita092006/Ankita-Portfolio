import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Projects() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>My Projects</h1>

      {/* Project 1 */}
      <div style={{ marginTop: "20px" }}>
        <img src={project1} alt="RhythmBox" width="300" />
        <h3>RhythmBox</h3>
        <p>
          A music playlist application that lets users create, manage, and explore songs using Spotify features.
        </p>
        <p><b>Technology:</b> HTML5, CSS3, JS</p>
         <a 
    href="https://spotify-pje8.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>
      </div>

      {/* Project 2 */}
      <div style={{ marginTop: "20px" }}>
        <img src={project2} alt="Pulsepy" width="300" />
        <h3>Pulsepy</h3>
        <p>
          A Python-based gamified platform that uses points and levels to make learning interactive.
        </p>
        <p><b>Technology:</b> HTML5, CSS3, JS, Node.js, Firebase</p>
         <a 
    href="https://reactjs-zszu.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>

      </div>

      {/* Project 3 */}
      <div style={{ marginTop: "20px" }}>
        <img src={project3} alt="Amazon Clone" width="300" />
        <h3>Amazon Clone Website</h3>
        <p>
          This is a simple Amazon clone website built using HTML and CSS.
        </p>
        <p><b>Technology:</b> HTML5, CSS3</p>
         <a 
    href="https://amazonclone-lac-ten.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>
      </div>

      {/* Project 4 */}
      <div style={{ marginTop: "20px" }}>
        <img src={project4} alt="Tic Tac Toe" width="300" />
        <h3>Tic Tac Toe</h3>
        <p>
          A simple game built using HTML, CSS, and JavaScript.
        </p>
        <p><b>Technology:</b> HTML5, CSS3, JS</p>
         <a 
    href="https://tictactoe-57ps.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>
      </div>

      {/* Project 5 */}
      <div style={{ marginTop: "20px" }}>
        <img src={project5} alt="Snake Game" width="300" />
        <h3>Snake Game</h3>
        <p>
          A game where the snake collects food and grows while avoiding collisions.
        </p>
        <p><b>Technology:</b> HTML5, CSS3, JS</p>
         <a 
    href="https://snake-game-tp2d.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>
      </div>

    </div>
  );
}

export default Projects;