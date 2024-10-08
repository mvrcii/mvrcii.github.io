import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {Container, Typography} from "@mui/material";
import {LaptopMac} from "@mui/icons-material";

export function UniversityPhysics() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                2017
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot>
                    <LaptopMac color="warning"/>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>

            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    Eat
                </Typography>
                <Typography>Because you need strength</Typography>
            </TimelineContent>

        </TimelineItem>
    );
}

export function AboutMe(): React.ReactElement {
    return (
        <Container id="timeline">
            <Timeline position="alternate">

                <UniversityPhysics/>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}