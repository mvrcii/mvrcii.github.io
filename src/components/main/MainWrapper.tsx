import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {Hero} from "./hero/Hero.tsx";


export function MainWrapper(): React.ReactElement {
    return (
        <Box>
            <Hero/>

            <Container id="about">
                <Typography variant="h1">About me</Typography>
                <Typography variant="body1">Stay tuned! I'll soon share more about my background, experiences, and the
                    passions that drive my professional journey.</Typography>
            </Container>

            <Container id="education">
                <Typography variant="h1">Education</Typography>
                <Typography variant="body1">...</Typography>
            </Container>

            <Container id="challenges">
                <Typography variant="h1">Challenges</Typography>
                <Typography variant="body1">I’m currently compiling a detailed showcase of my projects, including
                    insights into the processes and technologies I've worked with. Check back soon for updates!
                </Typography>
            </Container>
        </Box>
    );
}