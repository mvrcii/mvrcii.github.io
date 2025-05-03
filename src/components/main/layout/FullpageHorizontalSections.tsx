import React, {useEffect, useRef, useState} from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface FullpageHorizontalSectionsProps {
    children: React.ReactNode;
    title?: string;
    heightPercentage?: number;
    titleBarWidth?: number;
}

// Title sidebar with 90-degree rotated text
const TitleSidebar = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'width'
})<{ width: number }>(({theme, width}) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: `${width}px`,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
}));

const RotatedTitle = styled(Typography)(({theme}) => ({
    transform: 'rotate(-90deg)',
    transformOrigin: 'center center',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    fontSize: '2.5rem',
    fontFamily: '"Marcellus", serif',
    color: theme.palette.text.primary,
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '25%',
        width: '50%',
        height: '4px',
        backgroundColor: theme.palette.primary.main,
    },
}));

const SectionsContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'leftMargin'
})<{ leftMargin: number }>(({leftMargin}) => ({
    marginLeft: `${leftMargin}px`,
    width: `calc(100% - ${leftMargin}px)`,
    height: '100%',
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none', // For Firefox
}));

const Section = styled(Box)({
    minWidth: '100%',
    height: '100%',
    scrollSnapAlign: 'start',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
});

const ContentContainer = styled(Box, {
    shouldForwardProp: (prop) =>
        !['heightPercentage'].includes(prop as string)
})<{
    heightPercentage: number;
}>(({theme, heightPercentage}) => ({
    height: `${heightPercentage}%`,
    width: '100%',
    display: 'flex',
    background: theme.palette.background.paper,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        height: `${Math.min(heightPercentage + 10, 95)}%`, // Slightly larger on mobile, but not more than 95%
    },
}));

const NavigationButton = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: '4px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        '& .MuiSvgIcon-root': {
            color: '#ffffff',
        }
    },
    '& .MuiSvgIcon-root': {
        color: theme.palette.text.primary,
        transition: 'color 0.2s ease',
    }
}));

const LeftButton = styled(NavigationButton)({
    left: '20px',
});

const RightButton = styled(NavigationButton)({
    right: '20px',
});

const FullpageHorizontalSections: React.FC<FullpageHorizontalSectionsProps> = ({
                                                                                   children,
                                                                                   title,
                                                                                   heightPercentage = 90, // Default to 90% height
                                                                                   titleBarWidth = 150, // Default sidebar width
                                                                               }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [totalSections, setTotalSections] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Count the number of direct children to determine total sections
        if (containerRef.current) {
            const childSections = containerRef.current.children;
            setTotalSections(childSections.length);
        }
    }, [children]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollPosition = containerRef.current.scrollLeft;
                const viewportWidth = containerRef.current.clientWidth;
                const currentSection = Math.round(scrollPosition / viewportWidth);
                setActiveSection(currentSection);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollToSection = (sectionIndex: number) => {
        if (containerRef.current) {
            const targetScrollPosition = sectionIndex * containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: targetScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    const navigateLeft = () => {
        if (activeSection > 0) {
            scrollToSection(activeSection - 1);
        }
    };

    const navigateRight = () => {
        if (activeSection < totalSections - 1) {
            scrollToSection(activeSection + 1);
        }
    };

    // Wrap each child in a Section component
    const wrappedChildren = React.Children.map(children, (child, index) => {
        return (
            <Section id={`project-section-${index}`}>
                <ContentContainer heightPercentage={heightPercentage}>
                    {child}
                </ContentContainer>

                {index > 0 && (
                    <LeftButton onClick={navigateLeft} aria-label="Navigate to previous section">
                        <KeyboardArrowLeftIcon/>
                    </LeftButton>
                )}

                {index < React.Children.count(children) - 1 && (
                    <RightButton onClick={navigateRight} aria-label="Navigate to next section">
                        <KeyboardArrowRightIcon/>
                    </RightButton>
                )}
            </Section>
        );
    });

    const resetScrollPosition = () => {
        // Reset to the first section when the component gets navigated to
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
            setActiveSection(0);
        }
    };

    // Add this useEffect to handle navigation events
    useEffect(() => {
        // Reset position when component mounts or becomes visible via navigation
        resetScrollPosition();

        // Listen for section navigation events
        const handleSectionChange = () => {
            resetScrollPosition();
        };

        window.addEventListener('hashchange', handleSectionChange);

        return () => {
            window.removeEventListener('hashchange', handleSectionChange);
        };
    }, []);

    return (
        <Box sx={{position: 'relative', width: '100%', height: '100%'}}>
            {title && (
                <TitleSidebar width={titleBarWidth}>
                    <RotatedTitle variant="h2">{title}</RotatedTitle>
                </TitleSidebar>
            )}
            <SectionsContainer ref={containerRef} leftMargin={title ? titleBarWidth : 0}>
                {wrappedChildren}
            </SectionsContainer>
        </Box>
    );
};

export default FullpageHorizontalSections;