import React, { useState, useEffect } from "react";
import "./SearchToEdit.css";
import logo from "../../Assets/Images/logo.png"
import InputSearch from "../../Components/InputSearch/InputSearch";
import DietitianCard from "../../Components/DietitianCard/DietitianCard";
import { Link } from "react-router-dom";




const SearchToEdit = ({ data, handleDelete, handleEdit }) => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        handleSearch()
    }, [data])

    const renderCards = () => {
        if (results.length > 0) {
            return results.map((item) => {
                return (<div key={item.id}><DietitianCard
                    data={item} isEditMode={true}
                    handleDelete={handleDelete} handleEdit={handleEdit} /></div>)
            })
        }
    }

    const handleSearch = () => {
        const filteredData = data.filter((item) => { return item.name.includes(input) })
        setResults(filteredData);
        setInput("");
        
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmitToEdit = (e) => {
        e.preventDefault();
        handleSearch();
    }



    return (

        <div className="SearchToEdit-container">
            <div className="SearchToEdit-main">
                <Link to="/" >
                    <div className="SearchToEdit-logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="SearchToEdit-input">
                    <InputSearch handleSearch={handleSearch} handleChange={handleChange}
                      handleSubmitToEdit={handleSubmitToEdit}  input={input}
                    />
                </div>
                <div className="SearchToEdit-cards">
                    {renderCards()}
                </div>
            </div>
        </div>
    )
}


export default SearchToEdit;





