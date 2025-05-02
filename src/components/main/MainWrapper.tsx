import React from "react";
import { Box } from "@mui/material";
import { Hero } from "./hero/Hero.tsx";
import AboutSection from "./sections/AboutSection";
import AwardsSection from "./sections/AwardsSection";
import PublicationsSection from "./sections/PublicationsSection.tsx";
import { styled } from "@mui/material/styles";

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(12), // Large spacing between major sections
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

export function MainWrapper(): React.ReactElement {
  return (
    <Box>
      <Hero />

      <ContentWrapper>
        <AboutSection />
        <AwardsSection />
        <PublicationsSection />
      </ContentWrapper>
    </Box>
  );
}