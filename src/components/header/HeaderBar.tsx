import React from 'react';
import {Toolbar} from "./Components/Toolbar.tsx";
import {styled} from "@mui/material/styles";
import {AppBar as MuiAppBar, Box, Toolbar as MuiToolbar} from "@mui/material";
import {Sidebar} from "./Components/Sidebar.tsx";
import {ThemeToggle} from "../common/ThemeToggle.tsx";

const buttonsConfig = [
    {label: 'About', sectionId: 'about'},
    {label: 'Education', sectionId: 'education'},
    {label: 'Challenges', sectionId: 'challenges'},
];

export function HeaderBar(): React.ReactElement {
    return (
        <StyledAppBar position="sticky" id="header">
            <MuiToolbar>
                <Toolbar/>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <ThemeToggle/>
                    <Sidebar/>
                </Box>
            </MuiToolbar>
        </StyledAppBar>
    );
}

const StyledAppBar = styled(MuiAppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'none',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export default buttonsConfig;

