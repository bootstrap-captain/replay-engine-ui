import * as React from "react";
import {Dialog, DialogActions, DialogTitle, FormControl, InputLabel, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {User, user_type} from "./User";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from '@mui/icons-material/Add';

export default function CreateUser() {

    const [user, setUser] = React.useState<User>({
        username: '',
        userid: '',
        type: ''
    });

    const [open, setOpen] = React.useState(false);

    const handleUserChange = (type: string) => {
        return (event: any) => {
            setUser({
                ...user,
                [type]: event.target.value
            })
        }
    }

    function handleSubmit() {
        console.log(user);
        // 发送请求到后端创建数据
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display='flex' justifyContent='flex-end'>
            <Button variant="contained" startIcon={<AddIcon/>} onClick={handleClickOpen}>Create New User</Button>

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
                            <TextField id="outlined-basic" onChange={handleUserChange('username')} label="SOEID"
                                       variant="outlined"/>
                        </Box>


                        <FormControl sx={{m: 1, width: '30ch'}}>
                            <InputLabel id="user-type">Type</InputLabel>
                            <Select
                                labelId="simple-select-label"
                                id="simple-select"
                                label="Type"
                                value={user.type}
                                onChange={handleUserChange('type')}
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
        </Box>
    );
}