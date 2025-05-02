import React from "react";
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import FullscreenSections from "./layout/FullscreenSections";
import SplitSection from "./layout/SplitSection";
import FullPageSection from "./layout/FullPageSection";
import AboutSection from "./sections/AboutSection";
import AwardsSection from "./sections/AwardsSection";
import PublicationsSection from "./sections/PublicationsSection";
import ChallengesSection from "./sections/ChallengesSection";
import EducationSection from "./sections/EducationSection";
import {Hero} from "./hero/Hero.tsx";

// Component for a full-width section with a centered heading
const SectionHeader = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        backgroundColor: theme.palette.secondary.main,
    },
}));

export function MainWrapper(): React.ReactElement {
    return (
        <FullscreenSections
            widthPercentage={100} // Set width to 75% of viewport
            heightPercentage={100} // Set height to 75% of viewport
        >
            {/* First section: Hero + About */}
            <SplitSection
                id="home"
                leftContent={
                    <Hero/>
                }
                rightContent={
                    <AboutSection/>
                }
            />

            {/* Second section: Awards */}
            <SplitSection
                id="awards"
                reverse={true}
                leftContent={
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: (theme) => theme.palette.primary.main + '22', // Add transparency
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h2"
                                    sx={{
                                        transform: 'rotate(-90deg)',
                                        color: (theme) => theme.palette.primary.main,
                                        fontWeight: 'bold',
                                        fontSize: '2.5rem',
                                        whiteSpace: 'nowrap',
                                    }}
                        >
                            ACHIEVEMENTS
                        </Typography>
                    </Box>
                }
                rightContent={
                    <AwardsSection/>
                }
            />

            {/* Third section: Publications - Full page section */}
            <FullPageSection id="publications" centerContent>
                <SectionHeader variant="h1">Publications</SectionHeader>
                <PublicationsSection/>
            </FullPageSection>

            {/* Fourth section: Education */}
            <SplitSection
                id="education"
                leftContent={
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: (theme) => theme.palette.primary.main + '22', // Add transparency
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h2"
                                    sx={{
                                        transform: 'rotate(-90deg)',
                                        color: (theme) => theme.palette.primary.main,
                                        fontWeight: 'bold',
                                        fontSize: '2.5rem',
                                        whiteSpace: 'nowrap',
                                    }}
                        >
                            EDUCATION
                        </Typography>
                    </Box>
                }
                rightContent={
                    <EducationSection/>
                }
            />

            {/* Fifth section: Challenges - Horizontal scrolling section */}
            <FullPageSection
                id="challenges"
                padding={2} // Reduced padding for horizontal scrolling
            >
                <ChallengesSection/>
            </FullPageSection>

            {/* You can add more sections following the same patterns */}
        </FullscreenSections>
    );
}