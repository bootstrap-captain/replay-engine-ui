import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";

export default function SearchHeader() {

    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
                flexDirection='row'
                display='flex'
            >
                <TextField id="searchUsername" label="Enter SOEID" variant="outlined"/>

                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="filer by type"
                            onChange={handleChange}
                        >
                            <MenuItem value={'all'}>all</MenuItem>
                            <MenuItem value={'admin'}>admin</MenuItem>
                            <MenuItem value={'maker'}>maker</MenuItem>
                            <MenuItem value={'checker'}>checker</MenuItem>
                            <MenuItem value={'maker-cheker'}>maker-checker</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </>
    );
}