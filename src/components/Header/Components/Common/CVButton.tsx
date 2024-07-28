import resume from "../../../../assets/resume.pdf";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export function CVButton() {
    return (
        <a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <StyledCVButton variant="contained" color="primary">
                Resume
            </StyledCVButton>
        </a>
    );
}

const StyledCVButton = styled(Button)(({theme}) => ({
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.default,
    border: `0.125rem solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    padding: '0.5rem 1.5rem',
    transition: '20ms ease-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    }
}));