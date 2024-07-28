import React from 'react';
import {Toolbar} from "./Components/Toolbar.tsx";
import {styled} from "@mui/material/styles";
import {AppBar as MuiAppBar, Toolbar as MuiToolbar} from "@mui/material";
import {Sidebar} from "./Components/Sidebar.tsx";

const buttonsConfig = [
    {label: 'About', sectionId: 'about'},
    {label: 'Education', sectionId: 'education'},
    {label: 'Challenges', sectionId: 'challenges'},
    {label: 'Projects', sectionId: 'projects'}
];

export function Header(): React.ReactElement {
    return (
        <StyledAppBar position="sticky" id="header">
            <MuiToolbar>
                <Toolbar/>
                <Sidebar/>
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



