import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from '../MultipleSelectCheckmarks/MultipleSelectChip';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ClinicSelect from '../ClinicSelect/ClinicSelect';
import logo from '../../Assets/Images/logo.png';
import './Form.css';


export default function Form({ submitForm }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dietExpertise, setDietExpertise] = useState([]);
  const [language, setLanguage] = useState([]);
  const [hmo, setHmo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");

  const handleExpertiseChange = (event) => {
    const { target: { value }, } = event;
    setDietExpertise(value);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handlePhoneInput = (e) => {
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
    <div className='Form-container'>
      <Link to="/">
        <img className="Form-logo" src={logo} alt="logo" />
      </Link>
      <div className="Form-main">
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
        <div className="Form-buttons">
          <Link to="/">
            <Button variant="contained" color='success' onClick={() => (submitForm(name, phone, language, dietExpertise, hmo, area, city))}>שמירה</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
