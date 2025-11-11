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

const AwardYear = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    fontWeight: 500,
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
            <SectionTitle variant="h2">Awards</SectionTitle>

            <StyledList>
                {awardsData.map((award) => (
                    <StyledListItem key={award.id} disableGutters>
                        <StyledListItemIcon>
                            <EmojiEventsIcon/>
                        </StyledListItemIcon>
                        <ListItemText
                            primary={
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Box>
                                        <AwardTitle>
                                            {award.title}
                                            {award.prize && <span style={{fontWeight: 600, marginLeft: '8px'}}>({award.prize})</span>}
                                        </AwardTitle>
                                        {award.description && (
                                            <AwardDescription>{award.description}</AwardDescription>
                                        )}
                                    </Box>
                                    <AwardYear sx={{marginLeft: 2, flexShrink: 0}}>{award.year}</AwardYear>
                                </Box>
                            }
                        />
                    </StyledListItem>
                ))}
            </StyledList>
        </SectionBox>
    );
};

export default AwardsSection;