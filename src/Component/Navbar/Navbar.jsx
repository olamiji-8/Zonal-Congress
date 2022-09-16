import React from 'react'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div>
        <Logo/>
        <ul>
            <li>Home</li>
            <li>Sermon</li>
            <li>Livestream</li>
        </ul>
    </div>
  )
}

export default Navbar