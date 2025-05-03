import React, {useEffect, useState} from "react";
import {Box, Tooltip} from "@mui/material";
import {styled} from "@mui/material/styles";
import buttonsConfig from "../header/HeaderBar.tsx";
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {ScrollManager} from "../../utils/ScrollManager.ts";

const sectionIcons: Record<string, React.ReactNode> = {
    'about': <PersonIcon/>,
    'awards': <EmojiEventsIcon/>,
    'projects': <CodeIcon/>,
};

const NavContainer = styled(Box, {
    shouldForwardProp: (prop) => !['expanded'].includes(prop as string)
})<{ expanded: boolean }>(({theme, expanded}) => ({
    position: 'fixed',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    zIndex: 10,
    padding: expanded ? '0.5rem' : '0.25rem',
    backgroundColor: theme.palette.mode === 'light'
        ? 'rgba(250, 250, 250, 0.9)'
        : 'rgba(18, 18, 18, 0.9)',
    borderRadius: '0 8px 8px 0',
    transition: 'all 0.3s ease',
    width: expanded ? '160px' : '48px', // Ensure enough width for icon + indicator
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

// Item container for each nav item
const NavItemContainer = styled(Box, {
    shouldForwardProp: (prop) => !['active', 'expanded'].includes(prop as string)
})<{ active: boolean; expanded: boolean }>(({theme, active, expanded}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: active
        ? theme.palette.mode === 'light'
            ? 'rgba(0, 0, 0, 0.05)'
            : 'rgba(255, 255, 255, 0.05)'
        : 'transparent',
    transition: 'all 0.2s ease',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    justifyContent: expanded ? 'flex-start' : 'center',
    // Keep the left border visible in both states
    borderLeft: `3px solid ${active ? theme.palette.secondary.main : 'transparent'}`,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light'
            ? 'rgba(0, 0, 0, 0.08)'
            : 'rgba(255, 255, 255, 0.08)',
        borderLeft: `3px solid ${theme.palette.secondary.main}`,
    },
}));

// Icon container
const IconContainer = styled(Box, {
    shouldForwardProp: (prop) => !['active', 'expanded'].includes(prop as string)
})<{ active: boolean; expanded: boolean }>(({theme, active}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    minWidth: '24px',
    '& .MuiSvgIcon-root': {
        fontSize: '1.25rem',
        // When not expanded and active, ensure icon is secondary color
        fill: active ? theme.palette.secondary.main : theme.palette.text.primary,
        transition: 'color 0.3s ease',
    },
}));

// Label for the nav item
const NavLabel = styled(Box, {
    shouldForwardProp: (prop) => !['active', 'expanded'].includes(prop as string)
})<{ active: boolean; expanded: boolean }>(({theme, active, expanded}) => ({
    marginLeft: '0.5rem',
    fontWeight: 500,
    fontSize: '0.9rem',
    opacity: expanded ? 1 : 0,
    maxWidth: expanded ? '120px' : '0',
    visibility: expanded ? 'visible' : 'hidden',
    transform: expanded ? 'translateX(0)' : 'translateX(10px)',
    transition: 'all 0.3s ease',
    color: active ? theme.palette.secondary.main : theme.palette.text.primary,
}));

interface NavItemProps {
    label: string;
    sectionId: string;
    active: boolean;
    expanded: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({label, sectionId, active, expanded, onClick}) => {
    return (
        <Tooltip title={expanded ? '' : label} placement="right">
            <NavItemContainer active={active} expanded={expanded} onClick={onClick}>
                <IconContainer active={active} expanded={expanded}>
                    {sectionIcons[sectionId] || <Box sx={{width: 24, height: 24}}/>}
                </IconContainer>
                <NavLabel active={active} expanded={expanded}>
                    {label}
                </NavLabel>
            </NavItemContainer>
        </Tooltip>
    );
};

export const VerticalNav: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isInHorizontalSection, setIsInHorizontalSection] = useState(false);

    // Detect if we're in a horizontal scroll section
    useEffect(() => {
        const challengesSection = document.getElementById('challenges');
        if (!challengesSection) return;

        const observer = new IntersectionObserver(
            entries => setIsInHorizontalSection(entries[0].isIntersecting),
            {threshold: 0.3}
        );

        observer.observe(challengesSection);
        return () => observer.disconnect();
    }, []);

    // Track mouse position but don't expand in horizontal sections
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const shouldExpand = e.clientX < 100 && !isInHorizontalSection;
            if (shouldExpand !== expanded) setExpanded(shouldExpand);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [expanded, isInHorizontalSection]);

    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll updates if we're currently in a programmatic scroll
            if (ScrollManager.getInstance().isCurrentlyScrolling()) return;

            const sectionsContainer = document.querySelector("[id^='section-']")?.parentElement;
            if (!sectionsContainer) return;

            const sectionElements = buttonsConfig.map(button =>
                document.getElementById(button.sectionId)
            ).filter(Boolean) as HTMLElement[];

            if (sectionElements.length === 0) return;

            // Get the visible section that's closest to the top of the viewport
            const viewportHeight = window.innerHeight;
            const screenMiddle = viewportHeight / 2;

            let closestSection = sectionElements[0];
            let closestDistance = Math.abs(closestSection.getBoundingClientRect().top - screenMiddle);

            sectionElements.forEach(section => {
                const distance = Math.abs(section.getBoundingClientRect().top - screenMiddle);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            setActiveSection(closestSection.id);
        };

        // Initial check
        handleScroll();

        const sectionsContainer = document.querySelector("[id^='section-']")?.parentElement;
        if (sectionsContainer) {
            sectionsContainer.addEventListener('scroll', handleScroll);
            return () => {
                sectionsContainer.removeEventListener('scroll', handleScroll);
            };
        }

        return undefined;
    }, []);

    const handleNavigation = (sectionId: string) => {
        setActiveSection(sectionId);
        ScrollManager.getInstance().scrollToSection(sectionId);
    };

    return (
        <NavContainer
            expanded={expanded}
            onMouseEnter={() => !isInHorizontalSection && setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            {buttonsConfig.map(button => (
                <NavItem
                    key={button.sectionId}
                    {...button}
                    active={activeSection === button.sectionId}
                    expanded={expanded}
                    onClick={() => handleNavigation(button.sectionId)}
                />
            ))}
        </NavContainer>
    );
};