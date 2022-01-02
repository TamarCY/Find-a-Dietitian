import React from "react";

import "./Home.css";
import logo from "../../Assets/Images/logo.png"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="Home-container">
            <img className="Home-logo" src={logo} alt="logo" />
            <Link className="Home-button" to="/search"> 
               חיפוש
            </Link>
            <Link className="Home-button" to="/add"> 
               הוספה
            </Link>
            <Link className="Home-button" to="/toEdit"> 
               עריכה
            </Link>
            
        </div>
    )
}


export default Home;