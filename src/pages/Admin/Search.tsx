import Box from "@mui/material/Box";
import {FormControl, InputLabel, Select, SelectChangeEvent, Stack, TextField} from "@mui/material";
import {User, user_type} from "./User";
import MenuItem from "@mui/material/MenuItem";
import React, {BaseSyntheticEvent, ChangeEvent, Fragment} from "react";
import Button from "@mui/material/Button";

interface SearchProps {
    callQueryApi: () => void;
}

export default function Search(props: SearchProps) {

    const {callQueryApi} = props;

    const [queryCondition, setQueryCondition] = React.useState<User>({
        type:'admin',
    });

    /*原生React收集query条件*/
    const handleQueryCondition = (type: string) => {
        return (event: BaseSyntheticEvent | SelectChangeEvent) => {
            setQueryCondition({
                /*解构赋值原对象*/
                ...queryCondition,
                [type]: event.target.value
            })
        }
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
                <TextField id="username-text" fullWidth label="SEOID" onChange={handleQueryCondition('username')}
                           variant="outlined"/>

                <FormControl fullWidth>
                    <InputLabel id="user-type">Type</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        label="Type"
                        value={queryCondition.type}/*必须要加，不然会warning*/
                        onChange={handleQueryCondition('type')}
                    >

                        {user_type.map((item, index) => (
                            <MenuItem value={item} key={index}>
                                {item.toUpperCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Stack marginTop={3} spacing={2} direction="row">
                <Button variant="contained" onClick={callQueryApi}>Search</Button>
                <Button variant="contained">Reset</Button>
            </Stack>
        </Fragment>
    );
}