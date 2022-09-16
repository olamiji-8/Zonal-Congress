import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Nav-head'>
    <div className='Navbar'>
        <Logo/>
        <ul>
            <li>Home</li>
            <li>Sermon</li>
            <li>Livestream</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar