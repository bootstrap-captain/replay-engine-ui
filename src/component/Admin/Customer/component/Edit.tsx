import {CustomerDisplay} from "../entity/CustomerEntity";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import CreateOrUpdateDialog from "./CreateOrUpdateDialog";

type CustomerEditProps = {
    queryByCondition: () => Promise<void>;
    entity: CustomerDisplay
}

export default function Edit(props: CustomerEditProps) {

    const {queryByCondition, entity} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color='success' startIcon={<EditIcon/>} onClick={handleClickOpen}>EDIT</Button>
            {open && <CreateOrUpdateDialog queryByCondition={queryByCondition} open={open} handleClose={handleClose}
                                           title={'UPDATE CUSTOMER'} entity={entity}></CreateOrUpdateDialog>}
        </div>
    );
}