import React from 'react'
import "./Logo.css"
import {BrowserRouter as Router,Link,} from 'react-router-dom';

const Logo = () => {
  return (
   
    <div className='Logo'>
         <Router>
        <Link style={{textDecoration: 'none'}} to='./'>Zonal Congress 2022</Link>
        </Router>
        </div>
  )
}

export default Logo