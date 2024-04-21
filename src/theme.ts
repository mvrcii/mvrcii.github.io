import {createTheme} from "@mui/material";

export const baseTheme = createTheme({
    typography: {
        fontFamily: '"Roboto", Arial, sans-serif',
        h1: {
            fontWeight: 900,
        },
        h2: {
            fontWeight: 900,
            fontSize: '2rem'
        },
        h3: {
            fontWeight: 900,
            fontSize: '1.75rem'
        },
        h4: {
            fontWeight: 900,
            fontSize: '1.5rem'
        },
        body1: {
            fontWeight: 400,
        },
        button: {
            fontWeight: 900,
        },
    },
    palette: {
        primary: {
            main: '#fafafa',
        },
        secondary: {
            main: '#dc4823',
        },
        background: {
            default: '#121212',
            paper: '#333333',
        },
        text: {
            primary: '#fafafa',
            secondary: '#b7b8b7',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html, body, #root': {
                    height: '100%',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',  // Minimum height of the viewport
                    alignItems: 'center',
                    justifyContent: 'flex-start',  // Align content to the start
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 0 auto',  // Allows root to expand with content
                    overflow: 'auto',  // Allows scrolling within the root container
                },
                'main': {
                    flexGrow: 1,  // Allows main to expand and fill space
                    flex: '1 0 auto',
                    overflow: 'auto',  // Allows scrolling within the main content
                    marginTop: '2rem',
                },
                'header': {
                    flexShrink: 0,
                    minHeight: '100px',
                },
                'footer': {
                    flexShrink: 0,
                    minHeight: '120px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 900,
                    lineHeight: 1.5,
                    fontSize: '1rem',
                    width: 'auto',
                    height: 'auto',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '0 !important',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '62.5rem !important',
                    padding: '0 2.5rem !important',
                    margin: '0 auto 8rem'
                },
            },
        },
    }
});