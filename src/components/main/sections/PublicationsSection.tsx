import React from 'react';
import {Box, Link, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import ArticleIcon from '@mui/icons-material/Article';

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

const PublicationsContainer = styled(Box)(() => ({
    overflow: 'auto',
    maxHeight: 'calc(100% - 100px)', // Adjust based on title height
}));

const PublicationItem = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2.5),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.02)'
        : 'rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.palette.mode === 'light'
            ? '0 4px 8px rgba(0, 0, 0, 0.1)'
            : '0 4px 8px rgba(0, 0, 0, 0.3)',
    }
}));

const IconWrapper = styled(Box)(({theme}) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
}));

const PublicationTitle = styled(Typography)(({theme}) => ({
    fontWeight: 500,
    marginBottom: theme.spacing(0.5),
}));

const PublicationAuthors = styled(Typography)(({theme}) => ({
    fontStyle: 'italic',
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const PublicationVenue = styled(Typography)(({theme}) => ({
    marginBottom: theme.spacing(1),
}));

// Define your publications data
const publicationsData = [
    {
        id: 1,
        title: "Title of Your First Paper: A Novel Approach to Computer Vision",
        authors: "Roth, M., Collaborator, A., & Advisor, B.",
        venue: "Proceedings of the International Conference on Machine Learning (ICML), 2024",
        link: "https://example.com/publication1",
        abstract: "A brief abstract of the paper highlighting the key contributions and findings."
    },
    {
        id: 2,
        title: "Your Second Paper: Advancements in AI Explainability",
        authors: "Roth, M., & Collaborator, C.",
        venue: "Journal of Artificial Intelligence Research, Vol. X, Issue Y, 2023",
        link: "https://example.com/publication2",
        abstract: "A brief abstract of the paper highlighting the key contributions and findings."
    }
];

const PublicationsSection: React.FC = () => {
    return (
        <SectionBox>
            <SectionTitle variant="h2">Publications</SectionTitle>

            <PublicationsContainer>
                {publicationsData.map((pub) => (
                    <PublicationItem key={pub.id} elevation={0}>
                        <IconWrapper>
                            <ArticleIcon fontSize="large"/>
                        </IconWrapper>
                        <Box>
                            <PublicationTitle variant="h6">
                                <Link href={pub.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                    {pub.title}
                                </Link>
                            </PublicationTitle>

                            <PublicationAuthors variant="body2">
                                {pub.authors}
                            </PublicationAuthors>

                            <PublicationVenue variant="body2">
                                {pub.venue}
                            </PublicationVenue>

                            <Typography variant="body2">
                                {pub.abstract}
                            </Typography>
                        </Box>
                    </PublicationItem>
                ))}
            </PublicationsContainer>
        </SectionBox>
    );
};

export default PublicationsSection;