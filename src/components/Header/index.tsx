import React from 'react';
import {AppBar as MuiAppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import {CVButton} from "./CVButton.tsx";

export function Header(): React.ReactElement {
    const handleAuthorClick = () => {
        window.history.pushState(null, "", "/");  // Set URL to root without reloading the page
        // Scroll to the top of the page
        document.getElementsByTagName("main")[0]?.scrollIntoView({
            behavior: 'instant',
            block: 'start'
        });
    };

    return (
        <AppBar position="sticky" id="header">
            <Toolbar>
                <AuthorName variant="h2" onClick={handleAuthorClick}>Portfolio</AuthorName>
                <Box>
                    <NavigationButton label="About" sectionId="about"/>
                    <NavigationButton label="GitHub" sectionId="github"/>
                    <NavigationButton label="Projects" sectionId="projects"/>
                    <CVButton/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

const AppBar = styled(MuiAppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'none',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const AuthorName = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    cursor: 'pointer',
    flexGrow: 1,
    userSelect: 'none',
}));


interface NavigationButtonProps {
    label: string;
    sectionId: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({label, sectionId}) => {

    const handleNavigation = () => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Updates URL without causing a scroll
            window.history.pushState(null, "", `#${sectionId}`);
        }
    };

    return (
        <StyledNavigationButton disableRipple onClick={handleNavigation}>
            {label}
        </StyledNavigationButton>
    );
};

const StyledNavigationButton = styled(Button)(({theme}) => ({
    marginRight: '4rem',
    padding: '0',
    minWidth: 'unset',
    animation: 'fadeIn 300ms ease-out',
    color: theme.palette.text.primary,
    fontSize: '1rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 0,
    '&::before': {
        content: '""', // Required for the pseudo-element to show
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 0,
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0px',
        transition: 'width 0.15s ease-in-out',
    },
    '&:hover::before': {
        width: '100%', // Full width on hover
    },
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
    },
    '&:active': {}
}));

