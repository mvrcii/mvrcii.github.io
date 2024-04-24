import {createTheme} from "@mui/material";

export const baseTheme = createTheme({
    typography: {
        fontFamily: '"Roboto", Arial, sans-serif',
        h1: {
            fontWeight: 900,
            letterSpacing: "-.05em",
            lineHeight: "90%",
            fontSize: '4.5rem',
            marginBottom: '0.5rem',
            paddingTop: '1rem'
        },
        h2: {
            fontWeight: 900,
            fontSize: '2rem',
            letterSpacing: "-.05em",
        },
        h3: {
            fontWeight: 900,
            fontSize: '1.75rem'
        },
        h4: {
            fontWeight: 500,
            letterSpacing: -0.5,
            fontSize: '1.5rem'
        },
        body1: {
            fontWeight: 400,
            fontSize: '1.25rem',
            letterSpacing: "-.025em",
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
                    display: 'flex',
                    flexDirection: 'column',
                },
                body: {
                    minHeight: '100vh',  // Minimum height of the viewport
                    alignItems: 'center',
                    justifyContent: 'flex-start',  // Align content to the start
                },
                '#root': {
                    flex: '1 0 auto',  // Allows root to expand with content
                    overflow: 'auto',  // Allows scrolling within the root container
                },
                'main': {
                    flexGrow: 1,  // Allows main to expand and fill space
                    flex: '1 0 auto',
                    overflow: 'auto',  // Allows scrolling within the main content
                    marginTop: '2rem',
                }
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
        MuiAppBar: {
            styleOverrides: {
                root: {
                    flexShrink: 0,
                    height: 100,
                    maxWidth: '62.5rem !important',
                    padding: '0 2.5rem !important',
                    margin: '0 auto 8rem'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '0 !important',
                    height: 'inherit',
                    width: 'inherit',
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