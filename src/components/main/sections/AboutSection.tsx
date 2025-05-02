import React from 'react';
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about">
      <Typography variant="h1" gutterBottom>About Me</Typography>

      <Paragraph variant="body1">
        My name is Marcel Roth, I am a Machine Learning Researcher specialized in Computer Vision
        and Medical Imaging. I'm currently working on AI Safety and Explainability methods to make
        neural networks more transparent and trustworthy.
      </Paragraph>

      <Paragraph variant="body1">
        I am also a member of the [Research Group Name] at [University/Company], where we develop
        innovative approaches to [specific research area]. Our work focuses on bridging the gap
        between theoretical AI advances and real-world applications.
      </Paragraph>

      <Paragraph variant="body1">
        For the past [time period], I've been working on [current project],
        which has been a rewarding journey combining technical innovation with practical impact.
      </Paragraph>

      <Paragraph variant="body1">
        I find it more fruitful to approach problems by thinking outside conventional boundaries
        and drawing inspiration from diverse fields to create elegant solutions.
      </Paragraph>
    </SectionContainer>
  );
};

export default AboutSection;