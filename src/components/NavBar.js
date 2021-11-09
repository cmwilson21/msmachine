import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li"><NavLink className="navbar_link" to="/">Home</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/about">About</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/machining">Machinging</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="fabrication">Fabrication</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="assembly">Assembly</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="quality">Quality</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="/contact">Contact</NavLink></li>
        <li className="nav-li"><NavLink className="navbar_link" to="careers">Careers</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
