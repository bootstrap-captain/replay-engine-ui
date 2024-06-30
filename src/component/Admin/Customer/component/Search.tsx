import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, {MutableRefObject} from "react";
import {CustomerSearchEntity, GenderType} from "../entity/CustomerEntity";
import {Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, Select, Stack} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

type CustomerSearchProp = {
    queryCondition: MutableRefObject<CustomerSearchEntity>;
    queryByCondition: () => void;
}

export default function Search(props: CustomerSearchProp) {

    const [formData, setFormData] = React.useState<CustomerSearchEntity>({
        customerName: '',
        customerPhoneNumber: '',
        customerGender: GenderType.FEMALE,
        customerBirthday: dayjs('2024-01-01')
    });

    const handleFormData = (type: string) => {
        /*事件类型到底该如何写？*/
        return (event: any) => {
            setFormData({
                    ...formData,
                    [type]: event.target.value
                }
            )
        }
    }

    const handleSearch = () => {
        const {queryCondition, queryByCondition} = props;
        /*数据回传*/
        queryCondition.current = formData;

        /*发送查询请求*/
        queryByCondition();
    }

    /*受控组件：如果要还原数据，则必须对其数据进行初始化*/
    const handleReset = () => {
        setFormData({
            customerName: '',
            customerPhoneNumber: '',
            customerGender: GenderType.FEMALE,
            customerBirthday: dayjs('2024-01-01')
        })
    }


    return (
        <Box>
            {/*基本搜索*/}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
                marginTop={4}
                marginLeft={4}
            >
                <TextField id="customerName" label="Name" variant="outlined" value={formData.customerName}
                           required={true} onChange={handleFormData('customerName')}/>

                <TextField id="customerPhoneNumber" label="PhoneNumber" variant="outlined"
                           value={formData.customerPhoneNumber}
                           required={true} onChange={handleFormData('customerPhoneNumber')}/>

                <FormControl fullWidth>
                    <InputLabel id="customer-select-label">Gender</InputLabel>
                    <Select
                        labelId="customer-select-label"
                        id="customer-simple-select"
                        /*li类型的，必须在定义时候给一个初始化值*/
                        value={formData.customerGender}
                        label="gender"
                        onChange={handleFormData('customerGender')}
                    >
                        {/*遍历枚举*/}
                        {Object.keys(GenderType).map((key) => {
                            // @ts-ignore
                            return <MenuItem key={key} value={GenderType[key]}>{GenderType[key]}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>

            {/*高级搜索*/}
            <Box
                marginLeft={4}
                marginRight={4}
                paddingLeft={0}
            >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        /*修改默认属性*/
                    >

                    </AccordionSummary>

                    <AccordionDetails>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"

                            marginLeft={4}
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Brithday"
                                    value={formData.customerBirthday}
                                    onChange={(event) => {

                                        setFormData({
                                            ...formData,
                                            customerBirthday: event
                                        })
                                    }}
                                />
                            </LocalizationProvider>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>


            <Stack marginLeft={5} marginTop={3} spacing={2} direction="row">
                <Button size='large' variant="contained" onClick={handleSearch}>Search</Button>
                <Button size='large' variant="contained" onClick={handleReset}>Reset</Button>
            </Stack>
        </Box>
    );
}