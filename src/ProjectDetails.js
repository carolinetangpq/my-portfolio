import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import formatDate from "./formatDate";

import Create from "./Create";
const ProjectDetails = () => {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch("http://localhost:5000/projects/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:5000/projects/" + project.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="project-details">
      {isPending && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <h2
            onChange={(e) => {
              Create.setTitle(e.target.value);
            }}
          >
            {project.title}
          </h2>
          <div>{project.body}</div>
          <div>Posted on: {formatDate(project.date)}</div>
          <button onClick={handleClick}>Delete</button>
          <button>
            <Link to={`/update/${project.id}`}>Edit</Link>
          </button>
        </article>
      )}
    </div>
  );
};

export default ProjectDetails;
