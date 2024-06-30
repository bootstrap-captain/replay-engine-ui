import {Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import * as React from "react";
import {CustomerDisplay, GenderType} from "../entity/CustomerEntity";
import {createCustomer, updateCustomer} from "../../../../api/CustomerApi";


type CreateOrUpdateDialogProps = {
    queryByCondition: () => Promise<void>;
    open: boolean;
    handleClose: () => void;
    title: string;
    entity?: CustomerDisplay;
}

/*Dialog组件只有一个，关闭后就会从内存中消失*/
export default function CreateOrUpdateDialog(props: CreateOrUpdateDialogProps) {
    const {open, handleClose, queryByCondition, title, entity} = props;

    /*初始值为entity：可能为undefined*/
    const [customer, setCustomer] = React.useState<CustomerDisplay>({
        /*表单数据的回填*/
        customerGender: GenderType.FEMALE,
        ...entity,
    });

    const handleUserChange = (type: string) => {
        return (event: any) => {
            setCustomer({
                ...customer,
                [type]: event.target.value
            })
        }
    }


    const handleSubmit = async () => {

        if (title === 'CREATE NEW CUSTOMER') {
            /*新增*/
            await createCustomer(customer);
            await queryByCondition();
        } else if (title === 'UPDATE CUSTOMER') {
            /*更新*/
            await updateCustomer(customer);
            await queryByCondition();
        }
        handleClose();
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="create-update-dialog-title"
                aria-describedby="create-update-dialog-description"
            >
                <DialogTitle id="create-update-dialog-title">
                    {title}
                </DialogTitle>

                <DialogContent>
                    <Box
                        bgcolor='##ffffff'
                        alignItems='center'
                        marginLeft='auto'
                        marginRight='auto'
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        gap={2}
                        p={2}
                    >
                        <TextField id="outlined-basic" onChange={handleUserChange('customerName')} label="Name"
                                   value={customer.customerName}
                                   variant="outlined"/>
                        <TextField id="outlined-basic" onChange={handleUserChange('customerPhoneNumber')}
                                   label="Phone-Number"
                                   value={customer.customerPhoneNumber}
                                   variant="outlined"/>
                        <TextField id="outlined-basic" onChange={handleUserChange('customerEmail')} label="Email"
                                   value={customer.customerEmail}
                                   variant="outlined"/>
                        <TextField id="outlined-basic" onChange={handleUserChange('customerAge')} label="Age"
                                   value={customer.customerAge}
                                   variant="outlined"/>
                        <TextField id="outlined-basic" onChange={handleUserChange('customerAddress')} label="Address"
                                   value={customer.customerAddress}
                                   variant="outlined"/>

                        <FormControl sx={{m: 1, width: '30ch'}}>
                            <InputLabel id="user-type">Type</InputLabel>
                            <Select
                                labelId="simple-select-label"
                                id="simple-select"
                                label="Type"
                                value={customer.customerGender}
                                onChange={handleUserChange('customerGender')}
                            >
                                {/*遍历枚举*/}
                                {Object.keys(GenderType).map((key) => {
                                    // @ts-ignore
                                    return <MenuItem key={key} value={GenderType[key]}>{GenderType[key]}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}