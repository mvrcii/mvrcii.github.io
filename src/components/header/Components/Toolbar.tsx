import React from "react";
import {Box, Hidden} from "@mui/material";
import {CVButton} from "./Common/CVButton.tsx";
import {NavButton} from "./Common/NavButton.tsx";
import AuthorName from "./Common/AuthorName.tsx";
import buttonsConfig from "../HeaderBar.tsx";

export const Toolbar: React.FC = () => {

    return (
        <Hidden mdDown>
            <AuthorName>Marcel Roth</AuthorName>
            <Box>
                {buttonsConfig.map(button => (
                    <NavButton key={button.sectionId} {...button} />
                ))}
                <CVButton/>
            </Box>
        </Hidden>
    );
}

