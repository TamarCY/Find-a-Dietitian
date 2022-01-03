import React, { useState } from "react";
import "./SearchToEdit.css";
import logo from "../../Assets/Images/logo.png"
import InputSearch from "../../Components/InputSearch/InputSearch";
import DietitianCard from "../../Components/DietitianCard/DietitianCard";
import { Link } from "react-router-dom";

const SearchToEdit = ({ data }) => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const renderCards = () => {
        if (results.length > 0) {
            return results.map((item) => {
                return (<div  key={item.id}><DietitianCard
                    data={item} isEditMode={true} /></div>)
            })
        }
    }

    const handleSearch = () => {
        console.log(input);
        const filteredData = data.filter((item) => { return item.name.includes(input) })
        setResults(filteredData);
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }



    return (
        <div className="SearchToEdit-container">
            <InputSearch handleSearch={handleSearch} handleChange={handleChange}
                input={input}
            />
            {renderCards()}
        </div>
    )
}


export default SearchToEdit;





