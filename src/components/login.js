import React from 'react'

import './login.css';




const Login = () => {

  
  return (

    
      <div className="logincontainer">
        
          <div className="desc_login">

                  
                  
                  <div className="desc">
                   
                      <h1 className="head">Sign in to Travelguru 

          
                        
                      </h1>
                      <h4>Don't have an account?</h4>
                      <div class="line"></div>
                      
                      <h4>Sign up</h4>

                      


                  </div>
                 
                  <div className="login">
                      
                          <form className="loginform">
                              
                              
                              <input type="text" className="input" placeholder="Name"/>
                              
                          
                              <input type="email" className="input" placeholder="Email"/>
                              
                              
                              <input type="password" className="input" placeholder="password"/>
                              <br/>

                              <button className="login_btn">Continue</button>
                              <div class="line"></div>  

                              
                              

                              

                          </form>
                          
                  
                  </div>
                  <div className="or">-OR-</div>
          </div>  
          
    </div>

  )
}





   

export default Login 