import projects from "../../Projects.json"
import {Link} from 'react-router-dom'
import "./Projects.css"
import {useState} from "react"

let Projects = ()=>{
  const [disclamer,setDiscalmer] = useState("This Is Hosted On Huroku so the links may take 5 t0 10 seconds")
  return(
    <div className = "holder">
     <div className = "container">
      <div className = "disclamer">
        <p>{disclamer}</p>
       <div className = "buttonHolder">
        <Link to = '/'>
          <button >Home</button>
        </Link>
       <Link to = "/resume">
         <button >Resume</button>
       </Link>
       </div>
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