import {CssBaseline, ThemeProvider} from "@mui/material";
import {baseTheme} from "./theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ScrollManager} from "./components/ScrollManager";
import {HeaderBar} from "./components/header/HeaderBar.tsx";
import {FooterBar} from "./components/footer";
import {Slot} from "./components/Slot";
import {MainContent} from "./components/main/MainContent";
import {ErrorPage} from "./components/misc/ErrorPage.tsx";


function App() {

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline/>
            <HeaderBar/>

            <ScrollManager/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Slot/>}>
                        <Route index element={<MainContent/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

            <FooterBar/>
        </ThemeProvider>
    );
}

export default App;

