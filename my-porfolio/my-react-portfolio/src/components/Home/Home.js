import {useState} from "react"
import "./Home.css"
import {Link} from 'react-router-dom'


let Home = ()=>{
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Dr+Sugiyama" />

    return(
      <div>
        <div className = "holder">
          <div className = "container">
            <div className = "Info">
              <h1 className = "ppp">Michael Matteis</h1>
              <div className = "contact">
                <h3>michaelcmatteis@gmail.com</h3>
                <h3>469-667-3624</h3>
              </div>
            </div>  
            <div className = "Nav">
              <h2>Web Devloper</h2>
              <div className = "buttonHolder">
                <Link to = "/projects">
                  <button >Projects</button>
                </Link>
                <Link to = "/resume">
                  <button >Resume</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
}

export default Home