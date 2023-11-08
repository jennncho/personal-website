import Navbar from "./Navbar";
import RoutesList from "./RoutesList";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./CSS/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="not-nav">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
