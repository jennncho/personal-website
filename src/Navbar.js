import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div>
          <div className="Nav-name">
            <Link to="/">Jenny Cho</Link>
          </div>
          <div className="Nav-title">Developer</div>
        </div>
        <ul className="Navlist">
          <li className="Navlist-elem">
            <Link to="projects">Projects</Link>
          </li>
          <li className="Navlist-elem">
            <Link to="info">Info</Link>
          </li>
          <li className="Navlist-elem">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
