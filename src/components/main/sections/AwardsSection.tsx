import React from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
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

// Define your awards data
const awardsData = [
    {
        id: 1,
        title: "Vesuvius Challenge 1st Title Prize",
        year: "2025",
        prize: "$60,000",
        description: "Recovered the first known title from a 2,000-year-old carbonized Herculaneum scroll using a custom-built transformer-based segmentation model. Plus three additional progress prizes: May 2025 ($1,000), November 2024 ($1,000), and Grand Challenge 2023 ($1,000)."
    },
    {
        id: 2,
        title: "Magnet4Cardiac7T Spring School 1st Place",
        year: "2025",
        description: "Optimized ultra-high-field MRI coil configurations, balancing magnetic field homogeneity and tissue heating."
    },
    {
        id: 3,
        title: "Tierzählstation Challenge 1st Place",
        year: "2024",
        description: "Developed a deep learning model for wildlife animal population monitoring."
    },
    {
        id: 4,
        title: "Capsule Vision 2024 Challenge 3rd Place",
        year: "2024",
        description: "Developed a deep learning model for medical image multi-class classification in gastrointestinal endoscopy."
    },
    {
        id: 5,
        title: "Ultimate Jailbreaking Championship",
        year: "2024"
    },
    {
        id: 6,
        title: "NeurIPS 2023 MedFM Challenge 2nd Place",
        year: "2023",
        description: "Applied few-shot learning for thorax, pathology, and endoscopy classification, improving limited data scenarios."
    }
];

const AwardsSection: React.FC = () => {
    return (
        <SectionBox>
            <ContentWrapper>
                <SectionTitle variant="h2">Awards</SectionTitle>

                <StyledList>
                    {awardsData.map((award) => (
                        <StyledListItem key={award.id} disableGutters>
                            <StyledListItemIcon>
                                <EmojiEventsIcon/>
                            </StyledListItemIcon>
                            <ListItemText
                                primary={
                                    <Box>
                                        <AwardTitle>
                                            <span>{award.title}</span>
                                            <YearBadge>{award.year}</YearBadge>
                                            {award.prize && (
                                                <span style={{fontWeight: 600, fontSize: '0.95rem'}}>
                                                    {award.prize}
                                                </span>
                                            )}
                                        </AwardTitle>
                                        {award.description && (
                                            <AwardDescription>{award.description}</AwardDescription>
                                        )}
                                    </Box>
                                }
                            />
                        </StyledListItem>
                    ))}
                </StyledList>
            </ContentWrapper>
        </SectionBox>
    );
};

export default AwardsSection;