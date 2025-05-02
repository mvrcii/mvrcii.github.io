import React, {ReactNode} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

interface FullPageSectionProps {
    children: ReactNode;
    id?: string;
    backgroundColor?: string;
    centerContent?: boolean;
    padding?: number | string;
}

const SectionContainer = styled(Box, {
    shouldForwardProp: (prop) =>
        !['backgroundColor', 'centerContent', 'padding'].includes(prop as string)
})<{
    backgroundColor?: string;
    centerContent?: boolean;
    padding?: number | string;
}>(({backgroundColor, centerContent, padding = 3, theme}) => ({
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor || 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: centerContent ? 'center' : 'flex-start',
    justifyContent: centerContent ? 'center' : 'flex-start',
    padding: theme.spacing(padding),
    overflow: 'auto', // Allow scrolling if content overflows
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(typeof padding === 'number' ? padding / 2 : 2),
    },
}));

const FullPageSection: React.FC<FullPageSectionProps> = ({
                                                             children,
                                                             id,
                                                             backgroundColor,
                                                             centerContent = false,
                                                             padding,
                                                         }) => {
    return (
        <SectionContainer
            id={id}
            backgroundColor={backgroundColor}
            centerContent={centerContent}
            padding={padding}
        >
            {children}
        </SectionContainer>
    );
};

export default FullPageSection;