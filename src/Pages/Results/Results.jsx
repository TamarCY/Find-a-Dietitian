import React from "react";
import "./Results.css";
import logo from "../../Assets/Images/logo.png"
import DietitianCard from "../../Components/DietitianCard/DietitianCard";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom"

// TODO: deal with errors when page refreshed

const Results = ({ searchResults }) => {
    if (searchResults.length === 0) {
        return <div className="Results-none">
            <Link to="/" >
                <div className="Results-logo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div>
                אין תוצאות מתאימות לחיפוש
            </div>
            <div className="Results-new">
            <Link to="/search">
                חיפוש חדש
            </Link>
            </div>
        </div>
    }
    const renderCards = () => {
        return searchResults.map((item) => { return (<div key={item.id} className="Results-card" ><DietitianCard data={item} isEditMode={false} /></div>) })
    }

    if (!searchResults) return <div></div>;
    return (
        <>
            <Link to="/" >
                <div className="Results-logo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className="Results-container">
                {renderCards()}
            </div>
        </>
    )
}

// TODO: fix the code DRY


export default Results;