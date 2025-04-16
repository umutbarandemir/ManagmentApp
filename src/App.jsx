import { useState } from "react";
import Content from "./components/Content";
import NoProjectContent from "./components/NoProjectContent";
import SideBar from "./components/SideBar";
import "./index.css";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projects,setProjects] = useState({
    selectedProjectId:undefined,
    Projects:[]
  });

  function selectProject(id){
    setProjects(prevState => {
      return{
        ...prevState,
        selectedProjectId:id
      };
    });
  }

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

  function deleteProject(){
    setProjects(prevState => {
      return{
        ...prevState,
        selectedProjectId:undefined,
        Projects: prevState.Projects.filter((project)=>project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projects.Projects.find((project)=>(project.id === projects.selectedProjectId))

  let content = <SelectedProject project={selectedProject} delete={deleteProject}></SelectedProject>

  if (projects.selectedProjectId===null) {
    content = <Content addProject={addProject}  cancelProject={cancelButton}></Content>
  } else if(projects.selectedProjectId===undefined){
    content = <NoProjectContent addProject={startAddingProject}></NoProjectContent> 
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar addProject={startAddingProject} projects={projects.Projects} onSelectProject={selectProject}></SideBar>
      {content}
    </main>
  );
}

export default App;
