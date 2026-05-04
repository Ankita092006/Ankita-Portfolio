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

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project">
          <a href="https://spotify-pje8.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={project1} alt="RhythmBox" className="project-img" />
          </a>
          <h3>RhythmBox</h3>
          <p>
            A music playlist application that lets users create, manage, and explore songs.
          </p>
          <p><b>Technology:</b> HTML5, CSS3, JS</p>
          <a href="https://spotify-pje8.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <a href="https://reactjs-zszu.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={project2} alt="Pulsepy" className="project-img" />
          </a>
          <h3>Pulsepy</h3>
          <p>
            A Python-based gamified learning platform.
          </p>
          <p><b>Technology:</b> HTML5, CSS3, JS, Node.js, Firebase</p>
          <a href="https://reactjs-zszu.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <a href="https://amazonclone-lac-ten.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={project3} alt="Amazon Clone" className="project-img" />
          </a>
          <h3>Amazon Clone Website</h3>
          <p>
            Amazon UI clone using HTML and CSS.
          </p>
          <p><b>Technology:</b> HTML5, CSS3</p>
          <a href="https://amazonclone-lac-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>

        {/* Project 4 */}
        <div className="project">
          <a href="https://tictactoe-57ps.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={project4} alt="Tic Tac Toe" className="project-img" />
          </a>
          <h3>Tic Tac Toe</h3>
          <p>
            Two-player game using JavaScript.
          </p>
          <p><b>Technology:</b> HTML5, CSS3, JS</p>
          <a href="https://tictactoe-57ps.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>

        {/* Project 5 */}
        <div className="project">
          <a href="https://snake-game-tp2d.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={project5} alt="Snake Game" className="project-img" />
          </a>
          <h3>Snake Game</h3>
          <p>
            Snake game with food and collision logic.
          </p>
          <p><b>Technology:</b> HTML5, CSS3, JS</p>
          <a href="https://snake-game-tp2d.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>

      </div>

    </div>
  );
}

export default Projects;