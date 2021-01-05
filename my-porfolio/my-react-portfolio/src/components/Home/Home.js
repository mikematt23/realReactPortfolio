import {useState} from "react"

let Home = ()=>{
  const [isClicked,setClicked] = useState(false)
  const toggle = ()=>{
     setClicked(!isClicked)
  }
  if(isClicked){
    return(
      <div>
        <h1>Welcome!</h1>
        <h2>Hello I am Michael A web developer below are some of my projects</h2>
        <button onClick = {toggle}>Projects</button>
        <button>Resume</button>
      </div>
    )
  } else{
    return(
      <div>
        <h1>false</h1>
        <button onClick = {toggle}>Projects</button>
      </div>
    )
  }
}

export default Home