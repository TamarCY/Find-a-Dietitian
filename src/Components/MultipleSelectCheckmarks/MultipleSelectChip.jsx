
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const expertiseArray = [
    'ירידה במשקל',
    'סוכרת',
    'ילדים',
    'גסטרו',
    'גריאטריה',
    'בריאטריה',
    'ספורט',
    'נפרולוגיה',
    'הריון ופוריות',
    'צמחונות-טבעונות',
    'נון-דיאט',
    `הפרעות אכילה`,
     `אונקולוגיה`
  ];

function getStyles(expertise, dietExpertise, theme) {
  return {
    fontWeight:
      dietExpertise.indexOf(expertise) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [dietExpertise, setDietExpertise] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDietExpertise(value);
  };

  return (
    <div className="Search-input">
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="expertise">תחום</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={props.dietExpertise}
          onChange={props.handleExpertiseChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {expertiseArray.map((expertise) => (
            <MenuItem
              key={expertise}
              value={expertise}
              style={getStyles(expertise, props.dietExpertise, theme)}
            >
              {expertise}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}







