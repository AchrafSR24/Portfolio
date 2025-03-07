import React from 'react'
import {
    Link
    } from "react-router-dom";
const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className="span1">
              <div className="span1Top">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          </div>
          <div className="span1Bottom">
            <p>&copy; / {new Date().getFullYear()}</p>
          </div>
          </div>

    </div>
  )
}

export default SideBar
