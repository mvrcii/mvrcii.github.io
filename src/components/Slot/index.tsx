import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import {styled} from "@mui/material/styles";

export function Slot() {
    return (
        <StyledBox component='main' id='main'>
            <Outlet/>
        </StyledBox>
    );


}

const StyledBox = styled(Box)({
    flexGrow: 1,  // Allows main to expand and fill space
    flex: '1 0 auto',
    overflow: 'auto',  // Allows scrolling within the main content
    marginTop: '2rem',
    // Offset for scrollIntoView navigation to account for sticky header
    // 2rem for main´s top margin, 6.25rem for header height, 4rem for header bottom margin
    scrollMargin: 'calc(2rem + 6.25rem + 4rem)'
});