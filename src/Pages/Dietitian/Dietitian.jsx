import React from "react";
import "./Dietitian.css";
import logo from "../../Assets/Images/logo.png"
import { useParams } from "react-router-dom";


const  Dietitian = () =>{
  const { id } = useParams();

    return (
        <div className="Dietitian-container">
          Dietitian
        </div>
    )
}


export default Dietitian;