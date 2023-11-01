import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </div>
  );
};

export default RoutesList;
