import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Nav=()=> {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Addres</Link>
        <Link to='/disp'>Dispres</Link>
      
    </nav>
  )
}

export default Nav