import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='Nav-head'>
    <div className='Navbar'>
       
        <Logo/>
        <ul>
         <a href='#home'><li>Home</li></a>
         <a href='#sermon'><li>Sermon</li></a>
         <a href='#livestream'><li>Livestream</li></a>
       
        </ul>
     
        
    </div>
    </div>
  )
}

export default Navbar