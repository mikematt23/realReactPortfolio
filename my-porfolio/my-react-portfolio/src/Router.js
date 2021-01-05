import React from 'react'
import Home from "./components/Home/Home.js"
import Resume from "./components/resume/Resume.js"
import { Switch,Route  } from 'react-router'


let Router = ()=>{
  return(
    <Switch>
     <Route path ='/' exact component ={Home} />
     <Route path = '/Resume' component ={Resume}/>
   </Switch>
  )
}

export default Router

