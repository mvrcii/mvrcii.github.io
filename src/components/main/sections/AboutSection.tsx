import React from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'auto',
  padding: theme.spacing(4, 0),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 700,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  fontSize: '1.1rem',
  lineHeight: 1.6,
  maxWidth: '90%',
  '&:last-child': {
    marginBottom: 0,
  },
}));

const AboutSection: React.FC = () => {
  return (
    <SectionBox>
      <SectionTitle variant="h2">About Me</SectionTitle>

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
    </SectionBox>
  );
};

export default AboutSection;