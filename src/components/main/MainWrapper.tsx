import React from "react";
import FullscreenSections from "./layout/FullscreenSections";
import SplitSection from "./layout/SplitSection";
import FullPageSection from "./layout/FullPageSection";
import AboutSection from "./sections/AboutSection";
import AwardsSection from "./sections/AwardsSection";
import {Hero} from "./hero/Hero.tsx";

export function MainWrapper(): React.ReactElement {
    return (
        <FullscreenSections
            widthPercentage={100} // Set width to 75% of viewport
            heightPercentage={100} // Set height to 75% of viewport
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

            <FullPageSection id="projects" centerContent={true}>
                <AwardsSection/>
            </FullPageSection>




        </FullscreenSections>
    );
}