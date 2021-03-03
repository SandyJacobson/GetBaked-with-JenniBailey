/* eslint-disable jsx-quotes */
import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="links">
        <NavLink className="link" to="/login" href="#">Login</NavLink>
        <NavLink className="link" to="/register" href="#">Sign Up</NavLink>
      </div>
    </div>
  )
}

export default Nav
