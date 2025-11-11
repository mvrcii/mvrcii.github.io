import React from 'react';
import {Box, Link, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SectionBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
    padding: theme.spacing(4, 0),
}));

const ContentWrapper = styled(Box)(({theme}) => ({
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2),
    },
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

const StyledList = styled(List)(() => ({
    width: '100%',
    padding: 0,
}));

const StyledListItem = styled(ListItem)(({theme}) => ({
    padding: theme.spacing(1.5, 0),
    transition: 'transform 0.2s ease',
    '&:hover': {
        transform: 'translateX(8px)',
    },
}));

const StyledListItemIcon = styled(ListItemIcon)(({theme}) => ({
    minWidth: '42px',
    color: theme.palette.primary.main,
}));

const AwardTitle = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: '1.1rem',
}));

const AwardLink = styled(Link)(({theme}) => ({
    fontWeight: 500,
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s ease',
    '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '& .link-icon': {
            opacity: 1,
            transform: 'translateX(2px) translateY(-2px)',
        },
    },
    '& .link-icon': {
        fontSize: '1rem',
        opacity: 0.5,
        transition: 'all 0.2s ease',
    },
}));

const YearBadge = styled(Box)(({theme}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 600,
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(144, 202, 249, 0.16)'
        : 'rgba(25, 118, 210, 0.12)',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.mode === 'dark'
        ? 'rgba(144, 202, 249, 0.3)'
        : 'rgba(25, 118, 210, 0.3)'}`,
}));

const AwardDescription = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    marginTop: theme.spacing(0.5),
}));

// Helper function to extract rank from title
const getRankFromTitle = (title: string): number | null => {
    if (title.includes('1st')) return 1;
    if (title.includes('2nd')) return 2;
    if (title.includes('3rd')) return 3;
    return null;
};

// Helper function to get trophy color based on rank
const getTrophyColor = (title: string, isDarkMode: boolean): string => {
    const rank = getRankFromTitle(title);

    if (rank === 1) {
        // Gold for 1st place
        return isDarkMode ? '#FFD700' : '#FFA500';
    } else if (rank === 2) {
        // Silver for 2nd place
        return isDarkMode ? '#C0C0C0' : '#A8A8A8';
    } else if (rank === 3) {
        // Bronze for 3rd place
        return isDarkMode ? '#CD7F32' : '#B8763C';
    }

    // Default primary color for awards without placement
    return '';
};

// Define your awards data (ordered by rank: 1st places first, then 2nd, then 3rd)
const awardsData = [
    {
        id: 1,
        title: "Vesuvius Challenge 1st Title Prize",
        year: "2025",
        prize: "$60,000",
        description: "Recovered the first known title from a 2,000-year-old carbonized Herculaneum scroll using a custom-built transformer-based segmentation model. Plus three additional progress prizes: May 2025 ($1,000), November 2024 ($1,000), and Grand Challenge 2023 ($1,000).",
        url: "https://www.nature.com/articles/d41586-025-01407-2"
    },
    {
        id: 2,
        title: "Magnet4Cardiac7T Spring School 1st Place",
        year: "2025",
        description: "Optimized ultra-high-field MRI coil configurations, balancing magnetic field homogeneity and tissue heating."
    },
    {
        id: 5,
        title: "Ultimate Jailbreaking Championship 1st Place",
        year: "2024",
        description: "Prompt engineering for bypassing LLM safety systems, jailbreaking models with only 0.008% success rate."
    },
    {
        id: 3,
        title: "Tierzählstation Challenge 1st Place",
        year: "2024",
        description: "Deep learning for multi-species classification from camera trap images for wildlife animal population monitoring.",
        url: "https://beta.toolboxdatenkompetenz.de/challenges/tierzaehlstation?content=details"
    },
    {
        id: 6,
        title: "NeurIPS 2023 MedFM Challenge 2nd Place",
        year: "2023",
        description: "Few-shot learning for thorax, pathology, and endoscopy classification using foundation models to improve limited data scenarios.",
        url: "https://medfm2023.grand-challenge.org/awards/"
    },
    {
        id: 4,
        title: "Capsule Vision 2024 Challenge 3rd Place",
        year: "2024",
        description: "Domain-adaptive pre-training of self-supervised foundation models for medical image classification in gastrointestinal endoscopy.",
        url: "https://cvip2024.iiitdm.ac.in/challenge"
    }
];

const AwardsSection: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <SectionBox>
            <ContentWrapper>
                <SectionTitle variant="h2">Awards</SectionTitle>

                <StyledList>
                    {awardsData.map((award) => {
                        const trophyColor = getTrophyColor(award.title, isDarkMode);

                        return (
                            <StyledListItem key={award.id} disableGutters>
                                <StyledListItemIcon>
                                    <EmojiEventsIcon sx={trophyColor ? {color: trophyColor} : {}} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary={
                                        <Box sx={{display: 'flex', gap: 3, alignItems: 'flex-start'}}>
                                            <Box sx={{flex: 1, minWidth: 0}}>
                                                {award.url ? (
                                                    <AwardLink href={award.url} target="_blank" rel="noopener noreferrer">
                                                        {award.title}
                                                        <OpenInNewIcon className="link-icon" />
                                                        {award.prize && (
                                                            <span style={{fontWeight: 600, fontSize: '0.95rem', marginLeft: '8px'}}>
                                                                ({award.prize})
                                                            </span>
                                                        )}
                                                    </AwardLink>
                                                ) : (
                                                    <AwardTitle>
                                                        {award.title}
                                                        {award.prize && (
                                                            <span style={{fontWeight: 600, fontSize: '0.95rem', marginLeft: '8px'}}>
                                                                ({award.prize})
                                                            </span>
                                                        )}
                                                    </AwardTitle>
                                                )}
                                                {award.description && (
                                                    <AwardDescription>{award.description}</AwardDescription>
                                                )}
                                            </Box>
                                            <YearBadge sx={{flexShrink: 0}}>{award.year}</YearBadge>
                                        </Box>
                                    }
                                />
                            </StyledListItem>
                        );
                    })}
                </StyledList>
            </ContentWrapper>
        </SectionBox>
    );
};

export default AwardsSection;