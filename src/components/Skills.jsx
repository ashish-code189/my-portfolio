import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Here are some of the technologies and tools I use to bring ideas to life 🚀
      </p>

      <div className="skills-container">
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">ReactJS</div>
        <div className="skill-card">NodeJS</div>
        <div className="skill-card">ExpressJS</div>
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">Tailwind CSS</div>
        <div className="skill-card">Bootstrap</div>
        <div className="skill-card">Google Sheets</div>
        <div className="skill-card">Google Docs</div>
        <div className="skill-card">Google Slides</div>
        <div className="skill-card">MS Word</div>
        <div className="skill-card">MS Excel</div>
        <div className="skill-card">MS PowerPoint</div>
      </div>
    </section>
  );
};

export default Skills;
