import { useState } from "react";
import Content from "./components/Content";
import NoProjectContent from "./components/NoProjectContent";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {

  const [projects,setProjects] = useState({
    selectedProjectId:undefined,
    Projects:[]
  });

  function startAddingProject(){
    setProjects(prevState => {
      return{
        ...prevState,
        selectedProjectId:null
      };
    });
  }

  function addProject(newProjectData){
    setProjects(prevState =>{
      
      const newProject = {
        ...newProjectData,
        id: Math.random()
      }

      return{
        ...prevState, Projects:[...prevState.Projects,newProject] , selectedProjectId:undefined
      }
    })
  }

  function cancelButton(){
    setProjects(prevState => {
      return{
        ...prevState,
        selectedProjectId:undefined
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar addProject={startAddingProject} projects={projects.Projects}></SideBar>
      {(projects.selectedProjectId===undefined) ? <NoProjectContent addProject={startAddingProject}></NoProjectContent> :<Content addProject={addProject}  cancelProject={cancelButton}></Content>}
    </main>
  );
}

export default App;
