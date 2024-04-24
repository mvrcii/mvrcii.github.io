import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

export function Slot() {
    return (
        <Box component='main'>
            <Outlet/>
        </Box>
    );
}
