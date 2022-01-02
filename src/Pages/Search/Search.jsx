import React from "react";
import "./Search.css";
import logo from "../../Assets/Images/logo.png";
import MultipleSelectChip from "../../Components/MultipleSelectCheckmarks/MultipleSelectChip";
import LanguageSelect from "../../Components/LanguageSelect/LanguageSelect";
import ClinicSelect from "../../Components/ClinicSelect/ClinicSelect";
import { useState } from "react";
import { Button } from "@mui/material";

const Search = () => {
const [dietExpertise, setDietExpertise] = useState([]);
const [language, setLanguage] = useState([]);
const [hmo, setHmo] = useState("");
const [area, setArea] = useState("");
const [dietitian, setDietitian] = useState({})
// TODO: change to one state object and one function for all

const handleExpertiseChange = (event) => {
  const {
    target: { value },
  } = event;
  setDietExpertise(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
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
            <img className="Search-logo" src={logo} alt="logo" />
            <MultipleSelectChip
                dietExpertise={dietExpertise}
                handleExpertiseChange={handleExpertiseChange}
            />
            <LanguageSelect
                language={language}
                handleLanguagesChange={handleLanguagesChange}
            />
            <ClinicSelect
                hmo={hmo}
                area={area}
                handleHmoChange={handleHmoChange}
                handleAreaChange={handleAreaChange}
            />
        <Button variant="contained" color='success' onClick={()=>{console.log(language);}}>חיפוש</Button>
        </div>
    )
}


export default Search;