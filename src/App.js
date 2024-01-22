import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Project from "./Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import ProjectDetails from "./ProjectDetails";
import Update from "./Update";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/projects/:id" element={<ProjectDetails />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
