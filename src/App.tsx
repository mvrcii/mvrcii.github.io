import {CssBaseline, ThemeProvider} from "@mui/material";
import {baseTheme} from "./theme.ts";
import {ScrollManager} from "./components/ScrollManager";
import {HeaderBar} from "./components/header/HeaderBar.tsx";
import {FooterBar} from "./components/footer";
import {AppRoutes} from "./routes/AppRoutes.tsx";


function App() {

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline/>
            <HeaderBar/>

            <ScrollManager/>
            <AppRoutes/>

            <FooterBar/>
        </ThemeProvider>
    );
}

export default App;

