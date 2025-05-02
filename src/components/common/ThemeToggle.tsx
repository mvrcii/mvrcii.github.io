import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../theme/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <StyledIconButton onClick={toggleTheme} aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </StyledIconButton>
    </Tooltip>
  );
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: '1rem',
  transition: 'color 0.3s ease',
  '& svg': {
    fontSize: '1.5rem',
  }
}));