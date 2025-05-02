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
    '&:hover': {
        color: theme.palette.text.primary, // Maintain text color
        textShadow: `0 0 10px ${theme.palette.secondary.main}80, 0 0 15px ${theme.palette.secondary.main}40`, // More vibrant glow with multiple shadows
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px',
        bottom: '-4px',
        left: '50%',
        backgroundColor: theme.palette.secondary.main,
        transform: 'translateX(-50%)',
        transition: 'width 0.3s ease, opacity 0.3s ease',
        opacity: 0,
    },
    '&:hover::after': {
        width: '100%',
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
        // Clear the URL hash to ensure we're going to the top
        window.history.pushState(null, "", "/");

        // Get our sections container and scroll to the top with smooth behavior
        const sectionsContainer = document.querySelector("[id^='section-']")?.parentElement;

        if (sectionsContainer) {
            // Scroll the sections container to the top (first section)
            sectionsContainer.scrollTo({
                top: 0,
                behavior: 'smooth',
                // Using smooth to maintain the nice scroll animation
            });
        } else {
            // Fallback to scrolling the document if our container isn't found
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <StyledAuthorName variant="h2" onClick={handleAuthorClick}>
            {children}
        </StyledAuthorName>
    );
};

export default AuthorName;