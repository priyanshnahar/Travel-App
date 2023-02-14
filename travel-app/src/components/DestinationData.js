import { Component } from "react";
import image1 from '../assets/10.jpg'
import image2 from '../assets/07.jpg' 
import image3 from '../assets/12.jpg'
import image4 from '../assets/13.jpg'
import "./Destination.css"

function DestinationData(props){
    return(
        <div className={props.className}>
          <div className="des-text">
            <h2>{props.heading}</h2>
            <p>
              {props.text}
            </p>
          </div>
          <div className="image">
            <img src={props.img1} alt="img" />
            <img src={props.img2} alt="img" />
          </div>
        </div>
    )
}

export default DestinationData;
   
