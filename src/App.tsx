import {Header} from "./components/Header";
import {MainContent} from "./components/Slot/MainContent";
import {Footer} from "./components/Footer";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {baseTheme} from "./theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorPage} from "./components/ErrorPage";
import {Slot} from "./components/Slot";
import {Projects} from "./components/Slot/Projects";
import {ScrollManager} from "./components/ScrollManager";


function App() {

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline/>
            <Header/>
            <ScrollManager/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Slot/>}>
                        <Route index element={<MainContent/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;

