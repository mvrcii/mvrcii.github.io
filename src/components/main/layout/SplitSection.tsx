import React from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

interface SplitSectionProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    reverse?: boolean;
    backgroundColor?: string;
    id?: string;
}

const SectionContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor'
})<{ backgroundColor?: string }>(
    ({theme, backgroundColor}) => ({
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor || 'transparent',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    })
);

const ContentSide = styled(Box)(({theme}) => ({
    flex: 2,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
    [theme.breakpoints.down('md')]: {
        flex: 'auto',
        padding: theme.spacing(2),
    },
}));

const MediaSide = styled(Box)(({theme}) => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        flex: 'auto',
        minHeight: '40vh',
    },
}));

const SplitSection: React.FC<SplitSectionProps> = ({
                                                       leftContent,
                                                       rightContent,
                                                       reverse = false,
                                                       backgroundColor,
                                                       id,
                                                   }) => {
    return (
        <SectionContainer
            backgroundColor={backgroundColor}
            id={id}
            sx={(theme: import('@mui/material/styles').Theme) => ({
                flexDirection: reverse ? 'row-reverse' : 'row',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                },
            })}
        >
            {reverse ? (
                <>
                    <ContentSide>{rightContent}</ContentSide>
                    <MediaSide>{leftContent}</MediaSide>
                </>
            ) : (
                <>
                    <MediaSide>{leftContent}</MediaSide>
                    <ContentSide>{rightContent}</ContentSide>
                </>
            )}
        </SectionContainer>
    );
};

export default SplitSection;