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
                paddingTop: '1rem'
            },
            h2: {
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: "-.05em",
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
                        minHeight: '100vh',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    },
                    '#root': {
                        flex: '1 0 auto',
                        overflow: 'auto',
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
                        height: 100,
                        width: '100%',
                        maxWidth: '62.5rem !important',
                        padding: '0 2.5rem !important',
                        margin: '0 auto 4rem',
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
                        margin: '0 auto 8rem',
                        scrollMargin: `${headerSize}px`
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
            },
            MuiSnackbar: {
                styleOverrides: {
                    root: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }
            },
            MuiAlert: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#f5f5f5' : '#333333',
                        color: mode === 'light' ? '#121212' : '#fafafa',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center'
                    },
                    message: {
                        color: mode === 'light' ? '#121212' : '#fafafa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    action: {
                        color: mode === 'light' ? '#121212' : '#fafafa',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '7px 0 7px 0',
                        marginLeft: '12px',
                    }
                }
            },
        }
    });
};

export const lightTheme = createBaseTheme('light');
export const darkTheme = createBaseTheme('dark');