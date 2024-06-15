import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {DialogActions, DialogContent, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";


export default function CreateNewUser() {
    const [open, setOpen] = React.useState(false);

    const [type, setType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };


    const createNewUser = () => {

    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Create New User
            </Button>

            <Box>
                <Dialog onClose={handleClose} open={open}>

                    <DialogTitle>Create New User</DialogTitle>

                    <DialogContent>
                        <TextField id="searchUsername" label="Enter SOEID" variant="outlined"/>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Age"
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

                    </DialogContent>

                    <DialogActions>
                        <Button autoFocus variant="contained" onClick={createNewUser}>
                            Create
                        </Button>
                    </DialogActions>

                </Dialog>
            </Box>

        </div>
    );
}

