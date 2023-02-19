import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav style={{backgroundColor: '#04AA6D', display:"flex", justifyContent:"space-around",padding:"10px",color:"White"}}>
        <Link to="" style={{fontSize: "1rem", color: "white"}}> Home</Link>
        <Link to="/student"style={{color:"white"}}> Student</Link>
        <Link to="/contact" style={{color:"white"}}>Contact</Link>

    </nav>
  )
}

export default Navbar