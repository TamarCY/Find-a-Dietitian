import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from '../MultipleSelectCheckmarks/MultipleSelectChip';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ClinicSelect from '../ClinicSelect/ClinicSelect';
import logo from '../../Assets/Images/logo.png';
import './Form.css';


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
}

const handlePhoneInput = (e)=>{
  setPhone(e.target.value);
}

const submitForm = () => {
  console.log(
    dietExpertise
  );
}




  return (
    <>
    <img className="Form-logo" src={logo} alt="logo"/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
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
          noChange={handlePhoneInput}
        />
      
        <MultipleSelectChip 
        dietExpertise={dietExpertise}
        handleExpertiseChange={handleExpertiseChange}
        />
        <LanguageSelect
          
        />
        <ClinicSelect/>


      </div>
    </Box>
    <Button variant="contained" color='success' onClick={submitForm}>שמירה</Button>

    </>
  );
}
