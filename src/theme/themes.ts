import {createTheme, Theme} from "@mui/material";

const headerSize = 100;

const createBaseTheme = (mode: 'light' | 'dark'): Theme => {
    return createTheme({
        typography: {
            fontFamily: '"Roboto", Arial, sans-serif',
            h1: {
                fontWeight: 700,
                letterSpacing: "-.05em",
                lineHeight: "90%",
                fontSize: '3.5rem',
                marginBottom: '0.5rem',
                fontFamily: '"Marcellus", serif',
            },
            h2: {
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: "-.05em",
                fontFamily: '"Marcellus", serif',
            },
            h3: {
                fontWeight: 900,
                fontSize: '2rem'
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
            mode,
            ...(mode === 'light'
                ? {
                    // Light mode colors
                    primary: {
                        main: '#121212',
                    },
                    secondary: {
                        main: '#dc4823',
                    },
                    background: {
                        default: '#fafafa',
                        paper: '#f5f5f5',
                    },
                    text: {
                        primary: '#121212',
                        secondary: '#555555',
                    },
                }
                : {
                    // Dark mode colors
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
                }),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
          html, body, #root {
            height: 100vh;
            width: 100vw;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
          body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          #root {
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }
        `,
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
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        padding: 0,
                        '&:hover': {
                            backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        flexShrink: 0,
                        height: headerSize,
                        width: '100%',
                        maxWidth: '100vw !important',  // Updated to take full width
                        padding: '0 1.5rem !important', // Adjusted padding
                        marginBottom: 0, // Remove bottom margin
                        position: 'fixed', // Make the header fixed
                        zIndex: 1100, // Ensure it stays above content
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
                        maxWidth: '100% !important', // Full width containers
                        height: '100%',
                        padding: '0 1.5rem !important',
                        margin: 0,
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fill: mode === 'light' ? '#121212' : '#fafafa',
                        fontSize: '2rem',
                    },
                },
            }
        }
    });
};

export const lightTheme = createBaseTheme('light');
export const darkTheme = createBaseTheme('dark');