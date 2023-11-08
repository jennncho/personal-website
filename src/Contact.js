import "./CSS/style.css";
import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <section id="contact">
      <div className="Contact">
        <div className="Contact-title">Connect with me!</div>
        <Image src="/headshot4.png" width={250} height={250} roundedCircle />
        <ul>
          <li>
            <a href="mailto:chojenny112@gmail.com">
              <FontAwesomeIcon icon={faAt} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jenny-yeaeun-cho/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jennncho"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
