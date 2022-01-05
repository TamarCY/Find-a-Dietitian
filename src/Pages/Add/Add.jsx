import React from "react";
import "./Add.css";
import Form from "../../Components/Form/Form";

const Add = ({ submitForm }) => {
    return (
        <div className="Add-container">
            <Form submitForm={submitForm} />
        </div>
    )
}

export default Add;





