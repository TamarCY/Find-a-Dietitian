import React, {useState} from "react";
import "./Edit.css";
import EditForm from "../../Components/EditForm/EditForm";
// import { useParams } from "react-router-dom";
// const { id } = useParams();



const  Edit = ({submitEdit, itemToEdit}) =>{
    

    return (
        <div className="Add-container">
            <EditForm submitEdit={submitEdit} itemToEdit={itemToEdit}/>              
        </div>
    )
}


export default Edit;


// TODO: change the form component to be the add component or change the name from add to add and edit



