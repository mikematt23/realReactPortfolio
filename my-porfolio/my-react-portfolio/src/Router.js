import React from 'react'
import Home from "./components/Home/Home.js"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import { Switch,Route  } from 'react-router'


let Router = ()=>{
  return(
    <Switch>
     <Route path ='/' exact component ={Home} />
     <Route path = '/projects' component = {Projects}/>
     <Route path = '/resume' component = {Resume}/>
   </Switch>
  )
}

export default Router

