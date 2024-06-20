import * as React from "react";
import {Dialog, DialogActions, DialogTitle, FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import {Fragment} from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {user_type} from "./User";
import MenuItem from "@mui/material/MenuItem";

export default function Edit(props: any) {

    const {userId, username} = props;

    const [type, setType] = React.useState(props.type);

    const [open, setOpen] = React.useState(false);

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    }


    const handleSubmit = ()=>{
        console.log(userId + username + type);
        //  请求后端发送编辑
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Fragment>
            <Button variant="outlined" color='success' startIcon={<EditIcon/>} onClick={handleClickOpen}>EDIT</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Edit User"}
                </DialogTitle>
                <DialogActions>

                    <Box height={300}
                         width={500}
                         bgcolor='##ffffff'
                         alignItems='center'
                         marginLeft='auto'
                         marginRight='auto'
                         marginTop='10px'
                         display='flex'
                         flexDirection='column'
                         justifyContent='center'
                         gap={2}
                         p={2}
                    >
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '30ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField defaultValue={username} disabled={true} id="outlined-basic" label="SOEID"
                                       variant="outlined"/>
                        </Box>


                        <FormControl sx={{m: 1, width: '30ch'}}>
                            <InputLabel id="user-type">Type</InputLabel>
                            <Select
                                labelId="simple-select-label"
                                id="simple-select"
                                label="Type"
                                value={type}
                                onChange={handleTypeChange}
                            >
                                {user_type.map((item, index) => (
                                    <MenuItem value={item} key={index}>
                                        {item.toUpperCase()}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};
