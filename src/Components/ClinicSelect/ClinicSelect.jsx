import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function ClinicSelect() {
  return (
      <Box>
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="hmo">קופה</InputLabel>
        <Select defaultValue="" id="hmo" label="hmo">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>מכבי</MenuItem>
          <MenuItem value={2}>כללית</MenuItem>
          <MenuItem value={3}>מאוחדת</MenuItem>
          <MenuItem value={4}>לאומית</MenuItem>
          <MenuItem value={5}>פרטי</MenuItem>
          
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="area">אזור</InputLabel>
        <Select defaultValue="" id="area" label="area">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>מרכז</MenuItem>
          <MenuItem value={2}>צפון</MenuItem>
          <MenuItem value={3}>דרום</MenuItem>
          <MenuItem value={4}>ירושלים</MenuItem>
          <MenuItem value={4}>שפלה</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
        id="city"
        label="עיר"/>
      </FormControl>
    </div>
    </Box>
  );
}
