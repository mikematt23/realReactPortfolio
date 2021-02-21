import {Link} from 'react-router-dom'

let Resume = ()=>{
  return(
    <div className = "holder">
    <div className = "container">
      <div className = "buttonHolder">
        <h1>resume</h1>
        <Link to = "/projects">
          <button>Projects</button>
        </Link>

        <Link to = "/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Resume