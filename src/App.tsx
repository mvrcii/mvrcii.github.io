import {CssBaseline, ThemeProvider} from "@mui/material";
import {baseTheme} from "./theme.ts";
import LandingPage from "./timeline_spike/LandingPage.tsx";


function App() {

    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline/>
            {/*<HeaderBar/>*/}

            {/*<ScrollManager/>*/}
            {/*<AppRoutes/>*/}

            {/*<FooterBar/>*/}
            <LandingPage/>
        </ThemeProvider>
    );
}

export default App;

