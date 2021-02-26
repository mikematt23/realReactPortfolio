import projects from "../../Projects.json"
import {Link} from 'react-router-dom'
import "./Projects.css"

let Projects = ()=>{
  return(
    <div className = "holder">
     <div className = "container">
      <div className = "buttonHolder">
        <Link to = '/'>
          <button >Home</button>
        </Link>
        
       <Link to = "/resume">
         <button >Resume</button>
       </Link>
      </div>
      <div className = "projectHolder">
        {projects.map((project, id) => (
          <div className = "projectContainer">
            <p className = "projectTitle">{project.ProjectName}</p>
            <p>{project.Description}</p>
            <a href = {project.Link}>See Project</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects