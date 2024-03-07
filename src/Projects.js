import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CSS/style.css";

const projectList = [
  {
    title: "BeautyBots",
    description:
      "A health and beauty e-commerce site, with full range of guest/auth user functionalities",
    // image: "https://www.eisenberg.com/upload/images/eisenberg/11/952_BANNER-CATEGORIE-BESOIN-1170X500PX-LG_ENG.jpeg",
    github: "https://github.com/BeautyBots/BeautyBots-ECommerce-Website?tab=readme-ov-file"
  },
  {
    title: "Spineify",
    description:
      "Ergonomic posture tracking desktop application with data visualization and game component",
    // image: "/SpineifySS.png",
    github: "https://github.com/Spineify/Spineify-capstone"
  },
  {
    title: "Project Clean",
    description:
      "Website for small cleaning business",
    // image: "/SpineifySS.png",
    github: "https://github.com/Ace-cleaning/project-clean"
  }
]

const Projects = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="Projects">
        {projectList.map((project) => (
          <Card key={project.title}>
            {/* <Card.Img variant="top" src={project.image} /> */}
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="dark" href={project.github} target="_blank">
                GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
