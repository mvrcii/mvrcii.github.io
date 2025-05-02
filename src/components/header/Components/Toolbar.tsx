import React from "react";
import {Box, Hidden} from "@mui/material";
import {CVButton} from "./Common/CVButton.tsx";

export const Toolbar: React.FC = () => {

    return (
        <Hidden mdDown>
            <Box sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <CVButton/>
            </Box>

            {/* AuthorName is rendered in the center via the parent component */}
        </Hidden>
    );
}

