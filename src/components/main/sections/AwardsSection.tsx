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

// Define your awards data
const awardsData = [
    {
        id: 1,
        title: "Best Paper Award at [Conference Name]",
        year: "2024"
    },
    {
        id: 2,
        title: "Research Excellence Grant",
        year: "2023"
    },
    {
        id: 3,
        title: "Open Source Contribution Award",
        year: "2022"
    },
    {
        id: 4,
        title: "[University/Company] Innovation Prize",
        year: "2021"
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
                                    <AwardTitle>{award.title}</AwardTitle>
                                    <AwardYear>{award.year}</AwardYear>
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