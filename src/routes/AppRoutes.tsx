import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {MainWrapper} from "../components/main/MainWrapper.tsx";
import {ErrorPage} from "../components/misc/ErrorPage.tsx";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export function Slot() {
    return (
        <StyledBox component='main' id='main'>
            <Outlet/>
        </StyledBox>
    );
}

const StyledBox = styled(Box)({
    flexGrow: 1,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // Changed from 'auto' to 'hidden'
    paddingTop: '100px', // Add space for the fixed header - same as header height
});

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Slot/>}>
                    <Route index element={<MainWrapper/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}