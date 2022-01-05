import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase({ handleSearch, handleChange, input, handleSubmitToEdit }) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: "2px" }}
      onSubmit={(e) => handleSubmitToEdit(e)}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="שם דיאטנ.ית לעריכה"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={input}
        onChange={(e) => handleChange(e)}
      />
      <IconButton onClick={(e) => handleSearch(e)} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
