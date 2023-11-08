//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./CSS/style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div>
          <div className="Nav-name">
            <Link to="#home" smooth>
              Jenny Cho
            </Link>
          </div>
          <div className="Nav-title">Developer</div>
        </div>
        <ul className="Navlist">
          <li className="Navlist-elem">
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li className="Navlist-elem">
            <Link to="#projects" smooth>
              Projects
            </Link>
          </li>
          <li className="Navlist-elem">
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
