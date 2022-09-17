import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"
import { Link, Router } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Nav-head'>
    <div className='Navbar'>
       
        <Logo/>
        <Router></Router>
        <ul>
        <Link style={{textDecoration: 'none'}} to='./'><li>Home</li></Link>
        <Link style={{textDecoration: 'none'}} to='./sermon'><li>Sermon</li></Link>
        <Link style={{textDecoration: 'none'}} to='./livestream'><li>Livestream</li></Link>
        </ul>
     
        
    </div>
    </div>
  )
}

export default Navbar