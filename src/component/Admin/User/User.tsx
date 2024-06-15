import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import {Select, SelectChangeEvent} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import {Create} from "./Create";

export function User() {
    const [type, setType] = React.useState('all');

    const [isFormVisible, setIsFormVisible] = useState(false);

    const showForm = () => {
        setIsFormVisible(true);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const handleClick = () => {
        console.log('hello')
    }


    return (
        <div>
            <Box display="flex">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '30ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Search By SOEID" variant="outlined"/>
                </Box>

                <Box sx={{minWidth: 120}}>
                    <FormControl sx={{
                        '& > :not(style)': {m: 1, width: '20ch'},
                    }}>
                        <InputLabel id="demo-simple-select-label">type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="type"
                            onChange={handleChange}
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"admin"}>Admin</MenuItem>
                            <MenuItem value={"maker"}>Maker</MenuItem>
                            <MenuItem value={"checker"}>Check</MenuItem>
                            <MenuItem value={"maker-checker"}>Maker-Checker</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box component="form"
                     sx={{
                         '& > :not(style)': {m: 1, width: '30ch'},
                     }}
                     noValidate
                     autoComplete="off">
                    <Button variant="contained" onClick={showForm}>Create New User</Button>
                </Box>


            </Box>

            {/*CREATE NEW USER*/}
            {isFormVisible && <Create/>}
        </div>
    );
}
