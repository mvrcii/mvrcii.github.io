import resume from "../../../../assets/resume.pdf";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export function CVButton() {
    return (
        <a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <StyledCVButton
                variant="contained"
                color="primary"
                size="small"
            >
                <span>CV</span>
            </StyledCVButton>
        </a>
    );
}

const StyledCVButton = styled(Button)(({theme}) => ({
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.background.default,
    border: `0.125rem solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    padding: '4px 8px',
    height: '32px',
    minWidth: 'auto',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease-out, background-color 0.2s ease-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiButton-startIcon': {
        color: 'inherit',
    },

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    },
}));
