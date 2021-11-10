import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li"><NavLink className="navbar_link" to="/">Home</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/about">About</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/machining">Machining</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="fabrication">Fabrication</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="assembly">Assembly</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="quality">Quality</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/contact">Contact</NavLink></li>
        {/* <li className="nav-li"><NavLink className="navbar_link" to="careers">Careers</NavLink></li> */}
        <NavLink to="/"><img src="https://i.ibb.co/bdLtn5S/Final-Transparent-Copy.png" style={{width: "8%", margin: "5px 10px 5px 0"}}  align="right"/></NavLink>
      </ul>
    </div>
  )
}

export default NavBar

