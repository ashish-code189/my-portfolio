import React from "react";
// import "./index.css"; // already included globally

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React and CSS.</p>
        </div>

        <div className="project">
          <h3>Contact Form App</h3>
          <p>Full stack app with Node.js backend and MongoDB database.</p>
        </div>

        <div className="project">
          <h3>E-Commerce Website</h3>
          <p>
            A modern E-Commerce platform built with ReactJS and Node.js, designed
            for smooth shopping experience and dynamic product management.
          </p>
        </div>
      </div>
    </section>
  );
}
