import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Portfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add new post</Link>
        <Link to="/project">Project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
