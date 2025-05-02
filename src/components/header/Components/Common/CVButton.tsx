import resume from "../../../../assets/resume.pdf";
import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

export function CVButton() {
    return (
        <a href={resume} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <StyledCVButton
                variant="contained"
                color="primary"
            >
                <IconWrapper>
                    <SchoolIcon/>
                </IconWrapper>
                <span>CV</span>
            </StyledCVButton>
        </a>
    );
}

// Use a custom wrapper for the icon with its own styling
const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1.25),
    '& svg': {
        fill: 'currentColor',
        fontSize: '1.25rem',
    }
}));

const StyledCVButton = styled(Button)(({ theme }) => ({
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.default,
    border: `0.125rem solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    padding: '0.5rem 1rem',
    transition: 'color 0.2s ease-out, background-color 0.2s ease-out',
    display: 'flex',
    alignItems: 'center',

    // Override Material UI's default styling
    '& .MuiButton-startIcon': {
        color: 'inherit',
    },

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    },
}));