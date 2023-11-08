import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CSS/style.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="exp">
        <div className="Projects">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.eisenberg.com/upload/images/eisenberg/11/952_BANNER-CATEGORIE-BESOIN-1170X500PX-LG_ENG.jpeg"
            />
            <Card.Body>
              <Card.Title>BeautyBots</Card.Title>
              <Card.Text>
                A health and beauty e-commerce site, with full range of
                guest/auth user functionalities
              </Card.Text>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="/SpineifySS.png" fluid />
            <Card.Body>
              <Card.Title>Spineify</Card.Title>
              <Card.Text>
                Ergonomic posture tracking desktop application with data
                visualization and game component
              </Card.Text>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
