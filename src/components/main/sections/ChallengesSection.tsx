import React from 'react';
import {Box, Card, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import HorizontalScrollSection from '../layout/HorizontalScrollSection';

// Sample data for challenges/projects
const challengesData = [
    {
        id: 1,
        title: 'AI Vision Challenge',
        description: 'Developed a computer vision model to detect objects in real-time with 95% accuracy.',
        image: '/path/to/challenge1.jpg', // Replace with actual path
        technologies: ['TensorFlow', 'Python', 'OpenCV'],
        date: '2024'
    },
    {
        id: 2,
        title: 'Medical Imaging Project',
        description: 'Created an AI-powered diagnostic tool to assist radiologists in early disease detection.',
        image: '/path/to/challenge2.jpg', // Replace with actual path
        technologies: ['PyTorch', 'React', 'FastAPI'],
        date: '2023'
    },
    {
        id: 3,
        title: 'ML Explainability Research',
        description: 'Researched and implemented novel approaches to make black-box neural networks more transparent.',
        image: '/path/to/challenge3.jpg', // Replace with actual path
        technologies: ['SHAP', 'LIME', 'Python'],
        date: '2023'
    },
    {
        id: 4,
        title: 'Self-Supervised Learning Framework',
        description: 'Built a framework for training models on unlabeled data, reducing annotation requirements by 70%.',
        image: '/path/to/challenge4.jpg', // Replace with actual path
        technologies: ['PyTorch', 'BYOL', 'SimCLR'],
        date: '2022'
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
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[8],
    },
}));

const CardImageWrapper = styled(Box)({
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    overflow: 'hidden',
});

const StyledCardMedia = styled(CardMedia)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

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
    backgroundColor: theme.palette.primary.main + '20', // Semi-transparent primary color
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: '0.75rem',
}));

const ChallengesSection: React.FC = () => {
    // Use a placeholder image if no image is provided
    const getImageSrc = (imagePath: string) => {
        // If it's a full URL or a valid path, use it
        if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
            return imagePath;
        }
        // Otherwise use a placeholder
        return 'https://via.placeholder.com/400x225';
    };

    return (
        <HorizontalScrollSection
            title="Challenges & Projects"
            itemWidth={80} // Each item takes 80% of the container width
            id="challenges"
        >
            {challengesData.map((challenge) => (
                <Box key={challenge.id} sx={{height: '100%', padding: '20px'}}>
                    <ProjectCard>
                        <CardImageWrapper>
                            <StyledCardMedia
                                image={getImageSrc(challenge.image)}
                                title={challenge.title}
                            />
                        </CardImageWrapper>
                        <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                            <ProjectTitle variant="h5">{challenge.title}</ProjectTitle>
                            <ProjectDate variant="subtitle2">{challenge.date}</ProjectDate>
                            <ProjectDescription variant="body2">{challenge.description}</ProjectDescription>
                            <TagsContainer>
                                {challenge.technologies.map((tech, index) => (
                                    <StyledChip key={index} label={tech} size="small"/>
                                ))}
                            </TagsContainer>
                        </CardContent>
                    </ProjectCard>
                </Box>
            ))}
        </HorizontalScrollSection>
    );
};

export default ChallengesSection;