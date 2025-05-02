import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material';
import {darkTheme, lightTheme} from './themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

const THEME_STORAGE_KEY = 'portfolio-theme-preference';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    // Initialize theme from localStorage or fallback to dark theme
    const [mode, setMode] = useState<ThemeMode>(() => {
        // Try to get the saved theme from localStorage
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
        }
        // Default to dark theme if no saved preference
        return 'dark';
    });

    // Update localStorage when theme changes
    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(() => {
        return mode === 'light' ? lightTheme : darkTheme;
    }, [mode]);

    const contextValue = useMemo(() => {
        return {mode, toggleTheme};
    }, [mode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};