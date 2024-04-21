import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export function Footer(): React.ReactElement {
    return (
        <StyledBox component='footer'>
            <StyledContainer sx={{margin: '0 auto'}}>
                <Typography variant='h4'>
                    © {new Date().getFullYear()} Marcel Roth
                </Typography>
            </StyledContainer>
        </StyledBox>
    );
}

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    position: 'relative'
}));

const StyledContainer = styled(Container)(({theme}) => ({
    minHeight: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTypography-root': {
        color: theme.palette.background.default,
    },
}));