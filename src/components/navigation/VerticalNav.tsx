import React from "react";
import {Box, Button, Hidden} from "@mui/material";
import {styled} from "@mui/material/styles";
import buttonsConfig from "../header/HeaderBar.tsx";

interface NavItemProps {
    label: string;
    sectionId: string;
}

const NavItem: React.FC<NavItemProps> = ({label, sectionId}) => {
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
        <NavButton onClick={handleNavigation}>
            {label}
        </NavButton>
    );
};

export const VerticalNav: React.FC = () => {
    return (
        <Hidden smDown>
            <NavContainer>
                {buttonsConfig.map(button => (
                    <NavItem key={button.sectionId} {...button} />
                ))}
            </NavContainer>
        </Hidden>
    );
};

const NavContainer = styled(Box)(({theme}) => ({
    position: 'fixed',
    left: '2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    zIndex: 10,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: '8px',
    boxShadow: theme.palette.mode === 'light'
        ? '0 2px 10px rgba(0, 0, 0, 0.05)'
        : '0 2px 10px rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const NavButton = styled(Button)(({theme}) => ({
    padding: '0.5rem 0.75rem',
    minWidth: 'unset',
    textAlign: 'left',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
    transition: 'all 0.2s ease',
    backgroundColor: 'transparent',
    position: 'relative',
    borderLeft: `2px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
    borderRadius: '0 4px 4px 0',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
    },
}));