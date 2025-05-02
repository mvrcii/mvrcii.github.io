import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {styled} from '@mui/material/styles';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {useTheme} from '../../theme/ThemeContext';

export const ThemeToggle: React.FC = () => {
    const {mode, toggleTheme} = useTheme();

    return (
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <StyledIconButton
                onClick={toggleTheme}
                aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
                {mode === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}
            </StyledIconButton>
        </Tooltip>
    );
};

const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
    '& svg': {
        fontSize: '1.5rem',
    }
}));