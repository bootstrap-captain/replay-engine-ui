import {CustomerDisplay} from "../entity/CustomerEntity";
import React, {Fragment} from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {AxiosResponse} from "axios";
import {axiosRequest} from "../../../../utils";

type DeleteProps = {
    queryByCondition: () => Promise<void>;
    entity: CustomerDisplay,
}

export default function Delete(props: DeleteProps) {
    const {entity, queryByCondition} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteCustomer = async () => {
        /*后台删除数据,删除成功后，再开始查询*/
        const response: AxiosResponse<any, any> = await axiosRequest.get('/customer/delete', {
            params: {
                customerId: entity.customerId
            }
        });

        queryByCondition();
        setOpen(false)
    }


    return (
        <Fragment>
            {/*删除按钮*/}
            <Button variant="contained" color='error' startIcon={<DeleteIcon/>}
                    onClick={handleClickOpen}>DELETE</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Attention"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this customer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>

                    <Button onClick={handleDeleteCustomer} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}