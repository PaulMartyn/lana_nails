import React from "react";
import "./Navbar.css"; // optional but recommended

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero"><h3 className="logo">LANA's STUDIO</h3></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
