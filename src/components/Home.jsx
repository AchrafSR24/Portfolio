import React from 'react'
import {
Link
} from "react-router-dom";
const Home = () => {
  return (
    <div className='home'>
        <div className="span1">
        <div className="span1Top">
          <ul>
            <li><a href="https://www.linkedin.com/in/sakka-rouis-achraf-918678244/">LI</a></li>
            <li><a href="https://github.com/AchrafSR24">GH</a></li>
            <li><a href="https://www.kaggle.com/achrafsakkarouis">KL</a></li>
          </ul>
          </div>
          <div className="span1Bottom">
            <p>&copy; / {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="span2">
          <div className="nameHolder">
          <h4>achraf sakka rouis</h4>
          <p>Web developer | AI and Data Science Engineering Student.</p>
          </div>
        </div>
        <div className="span3">
          <ul>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/certifs"}>Certifs</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Home
