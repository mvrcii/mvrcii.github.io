import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export function FooterBar(): React.ReactElement {
    return (
        <FooterBox component='footer'>
            <StyledContainer>
                <Typography variant='h4'>
                    © {new Date().getFullYear()} Marcel Roth
                </Typography>
            </StyledContainer>
        </FooterBox>
    );
}

const FooterBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    position: 'fixed', // Change from 'relative' to 'fixed'
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 100, // Ensure it appears above other content
    height: '120px',
}));

const StyledContainer = styled(Container)(({theme}) => ({
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',

    '& .MuiTypography-root': {
        color: theme.palette.background.default,
    },
}));