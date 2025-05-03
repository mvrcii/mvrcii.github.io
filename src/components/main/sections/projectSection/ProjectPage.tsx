import React, {ReactNode} from 'react';
import {Box, Chip, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

interface ProjectPageProps {
    title: string;
    date?: string;
    technologies?: string[];
    children: ReactNode;
}

const ProjectContainer = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    paddingTop: theme.spacing(4),
    overflow: 'auto',
    boxSizing: 'border-box', // Ensure padding is included in width/height calculations
}));

const ProjectHeader = styled(Box)(({theme}) => ({
    marginBottom: theme.spacing(3),
}));

const ProjectTitle = styled(Typography)(({theme}) => ({
    fontWeight: 700,
    position: 'relative',
    marginBottom: theme.spacing(1),
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

const ProjectDate = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: 500,
}));

const TagsContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.75),
    marginTop: theme.spacing(2),
}));

const StyledChip = styled(Chip)(({theme}) => ({
    backgroundColor: theme.palette.primary.main + '20',
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: '0.75rem',
}));

const ContentContainer = styled(Box)(({theme}) => ({
    flexGrow: 1,
    marginTop: theme.spacing(3),
}));

const ProjectPage: React.FC<ProjectPageProps> = ({
                                                     title,
                                                     date,
                                                     technologies = [],
                                                     children,
                                                 }) => {
    return (
        <ProjectContainer>
            <ProjectHeader>
                <ProjectTitle variant="h3">{title}</ProjectTitle>
                {date && <ProjectDate variant="subtitle1">{date}</ProjectDate>}
                {technologies.length > 0 && (
                    <TagsContainer>
                        {technologies.map((tech, i) => (
                            <StyledChip key={i} label={tech} size="small"/>
                        ))}
                    </TagsContainer>
                )}
            </ProjectHeader>

            <ContentContainer>
                {children}
            </ContentContainer>
        </ProjectContainer>
    );
};

export default ProjectPage;