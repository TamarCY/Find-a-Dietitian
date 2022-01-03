import React, {useState} from "react";
import "./Add.css";
import Form from "../../Components/Form/Form";
import { useParams } from "react-router-dom";



const  Add = ({isEditMode}) =>{
    const { id } = useParams();
    // if(id) {
    //  console.log("id: "+id);
    // } else{
    //     console.log("add");
    // }

    // const [editMode, setEdit] = useState({isEditMode})
    

    return (
        <div className="Add-container">
            <Form isEditMode={isEditMode} temp={"test"}/>              
        </div>
    )
}


export default Add;


// TODO: change the form component to be the add component or change the name from add to add and edit



