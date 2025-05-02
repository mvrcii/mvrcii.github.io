import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const SectionBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
    padding: theme.spacing(4, 0),
}));

const SectionTitle = styled(Typography)(({theme}) => ({
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

const TimelineContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
}));

const TimelineItemContainer = styled(Box)({
    display: 'flex',
    position: 'relative',
});

const YearColumn = styled(Box)(({theme}) => ({
    width: '120px',
    paddingRight: theme.spacing(2),
    textAlign: 'right',
    flexShrink: 0,
}));

const YearText = styled(Typography)({
    fontWeight: 600,
    whiteSpace: 'nowrap',
});

const ConnectorColumn = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60px',
    position: 'relative',
    flexShrink: 0,
});

const StyledAvatar = styled(Avatar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
    zIndex: 1,
}));

const SecondaryAvatar = styled(Avatar)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    width: 40,
    height: 40,
    zIndex: 1,
}));

const Connector = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isLast',
})<{ isLast: boolean }>(({theme, isLast}) => ({
    width: '2px',
    backgroundColor: theme.palette.divider,
    height: isLast ? '0' : '100%',
    position: 'absolute',
    top: 40,
    bottom: 0,
}));

const ContentColumn = styled(Box)(({theme}) => ({
    padding: theme.spacing(0, 2, 2, 2),
    flex: 1,
}));

const InstitutionText = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
}));

const DegreeText = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(0.5),
}));

const DescriptionText = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
}));

// Education data
const educationData = [
    {
        id: 1,
        year: '2022 - Present',
        institution: 'Example University',
        degree: 'Ph.D. in Computer Science',
        description: 'Specializing in Computer Vision and Machine Learning, with a focus on AI Explainability and Self-Supervised Learning.',
        type: 'education'
    },
    {
        id: 2,
        year: '2020 - 2022',
        institution: 'Example University',
        degree: 'M.Sc. in Computer Science',
        description: 'Graduated with distinction. Thesis on Deep Learning techniques for Medical Image Analysis.',
        type: 'education'
    },
    {
        id: 3,
        year: '2023 - Present',
        institution: 'AI Research Lab',
        degree: 'Research Scientist',
        description: 'Leading projects in computer vision and developing novel explainability methods for neural networks.',
        type: 'work'
    },
    {
        id: 4,
        year: '2016 - 2020',
        institution: 'Example University',
        degree: 'B.Sc. in Computer Science',
        description: 'Graduated with honors. Focus on algorithms and data structures.',
        type: 'education'
    }
];

const EducationSection: React.FC = () => {
    // Sort education data chronologically (newest first)
    const sortedData = [...educationData].sort((a, b) => {
        // Extract the first year from the range (e.g., "2022 - Present" -> 2022)
        const yearA = parseInt(a.year.split(' ')[0]);
        const yearB = parseInt(b.year.split(' ')[0]);
        return yearB - yearA; // Descending order
    });

    return (
        <SectionBox>
            <SectionTitle variant="h2">Education & Experience</SectionTitle>

            <TimelineContainer>
                {sortedData.map((item, index) => (
                    <TimelineItemContainer key={item.id}>
                        <YearColumn>
                            <YearText variant="body2">{item.year}</YearText>
                        </YearColumn>

                        <ConnectorColumn>
                            {item.type === 'education' ? (
                                <StyledAvatar>
                                    <SchoolIcon/>
                                </StyledAvatar>
                            ) : (
                                <SecondaryAvatar>
                                    <WorkIcon/>
                                </SecondaryAvatar>
                            )}
                            <Connector isLast={index === sortedData.length - 1}/>
                        </ConnectorColumn>

                        <ContentColumn>
                            <InstitutionText variant="h6">{item.institution}</InstitutionText>
                            <DegreeText variant="body1">{item.degree}</DegreeText>
                            <DescriptionText variant="body2">{item.description}</DescriptionText>
                        </ContentColumn>
                    </TimelineItemContainer>
                ))}
            </TimelineContainer>
        </SectionBox>
    );
};

export default EducationSection;