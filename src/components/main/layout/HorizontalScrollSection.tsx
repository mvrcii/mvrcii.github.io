import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface HorizontalScrollSectionProps {
    title?: string;
    children: ReactNode;
    itemWidth?: number | string;
    id?: string;
    backgroundColor?: string;
}

const SectionContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor'
})<{ backgroundColor?: string }>(({backgroundColor, theme}) => ({
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor || 'transparent',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.spacing(2), // Add rounded corners
}));

const TitleContainer = styled(Box)(({theme}) => ({
    padding: theme.spacing(3, 4),
}));

const SectionTitle = styled(Typography)(({theme}) => ({
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

const ScrollContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    flexGrow: 1,
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none', // Firefox
    padding: `0 ${theme.spacing(2)}`, // Add horizontal padding
}));

const ScrollItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'itemWidth'
})<{ itemWidth: number | string }>(({itemWidth, theme}) => ({
    flex: `0 0 ${typeof itemWidth === 'number' ? `${itemWidth}%` : itemWidth}`,
    scrollSnapAlign: 'start',
    padding: theme.spacing(0, 2), // Add consistent padding around items
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const NavigationButton = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
                                                                             title,
                                                                             children,
                                                                             itemWidth = 100, // Default 100% (full width)
                                                                             id,
                                                                             backgroundColor,
                                                                         }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScrollability = () => {
        if (scrollRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
        }
    };

    useEffect(() => {
        checkScrollability();
        // Set up event listener for resize
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    // Wrap children in ScrollItem components
    const scrollItems = React.Children.map(children, (child) => (
        <ScrollItem itemWidth={itemWidth}>{child}</ScrollItem>
    ));

    const handleScroll = () => {
        checkScrollability();
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({left: -itemWidth, behavior: 'smooth'});
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({left: itemWidth, behavior: 'smooth'});
        }
    };

    return (
        <SectionContainer id={id} backgroundColor={backgroundColor}>
            {title && (
                <TitleContainer>
                    <SectionTitle variant="h2">{title}</SectionTitle>
                </TitleContainer>
            )}

            <ScrollContainer ref={scrollRef} onScroll={handleScroll}>
                {scrollItems}
            </ScrollContainer>

            {canScrollLeft && (
                <NavigationButton
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    sx={{left: '20px'}}
                >
                    <KeyboardArrowLeftIcon/>
                </NavigationButton>
            )}

            {canScrollRight && (
                <NavigationButton
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    sx={{right: '20px'}}
                >
                    <KeyboardArrowRightIcon/>
                </NavigationButton>
            )}
        </SectionContainer>
    );
};

export default HorizontalScrollSection;