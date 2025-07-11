import {CssBaseline} from "@mui/material";
import {HeaderBar} from "./components/header/HeaderBar.tsx";
import {AppRoutes} from "./routes/AppRoutes.tsx";
import {VerticalNav} from "./components/navigation/VerticalNav.tsx";
import {useEffect} from "react";
import {ThemeProvider} from "./theme/ThemeContext";
import {ScrollManager} from "./utils/ScrollManager.ts";

function App() {
    useEffect(() => {
        const scrollToElement = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                // Use ScrollManager instead of direct scrollIntoView
                ScrollManager.getInstance().scrollToSection(id);
            } else {
                // Scroll to header on page refresh && cleared hash
                const header = document.getElementById("header");
                if (header) {
                    header.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        // Listen to both hashchange and popstate events
        window.addEventListener('hashchange', scrollToElement);
        window.addEventListener('popstate', scrollToElement);

        // Call initially in case the page is loaded without a hash
        scrollToElement();

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('hashchange', scrollToElement);
            window.removeEventListener('popstate', scrollToElement);
        };
    }, []);

    return (
        <ThemeProvider>
            <CssBaseline/>
            <HeaderBar/>
            <VerticalNav/>
            <AppRoutes/>
        </ThemeProvider>
    );
}

export default App;