import {connect} from "react-redux";


import * as React from "react";
import {BaseSyntheticEvent} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from "@mui/material/Button";
import {validateUserRequest} from "../../component/Login/LoginRequest";
import {saveUserAction} from "../../redux/actions/UserAction";


function Login(props: any) {

    const [showPassword, setShowPassword] = React.useState(false);

    const [userInfo, setUserInfo] = React.useState({
        username: '',
        password: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const saveUser = (key: string) => {
        return (event: BaseSyntheticEvent) => {
            setUserInfo((previous) => {
                let value = event.target.value;
                let userInfo = {
                    username: previous.username,
                    password: previous.username
                }
                if (key === 'username') {
                    userInfo.username = value;
                } else if (key === 'password') {
                    userInfo.password = value;
                }
                return userInfo;
            })
        }
    }

    function validateUser() {
        let result = validateUserRequest(userInfo);
        if (result) {
            /*存入redux*/
            console.log('store to redux')
            props.saveUser(userInfo);

            /*存入localstorage*/
            localStorage.setItem('token_key', 'hahahha');
            goToWelcome();
        } else {
            goBackToLogin();
        }
    }

    /*login failure*/
    function goBackToLogin() {
        props.history.replace('/login');
    }

    /*login success*/
    function goToWelcome() {
        props.history.replace('/home');
    }

    return (
        <div id='login'>
            {/*Box：盒子模型，可指定高，宽*/}
            <Box height={400}
                 width={700}
                 bgcolor='##ffffff'
                 alignItems='center'
                 marginLeft='auto'/*左居中*/
                 marginRight='auto'/*右居中*/
                 marginTop='200px'
                 display='flex'
                 flexDirection='column' /*元素在容器中按照列分布*/
                 justifyContent='center'/* 元素在容器中水平居中*/
                 gap={4}
                 p={2}

                 sx={{
                     border: '2px solid black'
                 }}
            >

                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '30ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField onChange={saveUser('username')} id="outlined-basic" label="SOEID" variant="outlined"/>
                </Box>

                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <FormControl sx={{m: 1, width: '30ch'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={saveUser('password')}
                        />
                    </FormControl>
                </Box>

                <Button variant="contained" onClick={validateUser}>Login</Button>

            </Box>
        </div>
    );
}


function mapStateToProps(state: any) {
    return {
        user: state.user,
    }
}

const mapDispatchToPros = {
    saveUser: saveUserAction
}

export const LoginContainer: any = connect(mapStateToProps, mapDispatchToPros)(Login);
