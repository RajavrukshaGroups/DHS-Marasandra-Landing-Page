import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/home/home";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
