import Box from "@mui/material/Box";
import SearchHeader from "./SearchHeader";
import DisplayUser from "./DisplayUser";
import CreateNewUser from "./CreateNewUser";

export default function AllUsers() {
    return (
        <Box>
            <SearchHeader/>
            <DisplayUser/>
            <CreateNewUser/>
        </Box>
    );
}