import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h2 className='logo'> <NavLink to="/"> <span className='logo-tag'>&lt;</span> A <span className='logo-tag'>/&gt;</span> </NavLink></h2>
        <ul>
          <li> <NavLink to="/">Home</NavLink> </li>
          <li> <NavLink to="/about">About</NavLink> </li>
          <li> <NavLink to="/project">Project</NavLink> </li>
          <li> <NavLink to="/experience">Experience</NavLink> </li>
          <li> <NavLink to="/contact">Contact</NavLink> </li>
        </ul>
      </nav>
    <Outlet />
    </>
  )
}

export default Navbar