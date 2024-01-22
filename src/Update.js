import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: "",
    body: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects/" + id)
      .then((res) => {
        setValues((values) => ({
          ...values,
          title: res.data.title,
          body: res.data.body,
          date: new Date(),
        }));
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/projects/" + id, values)
      .then((res) => {
        setMessage("Project updated!");
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <h2 className="project-title">Update Project</h2>
      <form onSubmit={handleUpdate}>
        <label className="title">
          <b>Title:</b>
        </label>
        <textarea
          type="text"
          required
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        ></textarea>
        <label>
          <b>Project:</b>
        </label>
        <textarea
          type="text"
          required
          value={values.body}
          onChange={(e) => setValues({ ...values, body: e.target.value })}
        ></textarea>
        <br />
        {<button className="update-project">Update Project</button>}
        <div className="success">{message} </div>
      </form>
    </div>
  );
};

export default Update;
