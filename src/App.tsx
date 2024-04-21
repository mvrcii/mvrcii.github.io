import {Header} from "./components/Header";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {baseTheme} from "./theme.ts";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./components/ErrorPage";


function Slot() {
    return (
        <Box component='main'>
            <Outlet/>
        </Box>
    );
}


function App() {

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline/>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Slot/>}>
                        <Route index element={<MainContent/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;

