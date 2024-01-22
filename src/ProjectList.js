import { Link } from "react-router-dom";
import formatDate from "./formatDate";
const ProjectList = ({ projectProp, titleProp, handleDelete }) => {
  // Destructing {projectProp & titleProp}
  const projects = projectProp;
  //   const title = props.title;
  return (
    <div className="project-list">
      <h2>{titleProp}</h2>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h2>{project.title}</h2>
            <p>{project.body}</p>
            <p>Posted on: {formatDate(project.date)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
