import React from "react";

import "./Home.css";
import logo from "../../Assets/Images/logo.png"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="Home-container">
            <div className="Home-main">
                <div className="Home-logo-container">
                    <img className="Home-logo" src={logo} alt="logo" />
                </div>
                <div className="Home-buttons">
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
            </div>
        </div>
    )
}


export default Home;