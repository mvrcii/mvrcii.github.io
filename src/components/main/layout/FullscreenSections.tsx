import React, {useEffect, useState} from 'react';
import {Box, Container, IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface FullscreenSectionsProps {
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    widthPercentage?: number;
    heightPercentage?: number;
}

const SectionsContainer = styled(Box)({
    height: '100vh',
    overflowY: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none', // For Firefox
});

const Section = styled(Box)({
    height: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    position: 'relative',
});

const ContentContainer = styled(Box, {
    shouldForwardProp: (prop) =>
        !['heightPercentage', 'widthPercentage'].includes(prop as string)
})<{
    heightPercentage: number;
    widthPercentage: number;
}>(({theme, heightPercentage, widthPercentage}) => ({
    height: `${heightPercentage}%`,
    width: `${widthPercentage}%`,
    display: 'flex',
    boxShadow: theme.shadows[3],
    background: theme.palette.background.paper,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        height: `${Math.min(heightPercentage + 10, 95)}%`, // Slightly larger on mobile, but not more than 95%
        width: '90%', // Wider on mobile
    },
}));

const NavigationButton = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const DownButton = styled(NavigationButton)({
    bottom: '20px',
});

const UpButton = styled(NavigationButton)({
    top: '20px',
});

const FullscreenSections: React.FC<FullscreenSectionsProps> = ({
                                                                   children,
                                                                   maxWidth = false, // false means no maxWidth constraint for Container
                                                                   widthPercentage = 75, // Default to 75% width
                                                                   heightPercentage = 75, // Default to 75% height
                                                               }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [totalSections, setTotalSections] = useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

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
                const scrollPosition = containerRef.current.scrollTop;
                const viewportHeight = window.innerHeight;
                const currentSection = Math.round(scrollPosition / viewportHeight);
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
            const targetScrollPosition = sectionIndex * window.innerHeight;
            containerRef.current.scrollTo({
                top: targetScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    const navigateUp = () => {
        if (activeSection > 0) {
            scrollToSection(activeSection - 1);
        }
    };

    const navigateDown = () => {
        if (activeSection < totalSections - 1) {
            scrollToSection(activeSection + 1);
        }
    };

    // Wrap each child in a Section component with container
    const wrappedChildren = React.Children.map(children, (child, index) => {
        return (
            <Section id={`section-${index}`}>
                <ContentContainer
                    heightPercentage={heightPercentage}
                    widthPercentage={widthPercentage}
                >
                    {maxWidth ? (
                        <Container maxWidth={maxWidth} sx={{height: '100%', display: 'flex'}}>
                            {child}
                        </Container>
                    ) : (
                        child
                    )}
                </ContentContainer>

                {index > 0 && (
                    <UpButton onClick={navigateUp} aria-label="Navigate to previous section">
                        <KeyboardArrowUpIcon/>
                    </UpButton>
                )}

                {index < React.Children.count(children) - 1 && (
                    <DownButton onClick={navigateDown} aria-label="Navigate to next section">
                        <KeyboardArrowDownIcon/>
                    </DownButton>
                )}
            </Section>
        );
    });

    return (
        <SectionsContainer ref={containerRef}>
            {wrappedChildren}
        </SectionsContainer>
    );
};

export default FullscreenSections;