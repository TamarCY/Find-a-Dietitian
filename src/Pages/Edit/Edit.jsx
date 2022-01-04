import React from "react";
import "./Edit.css";
import EditForm from "../../Components/EditForm/EditForm";




const  Edit = ({submitEdit, itemToEdit}) =>{
    

    return (
        
        <div className="Add-container">
            <EditForm submitEdit={submitEdit} itemToEdit={itemToEdit}/>              
        </div>
    )
}


export default Edit;


// TODO: change the form component to be the add component or change the name from add to add and edit



