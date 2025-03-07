import React from 'react'
import SideBar from './SideBar'

const Contact = () => {
  return (
    <div className='contact'>
      <SideBar /> 
      <div className='contact_holder'>
        <div className='wlc'>
        <h1>Hello.</h1>
        <p>Feel free to reach out for any inquiries or collaborations. I'm always happy to connect! Get in touch</p>
        </div>
        <div className='contact_down'>
          <p>Email: <a href="">achraf.sakkarouis@polytechnicien.tn</a></p>
          <p>On the internet:
            <ul>
              <li><a href="https://www.linkedin.com/in/sakka-rouis-achraf-918678244/">LinkedIn</a> /</li>
              <li><a href="https://github.com/AchrafSR24">Github</a> /</li>
              <li><a href="https://www.kaggle.com/achrafsakkarouis">Kaggle</a></li>
            </ul>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
