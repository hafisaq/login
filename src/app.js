import React from 'react'
import Login from './components/login'
import Picture from './components/picture'
import './app.css'
import Icons from './components/icons'
import Toggle from './components/switch'



export const App = () => {

  
  return (
    
    
     
        <div className="box">
            <container>
                <div className="toggle"><Toggle /></div>
                <div><Login /></div> 
                <div><Picture /></div>
                
                
                <div><Icons /></div>
                
            </container>
        </div>
       
    
  );
}








export default App