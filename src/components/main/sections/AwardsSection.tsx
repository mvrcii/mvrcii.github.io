import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const SectionContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '36px',
  color: theme.palette.secondary.main,
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
    <SectionContainer id="awards">
      <Typography variant="h1" gutterBottom>Awards</Typography>

      <List disablePadding>
        {awardsData.map((award) => (
          <StyledListItem key={award.id} disableGutters>
            <StyledListItemIcon>
              <EmojiEventsIcon />
            </StyledListItemIcon>
            <ListItemText
              primary={`${award.title} (${award.year})`}
              primaryTypographyProps={{ variant: 'body1' }}
            />
          </StyledListItem>
        ))}
      </List>
    </SectionContainer>
  );
};

export default AwardsSection;