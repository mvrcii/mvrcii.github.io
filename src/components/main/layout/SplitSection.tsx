// Updated SplitSection.tsx with flexible ratio support
import React from 'react';
import {Box} from '@mui/material';
import {styled, Theme} from '@mui/material/styles';

interface SplitSectionProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    reverse?: boolean;
    backgroundColor?: string;
    id?: string;
    ratio?: number; // New prop: ratio between 0 and 1 representing left:right split
}

const SectionContainer = styled(Box, {
    shouldForwardProp: (prop) => !['backgroundColor'].includes(prop as string)
})<{ backgroundColor?: string }>(
    ({theme, backgroundColor}) => ({
        display: 'flex',
        width: '100%',
        height: '80%',
        backgroundColor: backgroundColor || 'transparent',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    })
);

const ContentSide = styled(Box)<{ flex: number }>(({theme, flex}) => ({
    flex,
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

const SplitSection: React.FC<SplitSectionProps> = ({
                                                       leftContent,
                                                       rightContent,
                                                       reverse = false,
                                                       backgroundColor,
                                                       id,
                                                       ratio = 1 / 3, // Default to 1/3 : 2/3 split
                                                   }) => {
    // Calculate the flex values based on the ratio
    const leftFlex = ratio;
    const rightFlex = 1 - ratio;

    return (
        <SectionContainer
            backgroundColor={backgroundColor}
            id={id}
            sx={(theme: Theme) => ({
                flexDirection: reverse ? 'row-reverse' : 'row',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                },
            })}
        >
            {reverse ? (
                <>
                    <ContentSide flex={rightFlex}>{rightContent}</ContentSide>
                    <ContentSide flex={leftFlex}>{leftContent}</ContentSide>
                </>
            ) : (
                <>
                    <ContentSide flex={leftFlex}>{leftContent}</ContentSide>
                    <ContentSide flex={rightFlex}>{rightContent}</ContentSide>
                </>
            )}
        </SectionContainer>
    );
};

export default SplitSection;