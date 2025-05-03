import React from 'react';
import {styled} from "@mui/material/styles";
import {AppBar as MuiAppBar, Box, Toolbar as MuiToolbar} from "@mui/material";
import {Sidebar} from "./Components/Sidebar.tsx";
import {ThemeToggle} from "../common/ThemeToggle.tsx";
import AuthorName from "./Components/Common/AuthorName.tsx";
import {Toolbar} from "./Components/Toolbar.tsx";

const buttonsConfig = [
    {label: 'About', sectionId: 'about'},
    {label: 'Awards', sectionId: 'awards'},
    {label: 'Projects', sectionId: 'projects'}
];

export function HeaderBar(): React.ReactElement {
    return (
        <StyledAppBar position="sticky" id="header">
            <MuiToolbar>
                {/* Left side - CV Button via Toolbar component */}
                <LeftContainer>
                    <Toolbar/>
                </LeftContainer>

                {/* Center - Author Name */}
                <CenteredContainer>
                    <AuthorName>Marcel Roth</AuthorName>
                </CenteredContainer>

                <RightContainer>
                    <ThemeToggle/>
                    <Box sx={{display: {xs: 'flex', md: 'none'}, ml: 2}}>
                        <Sidebar/>
                    </Box>
                </RightContainer>
            </MuiToolbar>
        </StyledAppBar>
    );
}

const LeftContainer = styled(Box)({
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
});

const StyledAppBar = styled(MuiAppBar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'none',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const CenteredContainer = styled(Box)({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const RightContainer = styled(Box)({
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
});

export default buttonsConfig;