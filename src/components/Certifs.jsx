import React from 'react'
import python from "../assets/python.png";
import pyess1 from "../assets/pyess1.png";
import pyess2 from "../assets/pyess2.png";
import ccna1 from "../assets/CCNA1.png";
import ccna2 from "../assets/CCNA2.png";
import csintro from "../assets/cs-intro.png";
const Certifs = () => {
  return (
    <div className='certifs'>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={python} alt="certif-python" />
          </div>
        <h3>IT Specialist - Python</h3>
      </div>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={pyess1} alt="certif-python-essantial-1" />
          </div>
        <h3>Python Essentials 1</h3>
      </div>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={pyess2} alt="certif-python-essantial-2" />
          </div>
        <h3>Python Essentials 2</h3>
      </div>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={ccna1} alt="CCNA1" />
          </div>
        <h3>CCNA: Introduction to Networks</h3>
      </div>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={ccna2} alt="CCNA2" />
          </div>
        <h3>CCNA: Switching, Routing, and Wireless Essentials</h3>
      </div>
      <div className="certif_box">
          <div className="innerCertifImg">
           <img src={csintro} alt="cybersecurity-intro" />
          </div>
        <h3>Introduction to Cybersecurity</h3>
      </div>
    </div>
  )
}

export default Certifs
