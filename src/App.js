import Navbar from "./Navbar";
import RoutesList from "./RoutesList";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <RoutesList /> */}
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
