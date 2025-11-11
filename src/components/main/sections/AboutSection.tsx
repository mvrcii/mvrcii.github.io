import React from 'react';
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

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

const StyledList = styled('ul')(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2.5),
    fontSize: '1.1rem',
    lineHeight: 1.6,
    paddingLeft: theme.spacing(3),
    '& li': {
        marginBottom: theme.spacing(0.5),
    },
}));

const AboutSection: React.FC = () => {
  return (
    <SectionBox>
      <SectionTitle variant="h2">About Me</SectionTitle>

      <Paragraph variant="body1">
        My name is Marcel Roth. I'm a Machine Learning Engineer who recently completed my M.Sc. in Computer Science
        (Grade: 1.1 with distinction) at the Julius-Maximilians-Universität Würzburg.
      </Paragraph>

      <Paragraph variant="body1">
        Most recently, I built deep learning models that revealed the first readable title from a 2,000-year-old scroll
        buried by Mount Vesuvius – turning carbonized papyrus into legible ancient text for the first time in two millennia.
      </Paragraph>

      <Paragraph variant="body1">
        Some things I've learned (the hard way):
      </Paragraph>

      <StyledList>
        <li>Complex problems are best solved in a focused duo.</li>
        <li>Clear, direct communication is a force multiplier.</li>
        <li>If your results look weird, check for double sigmoid — I've been there.</li>
        <li>Good architecture can't fix bad data.</li>
        <li>Ancient Herculaneum scrolls are smaller than you think.</li>
      </StyledList>
    </SectionBox>
  );
};

export default AboutSection;
