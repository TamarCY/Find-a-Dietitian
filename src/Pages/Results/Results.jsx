import React from "react";
import "./Results.css";
import logo from "../../Assets/Images/logo.png"
import DietitianCard from "../../Components/DietitianCard/DietitianCard";
import { Container } from "@mui/material";


const  Results = (props) =>{
    if(!props.data) return <div></div>;
    return (
        
        <Container className="Results-container">
          <DietitianCard data={props.data[3]}
          />
        </Container>
    )
}


export default Results;