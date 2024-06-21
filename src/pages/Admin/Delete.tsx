import * as React from "react";
import {Fragment} from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {deleteById} from "../../api/User";

interface DeleteProps {
    userId: string| undefined,
    searchByCondition:()=>void
}

export default function Delete(props: DeleteProps) {
    const {userId, searchByCondition} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteUser = () => {
        /*后台删除数据,删除成功后，再开始查询*/
        deleteById(userId).then((value)=>{
            console.log(value);
            /*再次查询，更新数据*/
            searchByCondition();
            setOpen(false);
        })
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
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>

                    <Button onClick={handleDeleteUser} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}