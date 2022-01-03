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
import './Form.css';
import api from '../../api'

// const DIETITIAN_OBJECT = {
//   id:"", name:"", phone:"", portefolio:"", expertice:[], languges:[], clinics:[{hmo:"", area:"",city:""}]
// }
// TODO: what is the best place for this?


export default function Form() {
//   const {formData, setFormData} = useState( {id:"", name:"", phone:"", portefolio:"", expertice:[], languges:[], clinics:[{hmo:"", area:"",city:""}]
// })
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [dietExpertise, setDietExpertise] = useState([]);
const [language, setLanguage] = useState([]);
const [hmo, setHmo] = useState("");
const [area, setArea] = useState("");
const [city, setCity] = useState("");
const [dietitian, setDietitian] = useState({})
// TODO: change to one state object and one function for all

const handleExpertiseChange = (event) => {
  const {
    target: { value },
  } = event;
  setDietExpertise(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
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

const submitForm = () => {
  try {
  api.postItem({
      "name": name,
      "phone": phone,
      "language": language,
      "dietExpertise":dietExpertise,
      "hmo": hmo,
      "area": area,
      "city": city
    }
  )
  } catch(err){
    console.error(err);
  }

}
// TODO: CHECK IF IT POSTS

  return (
    <Container>
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
    <Link to="/">
    <Button variant="contained" color='success' onClick={submitForm}>שמירה</Button>
    </Link>
</Container>
  );
}
