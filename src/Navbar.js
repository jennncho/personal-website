//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./CSS/style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div>
          <div className="Nav-name">
            <Link to="#home">Jenny Cho</Link>
          </div>
          <div className="Nav-title">Developer</div>
        </div>
        <ul className="Navlist">
          <li className="Navlist-elem">
            <Link to="#about">About</Link>
          </li>
          <li className="Navlist-elem">
            <Link to="#projects">Projects</Link>
          </li>
          <li className="Navlist-elem">
            <Link to="#more">More</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
