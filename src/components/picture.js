import React from 'react'
import lighttheme from'./img/light.jpg'
import './picture.css';


const picture = () => {

    return(

        <div className="picturecontainer">
            <img className="lighttheme" src={lighttheme} alt="ligh"></img>
        </div>

    )

}


export default picture;