import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";

interface NavButtonProps {
    label: string;
    sectionId: string;
    onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({label, sectionId, onClick}) => {

    const [isVisible, setIsVisible] = useState(false);

    // Check if the element exists in the DOM
    useEffect(() => {
        const section = document.getElementById(sectionId);
        setIsVisible(!!section); // Sets isVisible to true if section exists, false otherwise
    }, [sectionId]); // Dependency array ensures this runs only when sectionId changes

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
        onClick && onClick();
    };

    return isVisible ? (
        <StyledNavButton disableRipple onClick={handleNavigation}>
            {label}
        </StyledNavButton>
    ) : null;
};

const StyledNavButton = styled(Button)(({theme}) => ({
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