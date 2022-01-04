import * as React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from '../MultipleSelectCheckmarks/MultipleSelectChip';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ClinicSelect from '../ClinicSelect/ClinicSelect';
import logo from '../../Assets/Images/logo.png';
import './EditForm.css';
import { useParams } from "react-router-dom";


export default function EditForm({submitEdit, itemToEdit}) {

const [name, setName] = useState(itemToEdit.name);
const [phone, setPhone] = useState(itemToEdit.phone);
const [dietExpertise, setDietExpertise] = useState(itemToEdit.dietExpertise);
const [language, setLanguage] = useState(itemToEdit.language);
const [hmo, setHmo] = useState(itemToEdit.hmo);
const [area, setArea] = useState(itemToEdit.area);
const [city, setCity] = useState(itemToEdit.city);
const [dietitian, setDietitian] = useState({})
// TODO: change to one state object and one function for all





const handleExpertiseChange = (event) => {
  const {
    target: { value },
  } = event;
  setDietExpertise(
   value);
};

const handleNameInput = (e)=>{
  setName(e.target.value);
};

const handlePhoneInput = (e)=>{
  setPhone(e.target.value);
};

const handleLanguagesChange = (e) => {
  setLanguage(e.target.value);
};


const handleAreaChange = (e) => {
  setArea(e.target.value)
}

const handleHmoChange = (e) => {
  setHmo(e.target.value)
}

const handleCityChange = (e) => {
  setCity(e.target.value)
}


  return (
    <div className='EditForm-container'>
    <img className="Form-logo" src={logo} alt="logo"/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="name"
          label="שם"
          value={name}
          onChange={handleNameInput}
          
        />
        <TextField
          id="phone"
          type="tel"
          label="טלפון"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          // TODO: fix the tel input type
          value={phone}
          onChange={handlePhoneInput}
        />
      
        <MultipleSelectChip 
        dietExpertise={dietExpertise}
        handleExpertiseChange={handleExpertiseChange}
        />
        <LanguageSelect
          language={language}
          handleLanguagesChange={handleLanguagesChange}
        />
        <ClinicSelect
          hmo={hmo}
          area={area}
          city={city}
          displayCity={true}
          handleHmoChange={handleHmoChange}
          handleAreaChange={handleAreaChange}
          handleCityChange={handleCityChange}
        />


    </Box>
    <Link to="/toEdit">
    <Button variant="contained" color='success' 
    onClick={()=>(submitEdit(itemToEdit.id,name, phone, language, dietExpertise, hmo, area, city))}>שמירה</Button>
    </Link>
    <Link to="/toEdit">
        <Button variant="contained" color='success' >חזרה ללא שמירה</Button>
    </Link>
</div>
  );
}
