import React from 'react';
import './Navbar.css';

function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Student Monitoring System</div>
        <div>
          <ul className="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Students Monitoring system</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu-links">
            <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#About" onClick={toggleMenu}>About</a></li>
            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
