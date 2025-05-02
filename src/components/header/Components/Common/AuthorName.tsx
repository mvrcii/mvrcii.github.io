import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import React from "react";

const StyledAuthorName = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: '"Marcellus", serif',
    position: 'relative',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '25%',
        height: '2px',
        bottom: '-4px',
        left: '50%',
        backgroundColor: theme.palette.primary.main,
        transform: 'translateX(-50%)',
        transition: 'width 0.2s ease, opacity 0.2s ease',
        opacity: 0,
    },
    '&:hover::after': {
        width: '125%',
        opacity: 0.9, // More visible underline
    }
}));

interface AuthorNameProps {
    children: React.ReactNode;
}

// Component definition
const AuthorName: React.FC<AuthorNameProps> = ({children}) => {
    // Function to handle the click event
    const handleAuthorClick = () => {
        window.history.pushState(null, "", "/"); // Set URL to root without reloading the page
        // Scroll to the top of the page with smooth animation
        document.getElementsByTagName("main")[0]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <StyledAuthorName variant="h2" onClick={handleAuthorClick}>
            {children}
        </StyledAuthorName>
    );
};

export default AuthorName;