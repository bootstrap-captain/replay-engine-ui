import Box from "@mui/material/Box";
import {FormControl, InputLabel, Select, SelectChangeEvent, Stack, TextField} from "@mui/material";
import {User, user_type} from "./User";
import MenuItem from "@mui/material/MenuItem";
import React, {BaseSyntheticEvent, Fragment} from "react";
import Button from "@mui/material/Button";

interface SearchProps {
    saveSearchCondition: (searchCondition: User) => void;
    searchByCondition: () => void;
}

export default function Search(props: SearchProps) {

    const {saveSearchCondition, searchByCondition} = props;

    const [search, setSearch] = React.useState<User>({
        type: 'all',
    });

    /*原生React收集query条件*/
    const handleQueryCondition = (type: string) => {
        return (event: BaseSyntheticEvent | SelectChangeEvent) => {
            setSearch({
                /*解构赋值原对象*/
                ...search,
                [type]: event.target.value
            })
        }
    }

    const handleSearch = () => {
        /*保存search参数到admin中*/
        saveSearchCondition(search);
        /*发送请求查找数据*/
        searchByCondition();
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
                marginTop={4}
            >
                <TextField id="username-text" fullWidth label="SEOID" onChange={handleQueryCondition('username')}
                           variant="outlined"/>

                <FormControl fullWidth>
                    <InputLabel id="user-type">Type</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        label="Type"
                        value={search.type}
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
                <Button variant="contained" onClick={handleSearch}>Search</Button>
                <Button variant="contained">Reset</Button>
            </Stack>
        </Fragment>
    );
}