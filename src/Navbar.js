import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h2 className="Nav-name">
        <Link to="/home">Jenny Cho</Link>
      </h2>

      <ul className="Navlist">
        <li className="Navlist-elem">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="Navlist-elem">
          <Link to="/info">Info</Link>
        </li>
        <li className="Navlist-elem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
