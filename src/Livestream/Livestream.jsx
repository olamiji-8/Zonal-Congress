import React from 'react'
import "./Livestream.css"
import Live from "../Assets/Live.png"

const Livestream = () => {
  return (
    <div id='livestream'>
        <h1 className='heading'>Live Stream</h1>
                
        <h3 className='sub-head'>To join us in the service, you can click on the radio button. </h3>
        <div className='radio'>  
        <a href='https://bit.ly/3xs8KWa'><img src={Live} alt='' width="80px"/></a>
        </div>

       
       

    </div>
  )
}

export default Livestream