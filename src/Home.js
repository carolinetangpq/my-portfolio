import ProjectList from "./ProjectList";
import useFetch from "./useFetch";
/* npx json-server --watch data/db.json --port 5000 */
const Home = () => {
  //const [projects, setProjects] = useState(null);
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:5000/projects");
  // const handleDelete = (id) => {
  //   /*do not edit the prop directly*/
  //   /*filter to store the new array, does not mutate the array*/
  //   const newProjects = projects.filter((project) => project.id !== id);
  //   setProjects(newProjects);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {projects && (
        <ProjectList
          projectProp={projects}
          titleProp="All projects"
          /*handleDelete={handleDelete}*/
        />
      )}
    </div>
  );
};

export default Home;
