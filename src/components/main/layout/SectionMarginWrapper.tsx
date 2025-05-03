// src/components/main/layout/SectionMarginWrapper.tsx
import React, {ReactNode} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

// Define the width of the reserved space on the left
export const RESERVED_SPACE_WIDTH = 48; // Match the shrinked navbar width

const SectionWrapper = styled(Box)({
    width: '100%',
    height: '100%',
    display: 'flex',
});

const ReservedSpace = styled(Box)(({theme}) => ({
    width: `${RESERVED_SPACE_WIDTH}px`,
    height: '100%',
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
        display: 'none', // Hide on smaller screens where vertical nav is hidden
    },
}));

const ContentContainer = styled(Box)({
    flex: 1,
    height: '100%',
});

interface SectionMarginWrapperProps {
    children: ReactNode;
}

const SectionMarginWrapper: React.FC<SectionMarginWrapperProps> = ({children}) => {
    return (
        <SectionWrapper>
            <ReservedSpace/>
            <ContentContainer>
                {children}
            </ContentContainer>
        </SectionWrapper>
    );
};

export default SectionMarginWrapper;