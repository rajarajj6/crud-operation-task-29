import React from 'react';
import { NavLink } from 'react-router-dom';
import "./components/header.css";


function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className={({ isActive }) => isActive ? "done" : "false"}>Table</NavLink>

      <NavLink to="/adduser" className={({ isActive }) => isActive ? "done" : "false"}>Adduser</NavLink>
    </div>
  )
}

export default Header;