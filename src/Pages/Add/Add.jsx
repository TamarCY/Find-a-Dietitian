import React, {useState} from "react";
import "./Add.css";
import Form from "../../Components/Form/Form";
// import { useParams } from "react-router-dom";
// const { id } = useParams();



const  Add = ({isEditMode}) =>{
    

    return (
        <div className="Add-container">
            <Form/>              
        </div>
    )
}


export default Add;


// TODO: change the form component to be the add component or change the name from add to add and edit



