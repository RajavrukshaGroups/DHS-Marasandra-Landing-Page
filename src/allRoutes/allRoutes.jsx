import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/home/home";
import { Toaster } from "react-hot-toast";

const AllRoutes = () => {
  return (
    <Router>
      {/* Toast notifications for the entire app */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default AllRoutes;
