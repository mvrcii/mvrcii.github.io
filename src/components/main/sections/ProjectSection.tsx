// src/components/sections/ChallengesSection.tsx
import React from 'react';
import {Box, Card, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import HorizontalScrollSection from '../layout/HorizontalScrollSection';
import herzRadar from '../../../assets/herzRadar.png';

// Sample data for challenges/projects
const challengesData = [
    {
        id: 1,
        title: 'Vesuvius 2023 GrandPrize Challenge',
        description: '',
        image: herzRadar,
        technologies: ['Python', 'PyTorch'],
        date: '2023',
    },
    {
        id: 2,
        title: 'Medical Imaging Project',
        description:
            'Created an AI-powered diagnostic tool to assist radiologists in early disease detection.',
        image: '/path/to/challenge2.jpg', // Replace with actual path or import
        technologies: ['PyTorch', 'React', 'FastAPI'],
        date: '2023',
    }
];

const ProjectCard = styled(Card)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    boxShadow: theme.shadows[4],
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        // transform: 'translateY(-8px)',
        boxShadow: theme.shadows[8],
    },
}));

const StyledCardContent = styled(CardContent)(({theme}) => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
}));

const ProjectTitle = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
}));

const ProjectDate = styled(Typography)(({theme}) => ({
    fontWeight: 500,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
}));

const ProjectDescription = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(2),
    flexGrow: 1,
}));

const TagsContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.75),
}));

const StyledChip = styled(Chip)(({theme}) => ({
    backgroundColor: theme.palette.primary.main + '20',
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: '0.75rem',
}));


const ProjectSection: React.FC = () => {
    const getImageSrc = (imagePath: string) =>
        imagePath.startsWith('http') ||
        imagePath.startsWith('/') ||
        imagePath.startsWith('../')
            ? imagePath
            : 'https://via.placeholder.com/400x225';

    return (
        <HorizontalScrollSection title="Projects" itemWidth={100}>
            {challengesData.map((challenge) => (
                <Box key={challenge.id} sx={{height: '60%', px: '60px', py: '20px'}}>
                    <ProjectCard>
                        <CardMedia
                            component="img"                 // render an actual <img>
                            height="225"                    // lock height to 200px
                            src={getImageSrc(challenge.image)} // your imported URL or fallback
                            alt={challenge.title}
                            sx={{objectFit: 'cover'}}     // crop behavior
                        />
                        <StyledCardContent>
                            <ProjectTitle variant="h5">{challenge.title}</ProjectTitle>
                            <ProjectDate variant="subtitle2">{challenge.date}</ProjectDate>
                            <ProjectDescription variant="body2">
                                {challenge.description}
                            </ProjectDescription>
                            <TagsContainer>
                                {challenge.technologies.map((tech, i) => (
                                    <StyledChip key={i} label={tech} size="small"/>
                                ))}
                            </TagsContainer>
                        </StyledCardContent>
                    </ProjectCard>
                </Box>
            ))}
        </HorizontalScrollSection>
    );
};

export default ProjectSection;
