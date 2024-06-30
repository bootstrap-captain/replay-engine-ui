import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateOrUpdateDialog from "./CreateOrUpdateDialog";

type CreateProps = {
    queryByCondition: () => Promise<void>;
}

export default function Create(props: CreateProps) {

    const {queryByCondition} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display='flex' justifyContent='flex-end' marginTop={3} marginBottom={3}>
            <Button variant="contained" startIcon={<AddIcon/>} onClick={handleClickOpen}>Create New CUSTOMER</Button>

            {open && <CreateOrUpdateDialog title={'CREATE NEW CUSTOMER'} queryByCondition={queryByCondition} open={open}
                                           handleClose={handleClose}/>}
        </Box>
    );
}