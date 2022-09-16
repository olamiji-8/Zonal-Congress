import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Zonal from "../Assets/zonal.jpeg";

const Home = () => {
  return (
    <div>
        <Navbar/>
       <img src={Zonal} alt='' width="100%"/>
    </div>
  )
}

export default Home