import React from 'react';
import { FcGoogle} from 'react-icons/fc';
import './icons.css';
import {FaApple,FaFacebookSquare} from 'react-icons/fa';





const Icons = () => {
  return (

    <div className="iconContainer">

        
        <div className="icons">
  
            <button className="googlebtn"><h4><FcGoogle />Sign up with Google</h4></button>
            <button className="socialbtn"><h4><FaApple /></h4></button>
            <button className="socialbtn"><h4><FaFacebookSquare /></h4></button>

        </div>
    </div>

  )
}


export default Icons;