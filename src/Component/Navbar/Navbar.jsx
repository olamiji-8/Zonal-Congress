import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"
import {BrowserRouter as Router} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <div className='Nav-head' >
      
      <div className='Navbar'>
       
       <Logo/>
      <ul>
      <Router>
        <Link to="#home" > <li>Home</li></Link>
        <Link to="#sermon" smooth><li>Sermon</li></Link>
        <Link to="#livestream" smooth><li>Livestream</li></Link>
        </Router>
      </ul>
       
   </div>
      
      
    
    </div>
  )
}

export default Navbar