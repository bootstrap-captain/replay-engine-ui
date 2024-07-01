import React, {BaseSyntheticEvent} from "react";
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
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {saveLoginUser} from "../../redux/reducers/loginSlice";
import {Navigate, NavigateFunction, useNavigate} from "react-router-dom";
import {getLoginToken} from "../../api/LoginApi";

export type LoginRequest = {
    username: string,
    password: string,
}

export type LoginResponse = {
    username: string,
    password: string,
    token: string,
}


export default function Login(props: any) {

    /*state属性：尽可能放在最前面，不然可能发生
    *  React Hook "React.useState" is called conditionally. React Hooks must be called in the exact same order in every component render */
    const [loginInfo, setLoginInfo] = React.useState<LoginRequest>({
        username: '',
        password: '',
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const dispatch = useAppDispatch();

    /*钩子的表示：代码旁边会有标识*/
    const navigate: NavigateFunction = useNavigate();

    let reduxToken = useAppSelector(state => {
        return state.login.token;
    });


    /*1. 检查当前token状态，如果有，则跳转到main页面，不会导致重新刷新就继续需要登陆
    * 2. 如果没有token，则进行下面的登陆步骤*/
    if (reduxToken !== '') {
        /*返回值必须是一个组件*/
        return <Navigate to='/'/>
    }

    const handleSaveLoginInfo = (key: string) => {
        return (event: BaseSyntheticEvent) => {
            setLoginInfo({
                ...loginInfo,
                [key]: event.target.value
            })
        }
    }

    /*验证用户登陆结果：成功则存储token，并跳转到welcome
    *                失败则重新跳转到login*/

    async function validateUser() {
        const data = await getLoginToken(loginInfo);
        // @ts-ignore
        const {token} = data;

        if (token === null) {
            console.log('登陆失败');
            navigate('/login', {
                replace: false,
            })
        } else {
            // @ts-ignore
            dispatch(saveLoginUser(data));
            /*跳转到主页面*/
            navigate('/');
        }
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
                    <TextField onChange={handleSaveLoginInfo('username')} id="outlined-basic" label="SOEID"
                               variant="outlined"/>
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
                            onChange={handleSaveLoginInfo('password')}
                        />
                    </FormControl>
                </Box>

                <Button variant="contained" onClick={validateUser}>Login</Button>

            </Box>
        </div>
    );
}