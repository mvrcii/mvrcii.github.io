import React, {useEffect, useState} from 'react';
import {
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent
} from '@mui/lab';
import {LaptopMac} from '@mui/icons-material';
import styled from 'styled-components';
import {useTheme} from '@mui/material/styles';
import {Typography} from "@mui/material";

// Styled Components for layout and styling
const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${(props) => props.theme.palette.background.default};
`;

const TimelineWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20%; /* Reduced width for less prominence */
    height: 300px; /* Show only three items at a time */
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const ScrollingTimeline = styled.div<{ $scrollIndex: number }>`
    display: flex;
    flex-direction: column;
    transform: translateY(${(props) => -props.$scrollIndex * 100}px);
    transition: transform 0.5s ease;
`;


const ContentContainer = styled.div`
    width: 75%; /* Increased content width */
    margin-left: 25%;
    padding: 40px;
    overflow-y: scroll;
    background-color: ${(props) => props.theme.palette.background.paper};
    color: ${(props) => props.theme.palette.text.primary};
`;


const Section = styled.div<{ $isActive: boolean }>` 
    height: 100vh;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.palette.background.default};
    margin-bottom: 40px;
    background-color: ${(props) => (props.$isActive ? props.theme.palette.background.default : props.theme.palette.background.paper)};
    color: ${(props) => props.theme.palette.text.primary};
    transition: background-color 0.3s;
`;

// Define the type for a section
interface SectionType {
    id: string;
    year: string;
    content: string;
}

// Main scroll-synced timeline component
interface ScrollSyncedTimelineProps {
    sections: SectionType[];
}

const ScrollSyncedTimeline: React.FC<ScrollSyncedTimelineProps> = ({sections}) => {
    const theme = useTheme(); // Get theme for colors and typography
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [scrollIndex, setScrollIndex] = useState(0); // To track visible timeline items

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        const sectionIndex = sections.findIndex((section) => section.id === entry.target.id);
                        if (sectionIndex !== -1) {
                            setScrollIndex(Math.max(0, Math.min(sectionIndex - 1, sections.length - 3))); // Ensure only three items show
                        }
                    }
                });
            },
            {threshold: 0.6} // 60% visibility triggers the section as active
        );

        sections.forEach((section) => {
            const target = document.getElementById(section.id);
            if (target) observer.observe(target);
        });

        return () => {
            sections.forEach((section) => {
                const target = document.getElementById(section.id);
                if (target) observer.unobserve(target);
            });
        };
    }, [sections]);

    // Custom function for smooth scrolling
    const handleTimelineClick = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <Container theme={theme}>
            {/* Timeline wrapper that only shows three timeline items */}
            <TimelineWrapper>
                <ScrollingTimeline $scrollIndex={scrollIndex}>
                    {sections.map((section, index) => (
                        <TimelineItem
                            key={section.id}
                            sx={{minHeight: '100px', cursor: 'pointer'}}
                            onClick={() => handleTimelineClick(section.id)}
                        >
                            <TimelineOppositeContent
                                sx={{m: 'auto 0'}}
                                align="right"
                                variant="body2"
                                color={theme.palette.text.secondary}
                            >
                                {section.year}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {index > 0 &&
                                    <TimelineConnector style={{backgroundColor: theme.palette.text.secondary}}/>}
                                <TimelineDot color={activeSection === section.id ? 'secondary' : 'primary'}>
                                    <LaptopMac style={{color: theme.palette.text.primary}}/>
                                </TimelineDot>
                                {index < sections.length - 1 &&
                                    <TimelineConnector style={{backgroundColor: theme.palette.text.secondary}}/>}
                            </TimelineSeparator>
                            <TimelineContent sx={{m: 'auto 0'}} color={theme.palette.text.primary}>
                                {section.content}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </ScrollingTimeline>
            </TimelineWrapper>

            {/* Scrollable content on the right */}
            <ContentContainer theme={theme}>
                {sections.map((section) => (
                    <Section key={section.id} id={section.id} $isActive={activeSection === section.id} theme={theme}>
                        <Typography variant="h1">{section.year} - {section.content}</Typography>
                        <Typography variant="body1">This is the content for {section.content}. Scroll to see the
                            timeline sync with the content!</Typography>
                    </Section>
                ))}
            </ContentContainer>
        </Container>
    );
};

export default ScrollSyncedTimeline;
