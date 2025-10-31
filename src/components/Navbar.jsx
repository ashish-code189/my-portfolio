import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Ashish<span>Kushwaha</span></h1>

        <div className="menu-icon" onClick={handleToggle}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={open ? "nav-menu active" : "nav-menu"}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>

          {/* 🌐 Social Icons */}
          <li className="social-icons">
            <a
              href="https://github.com/ashish-code189"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kushwaha-3a1726235"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
