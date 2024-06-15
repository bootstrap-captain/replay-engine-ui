import * as React from "react";
import {BaseSyntheticEvent, Fragment} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Button, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {createNewUserRequest} from "./UserAxios";
import {UserEntity} from "./UserEntity";

export function Create() {

    const [type, setType] = React.useState('');
    const [username, setUserName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    const handleUserName = (event: BaseSyntheticEvent) => {
        setUserName(event.target.value)
    }

    /*1. add user to user table backend
    * 2. refresh the query pages*/

    const createUser = () => {
        const user: UserEntity = {
            username: username,
            type: type,
            password: "1"
        }
        console.log(user)
        createNewUserRequest(user);
    }

    return (
        <Fragment>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleUserName} id="outlined-basic" label="SOEID" variant="outlined"/>


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
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"maker"}>Maker</MenuItem>
                        <MenuItem value={"checker"}>Check</MenuItem>
                        <MenuItem value={"maker-checker"}>Maker-Checker</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Button variant="contained" onClick={createUser}>Create User</Button>
        </Fragment>
    );
}