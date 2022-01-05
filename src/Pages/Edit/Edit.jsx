import React from "react";
import "./Edit.css";
import EditForm from "../../Components/EditForm/EditForm";


const Edit = ({ submitEdit, itemToEdit }) => {

    return (
        <div className="Add-container">
            <EditForm submitEdit={submitEdit} itemToEdit={itemToEdit} />
        </div>
    )
}

export default Edit;





