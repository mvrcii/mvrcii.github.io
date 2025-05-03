import React from "react";
import FullscreenSections from "./layout/FullscreenSections";
import SplitSection from "./layout/SplitSection";
import FullPageSection from "./layout/FullPageSection";
import AboutSection from "./sections/AboutSection";
import {Hero} from "./hero/Hero.tsx";
import AwardSection from "./sections/AwardsSection.tsx";
import ProjectSection from "./sections/projectSection/ProjectSection.tsx";
import SectionMarginWrapper from "./layout/SectionMarginWrapper.tsx";

export function MainWrapper(): React.ReactElement {
    return (
        <SectionMarginWrapper>
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

                <FullPageSection id="awards" centerContent={true}>
                    <AwardSection/>
                </FullPageSection>

                <FullPageSection id="projects" centerContent={true}>
                    <ProjectSection/>
                </FullPageSection>

            </FullscreenSections>
        </SectionMarginWrapper>
    );
}