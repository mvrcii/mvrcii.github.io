import React, {useRef} from 'react';
import {Box, IconButton} from '@mui/material';
import {ArrowDownward} from '@mui/icons-material';
import {Hero} from '../components/main/hero/Hero.tsx'; // Import Hero component
import ScrollSyncedTimeline from './Timeline.tsx'; // Import the Timeline component
import {styled} from '@mui/material/styles'; // Import styled from MUI

// Styled components using MUI
const DownArrow = styled(IconButton)(({theme}) => ({
    color: theme.palette.secondary.main,
    fontSize: '3rem',
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
}));

// Page Wrapper to allow scrolling
const PageWrapper = styled('div')({
    position: 'relative',
    width: '100%',
    height: 'auto',  // Make the height auto to allow full scrolling
    overflowX: 'hidden',  // Hide horizontal scrolling
    overflowY: 'visible',  // Ensure vertical scrolling
});

const HeroSection = styled(Box)`
    height: 70vh; // Hero section will take full viewport height
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const MainContent = styled(Box)`  // Use transient prop $show
    padding: 2rem 2rem;
    background-color: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.text.primary};
    min-height: 100vh; // Ensure it extends beyond the viewport
    transition: opacity 0.5s ease-in;
`;

// Main Landing Page Component
const LandingPage: React.FC = () => {
    const firstSectionRef = useRef<HTMLDivElement>(null);  // Ref for scrolling to the first section
    const heroRef = useRef<HTMLDivElement>(null);  // Ref to track the hero section

    // Smooth scroll to the first section (the timeline)
    const handleScrollToFirstSection = () => {
        if (firstSectionRef.current) {
            firstSectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };


    const sections = [
        {id: 'section1', year: '2017', content: 'Event 1'},
        {id: 'section2', year: '2018', content: 'Event 2'},
        {id: 'section3', year: '2019', content: 'Event 3'},
        {id: 'section4', year: '2020', content: 'Event 4'},
        {id: 'section5', year: '2021', content: 'Event 5'},
    ];

    return (
        <PageWrapper>
            {/* Hero Section */}
            <HeroSection ref={heroRef}>
                <Hero/>
                <DownArrow onClick={handleScrollToFirstSection}>
                    <ArrowDownward fontSize="large"/>
                </DownArrow>
            </HeroSection>

            {/* ScrollSyncedTimeline is always rendered, but visibility is controlled */}
            <MainContent ref={firstSectionRef}>
                {/* Timeline and Sections */}
                <ScrollSyncedTimeline sections={sections}/>
            </MainContent>
        </PageWrapper>
    );
};

export default LandingPage;
