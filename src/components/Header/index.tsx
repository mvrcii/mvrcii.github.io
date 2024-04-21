import React from 'react';
import {AppBar as MuiAppBar, Box, Button, Container, Toolbar as MuiToolbar, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import resume from '../../assets/resume.pdf';

export function Header(): React.ReactElement {
    return (
        <Container component="header" sx={{margin: '0 auto'}}>
            <AppBar position="static">
                <Toolbar>
                    <AuthorName>Marcel Roth</AuthorName>
                    <Box>
                        <NavigationButton label="About" sectionId="about"/>
                        <NavigationButton label="GitHub" sectionId="github"/>
                        <NavigationButton label="Projects" sectionId="projects"/>
                        <CVButton/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

const AppBar = styled(MuiAppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'none',
    boxShadow: 'none',
    minHeight: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Toolbar = styled(MuiToolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minHeight: '100px',
});


const AuthorName = styled(Typography)(({theme}) => ({
    fontSize: '2rem',
    fontWeight: 900,
    color: theme.palette.text.primary,  // Using color from the theme
    flexGrow: 1,
}));


interface NavigationButtonProps {
    label: string;
    sectionId: string;
}

function NavigationButton(props: NavigationButtonProps) {

    function handleNavigation(sectionId: string) {
        scrollToSection(sectionId, () => {
            window.location.hash = sectionId;  // Update the hash after scrolling is complete
        });
    }

    function scrollToSection(sectionId: string, callback: () => void) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 64;
            const bodyRect = document.body.getBoundingClientRect().top;
            const sectionRect = section.getBoundingClientRect().top;
            const sectionPosition = sectionRect - bodyRect;
            const offsetPosition = sectionPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Ensure hash is updated after the scroll
            section.addEventListener('scroll', function onScroll() {
                if (Math.abs(window.scrollY - offsetPosition) < 10) {
                    window.removeEventListener('scroll', onScroll);
                    callback();
                }
            });
        }
    }

    function handleClick() {
        handleNavigation(props.sectionId);
    }

    return (
        <StyledNavigationButton disableRipple onClick={handleClick}>
            {props.label}
        </StyledNavigationButton>
    );
}

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
    '&:active': {

    }
}));

function CVButton() {
    return (
        <a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <StyledCVButton variant="contained" color="primary">
                Resume
            </StyledCVButton>
        </a>
    );
}

const StyledCVButton = styled(Button)(({theme}) => ({
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.default,
    border: `0.125rem solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    padding: '0.5rem 1.5rem',
    transition: '20ms ease-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    }
}));