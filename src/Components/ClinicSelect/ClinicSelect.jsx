import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function ClinicSelect(props) {
    const renderCityInput = () => {
        if (props.displayCity) {
            return (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    id="city"
                    label="עיר"
                    defaultValue={props.city}
                    onChange={props.handleCityChange}
                />
            </FormControl>
        )}
    }

    return (
        <Box>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="hmo">קופה</InputLabel>
                    <Select
                        defaultValue=""
                        id="hmo"
                        label="hmo"
                        value={props.hmo}
                        onChange={props.handleHmoChange}
                    >
                        <MenuItem value={"מכבי"}>מכבי</MenuItem>
                        <MenuItem value={"כללית"}>כללית</MenuItem>
                        <MenuItem value={"מאוחדת"}>מאוחדת</MenuItem>
                        <MenuItem value={"לאומית"}>לאומית</MenuItem>
                        <MenuItem value={"פרטי"}>פרטי</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="area">אזור</InputLabel>
                    <Select defaultValue=""
                        id="area"
                        label="area"
                        value={props.area}
                        onChange={props.handleAreaChange}
                    >
                        <MenuItem value={"מרכז"}>מרכז</MenuItem>
                        <MenuItem value={"צפון"}>צפון</MenuItem>
                        <MenuItem value={"דרום"}>דרום</MenuItem>
                        <MenuItem value={"ירושלים"}>ירושלים</MenuItem>
                        <MenuItem value={"שפלה"}>שפלה</MenuItem>
                        <MenuItem value={"שרון"}>שרון</MenuItem>
                    </Select>
                </FormControl>
            { renderCityInput()}


            </div>
        </Box>
    );
}
