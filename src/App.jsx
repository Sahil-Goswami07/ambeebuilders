import Home from "./Components/Home";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/ProjectPage/ProjectDetails";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"; // import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* <-- Add this here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
