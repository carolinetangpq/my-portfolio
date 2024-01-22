import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Update from "./Update";

const Create = () => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const TitleChange = (e) => {
    setTitle(e.target.value);
  };

  const BodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    /* prevent refreshing */
    e.preventDefault();
    const project = { title, body, date }; /* project object */
    setIsPending(true);
    setSubmitMsg("Project added!\nRedirecting back to home page");
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      setProjects([...projects, project]);
      console.log("New project added ");
      setIsPending(false);
      setTimeout(() => navigate("/"), 1000);
    });
  };

  return (
    <div className="create">
      <h2 className="project-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label className="title">
          <b>Title:</b>
        </label>
        <textarea
          type="text"
          required
          value={title}
          onChange={TitleChange}
        ></textarea>

        <label>
          <b>Project:</b>
        </label>
        <textarea
          type="text"
          required
          value={body}
          onChange={BodyChange}
        ></textarea>
        <br />
        {!isPending && <button className="add-project">Add Project</button>}
        {isPending && <button disabled>Adding project...</button>}
        <div className="success">{submitMsg} </div>
      </form>
    </div>
  );
};

export default Create;
