import React from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    overflow: 'auto',
    maxWidth: '60%',
    textAlign: 'justify'
});

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
    maxWidth: '100%',
    '&:last-child': {
        marginBottom: 0,
    },
}));

const AboutSection: React.FC = () => {
  return (
    <SectionBox>
      <SectionTitle variant="h2">About Me</SectionTitle>

      <Paragraph variant="body1">
        My name is Marcel Roth. I'm an M.Sc. student in Computer Science at the Julius-Maximilians-Universität Würzburg,
        specializing in Machine Learning, Computer Vision, Explainability, and Medical Imaging.
      </Paragraph>

      <Paragraph variant="body1">
        I thrive in challenging, complex domains – it feels as natural to me as breathing.
      </Paragraph>

        <Paragraph variant="body1">I approach research with the mindset that meaningful solutions emerge through persistence, curiosity,
        and a deep understanding of the problem space.</Paragraph>

      <Paragraph variant="body1">
        Some things I’ve learned (the hard way):
        <ul>
          <li>Complex problems are best solved in a focused duo.</li>
          <li>Clear, direct communication is a force multiplier.</li>
          <li>If your results look weird, check for double sigmoid — I’ve been there.</li>
          <li>Good architecture can’t fix bad data.</li>
          <li>Ancient Herculaneum scrolls are smaller than you think.</li>
        </ul>
      </Paragraph>
    </SectionBox>
  );
};

export default AboutSection;
