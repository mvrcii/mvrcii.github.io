import React from "react";
import FullscreenSections from "./layout/FullscreenSections";
import SplitSection from "./layout/SplitSection";
import FullPageSection from "./layout/FullPageSection";
import AboutSection from "./sections/AboutSection";
import {Hero} from "./hero/Hero.tsx";
import AwardsSection from "./sections/AwardsSection.tsx";
import ChallengesSection from "./sections/ChallengesSection.tsx";

export function MainWrapper(): React.ReactElement {
    return (
        <FullscreenSections
            widthPercentage={100}
            heightPercentage={100}
        >
            {/* First section: Hero + About */}
            <SplitSection
                id="about"
                ratio={0.4}
                leftContent={
                    <Hero/>
                }
                rightContent={
                    <AboutSection/>
                }
            />

            <FullPageSection id="projects" centerContent={false}>
                <AwardsSection/>
            </FullPageSection>

            <FullPageSection
                id="challenges"
                padding={2} // Reduced padding for horizontal scrolling
            >
                <ChallengesSection/>
            </FullPageSection>

        </FullscreenSections>
    );
}