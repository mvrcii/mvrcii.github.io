import React, {useState} from "react";
import {Alert, Box, Hidden, IconButton, Snackbar} from "@mui/material";
import {CVButton} from "./Common/CVButton";
import {styled} from "@mui/material/styles";

// Import icons from MUI Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Toolbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('marcelroth100@aol.com');
            setOpen(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Hidden mdDown>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 1,
                    }}
                >
                    <CVButton/>

                    <IconContainer>
                        <StyledIconButton
                            component="a"
                            href="https://www.linkedin.com/in/mvrcelroth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            size="small"
                        >
                            <LinkedInIcon fontSize="small"/>
                        </StyledIconButton>

                        <StyledIconButton
                            component="a"
                            href="https://github.com/mvrcii"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            size="small"
                        >
                            <GitHubIcon fontSize="small"/>
                        </StyledIconButton>

                        <StyledIconButton
                            component="span"
                            onClick={handleCopyEmail}
                            aria-label="Copy Email"
                            size="small"
                        >
                            <MailOutlineIcon fontSize="small"/>
                        </StyledIconButton>
                    </IconContainer>
                </Box>
            </Hidden>

            <Snackbar
                open={open}
                autoHideDuration={1500}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Email address copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

const IconContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    borderRadius: '0.5rem',
    padding: theme.spacing(0.5),
    width: 28,
    height: 28,
    transition: 'transform 100ms ease, background-color 100ms ease, color 20ms ease',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        transform: 'scale(1.1)',
    },
    '& .MuiSvgIcon-root': {
        fontSize: 24,         // match to your button size
    },
}));
