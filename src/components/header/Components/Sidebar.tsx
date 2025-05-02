import {Box, Hidden, IconButton, SwipeableDrawer} from "@mui/material";
import {CVButton} from "./Common/CVButton.tsx";
import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import {NavButton} from "./Common/NavButton.tsx";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import buttonsConfig from "../HeaderBar.tsx";

export const Sidebar: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <Hidden mdUp>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={openSidebar}
            >
                <MenuOutlinedIcon/>
            </IconButton>

            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                variant="temporary"
                anchor={'top'}
                open={isSidebarOpen}
                onOpen={openSidebar}
                onClose={closeSidebar}
                ModalProps={{keepMounted: true}}
            >
                <DrawerContainer>
                    {buttonsConfig.map(button => (
                        <NavButton key={button.sectionId} {...button} onClick={closeSidebar}/>
                    ))}
                    <Box sx={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                        <CVButton/>
                    </Box>
                </DrawerContainer>
            </SwipeableDrawer>
        </Hidden>
    );
}

const DrawerContainer = styled(Box)(({theme}) => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: theme.palette.background.default,

    '& .MuiButton-root': {
        fontFamily: '"Marcellus", serif',
        fontSize: '3rem !important',
        marginRight: 0,
    },
    '& a > .MuiButton-root': {
        padding: '4px',
        lineHeight: '72px',
        border: 'none',
    }
}));