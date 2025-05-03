import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import FullpageHorizontalSections from '../../layout/FullpageHorizontalSections';
import ProjectPage from './ProjectPage';
import herzRadar from '../../../../assets/herzRadar.png';

// Sample data for projects - expand with your actual projects
const projectsData = [
    {
        id: 1,
        title: 'Vesuvius 2023 GrandPrize Challenge',
        description: 'Worked on developing advanced imaging algorithms to help read ancient scrolls from Herculaneum that were carbonized by volcanic eruptions in 79 CE. Used deep neural networks to detect ink traces in CT scan data.',
        image: herzRadar,
        technologies: ['Python', 'PyTorch', 'Computer Vision'],
        date: '2023',
    },
    {
        id: 2,
        title: 'Medical Imaging Project',
        description: 'Created an AI-powered diagnostic tool to assist radiologists in early disease detection. Implemented a state-of-the-art segmentation model that achieved high accuracy on medical scan datasets.',
        image: herzRadar, // Replace with appropriate image
        technologies: ['PyTorch', 'TensorFlow', 'Medical Imaging'],
        date: '2023',
    },
    {
        id: 3,
        title: 'Capsule Vision 2024 Challenge',
        description: 'Developed an automated analysis system for capsule endoscopy images, helping to detect abnormalities in the digestive tract with higher accuracy than previous methods.',
        image: herzRadar, // Replace with appropriate image
        technologies: ['Python', 'Deep Learning', 'Medical Analysis'],
        date: '2024',
    }
];

const ProjectImage = styled('img')({
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    borderRadius: '4px',
});

const ProjectDescription = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(2),
    fontSize: '1.1rem',
    lineHeight: 1.6,
}));

const ProjectSection: React.FC = () => {
    return (
        <FullpageHorizontalSections
            title="Projects"
            titleBarWidth={120}
            heightPercentage={100} // Ensure full height
        >
            {projectsData.map((project) => (
                <ProjectPage
                    key={project.id}
                    title={project.title}
                    date={project.date}
                    technologies={project.technologies}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '100%'
                    }}>
                        <ProjectImage src={project.image} alt={project.title}/>
                        <ProjectDescription variant="body1">
                            {project.description}
                        </ProjectDescription>
                    </Box>
                </ProjectPage>
            ))}
        </FullpageHorizontalSections>
    );
};

export default ProjectSection;