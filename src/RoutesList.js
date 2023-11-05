import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Projects from "./Projects";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
export default RoutesList;
