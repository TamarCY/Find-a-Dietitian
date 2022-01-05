import React from "react";
import "./Search.css";
import logo from "../../Assets/Images/logo.png";
import MultipleSelectChip from "../../Components/MultipleSelectCheckmarks/MultipleSelectChip";
import LanguageSelect from "../../Components/LanguageSelect/LanguageSelect";
import ClinicSelect from "../../Components/ClinicSelect/ClinicSelect";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
    const [dietExpertise, setDietExpertise] = useState([]);
    const [language, setLanguage] = useState([]);
    const [hmo, setHmo] = useState("");
    const [area, setArea] = useState("");
    // TODO: change to one state object? and one function for all

    const handleExpertiseChange = (e) => {
        setDietExpertise(e.target.value)
    };

    const handleLanguagesChange = (e) => {
        setLanguage(e.target.value);
    };


    const handleAreaChange = (e) => {
        setArea(e.target.value)
    }

    const handleHmoChange = (e) => {
        setHmo(e.target.value)
    }


    return (
        <div className="Search-container">
            <Link to="/" >
                <div className="Search-logo search">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <MultipleSelectChip
                className="search"
                dietExpertise={dietExpertise}
                handleExpertiseChange={handleExpertiseChange}
            />
            <LanguageSelect
                language={language}
                handleLanguagesChange={handleLanguagesChange}
            />
            <ClinicSelect
                className="search"
                hmo={hmo}
                area={area}
                handleHmoChange={handleHmoChange}
                handleAreaChange={handleAreaChange}
            />
            <div className="Search-input">
                <Link to="/results">
                    <div className="Search-button"
                    variant="contained" color='success'
                    onClick={() => props.filterDietitians(
                        props.data, dietExpertise, language, hmo, area)}>חיפוש</div>
                </Link>
            </div>

        </div>
    )
}


export default Search;