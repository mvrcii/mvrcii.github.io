import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import React from "react";

const StyledAuthorName = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: '"Marcellus", serif',
}));

interface AuthorNameProps {
    children: React.ReactNode;
}

// Component definition
const AuthorName: React.FC<AuthorNameProps> = ({children}) => {
    // Function to handle the click event
    const handleAuthorClick = () => {
        window.history.pushState(null, "", "/"); // Set URL to root without reloading the page
        // Scroll to the top of the page
        document.getElementsByTagName("main")[0]?.scrollIntoView({
            behavior: 'instant',
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