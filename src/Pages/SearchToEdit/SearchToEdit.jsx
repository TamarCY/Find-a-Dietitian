import React from "react";
import "./SearchToEdit.css";
import logo from "../../Assets/Images/logo.png"
import InputSearch from "../../Components/InputSearch/InputSearch";

const  SearchToEdit = () =>{
    const handleSearch = () => {
        
    }
    return (
        <div className="SearchToEdit-container">
           <InputSearch handleSearch={handleSearch}/>
        </div>
    )
}


export default SearchToEdit;

