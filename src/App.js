import Navbar from "./Navbar";
import RoutesList from "./RoutesList";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesList />
    </div>
  );
}

export default App;
