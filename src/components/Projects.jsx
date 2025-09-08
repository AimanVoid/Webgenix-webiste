import React from "react";
import projects from "../data/projects";
import "../App.css";


const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>


    {/* <div className="text-center mt-8">
      <a
    href="https://github.com/AimanVoid"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
    View More Projects on GitHub
      </a>
  </div> */}
       

    </section>
  );
};

export default Projects;
