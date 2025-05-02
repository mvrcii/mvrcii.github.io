import {Box, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import React, {useEffect, useState} from "react";
import {useTheme} from "../../../theme/ThemeContext";
import heroImage from '../../../assets/hero.jpg';

// Define separate color palettes for light and dark modes
const darkModeColors = [
    {text: 'Machine Learning', color: '#181D7A'},
    {text: 'Computer Vision', color: '#793144'},
    {text: 'Software Development', color: '#194A1C'},
    {text: 'AI Safety', color: '#703524'},
    {text: 'Research', color: '#3699D5'},
    {text: 'Data Science', color: '#2F3E46'},
    {text: 'Medical Imaging', color: '#8E44AD'}
];

const lightModeColors = [
    {text: 'Machine Learning', color: '#D7D9FF'},
    {text: 'Computer Vision', color: '#FFD7E0'},
    {text: 'Software Development', color: '#D7F0D8'},
    {text: 'AI Safety', color: '#FCDBD0'},
    {text: 'Research', color: '#B8E4FF'},
    {text: 'Data Science', color: '#D8E6E8'},
    {text: 'Medical Imaging', color: '#EBDAF5'}
];

export const Hero = () => {
    const {mode} = useTheme();

    // Select the appropriate color palette based on theme
    const slangToColors = mode === 'light' ? lightModeColors : darkModeColors;

    return (
        <Container id="hero">
            <StyledBox>
                <HeroBox>
                    <img src={heroImage} alt="Hero Image"/>
                </HeroBox>
                <TextBox>
                    <TypewriterHook words={slangToColors}/>
                </TextBox>
            </StyledBox>
        </Container>
    );
}

export const TitleText = styled(Typography)(({theme}) => ({
    fontFamily: '"Marcellus", serif',
    fontWeight: 400,
    fontSize: '2.625rem',
    lineHeight: '4rem',
    color: theme.palette.text.primary
}));

// Apply different text color based on theme and background color
const Highlight = styled('u')<{ color: string }>(({color, theme}) => {
    // For light theme, use dark text on light backgrounds
    // For dark theme, use light text on dark backgrounds
    const textColor = theme.palette.mode === 'light' ? '#000000' : '#ffffff';

    return {
        textDecoration: 'none',
        color: textColor,
        boxShadow: `inset 0 -.5em 0 ${color}`,
        transition: 'box-shadow .3s ease-out',
        padding: '0 4px',
        borderRadius: '2px',
        '&:hover': {
            boxShadow: `inset 0 -1em 0 ${color}`,
        }
    };
});

interface WordColorPair {
    text: string;
    color: string;
}

interface TypewriterHookProps {
    words: WordColorPair[];
}

const TypewriterHook: React.FC<TypewriterHookProps> = ({words}) => {
    const wordsText = words.map((item) => item.text);
    const [currentText, {isType}] = useTypewriter({
        words: wordsText,
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 20,
        delaySpeed: 1200,
        onLoopDone: () => console.log('Loop finished')
    });

    const [currentColor, setCurrentColor] = useState(words[0].color); // Initial default color
    const [lastTypeWord, setLastTypeWord] = useState('');

    // When a new word starts being typed, use the color of the word
    useEffect(() => {
        if (isType && currentText.length === 1 && lastTypeWord !== currentText) {
            setLastTypeWord(currentText);
            const wordColor = words.find(item => item.text.startsWith(currentText))?.color;
            if (wordColor) {
                setCurrentColor(wordColor);
            }
        }
    }, [currentText, isType, lastTypeWord, words]);

    const customCursor = (
        <span style={{
            fontSize: '2.25rem',
            top: -5,
            position: "relative",
            animation: 'blink 1s step-start infinite'
        }}>|</span>
    );

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '3rem',
            paddingTop: '2rem',
            width: "290px",
            maxWidth: "inherit"
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <TitleText component="span" sx={{fontSize: '1.75rem', lineHeight: '2rem'}}>
                    I am doing
                </TitleText>

                <Box>
                    <TitleText component="span" sx={{fontSize: '1.75rem', lineHeight: '2rem'}}>
                        <Highlight color={currentColor}>{currentText}</Highlight>
                    </TitleText>
                    <Cursor cursorStyle={customCursor}/>

                </Box>

            </Box>

        </Box>
    );
};

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: '2rem',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const HeroBox = styled(Box)(({theme}) => ({
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    border: `4px solid ${theme.palette.background.default === '#121212' ? '#fafafa' : '#333333'}`,

    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '40% center',
        borderRadius: '50%',
        transition: 'object-position 0.3s ease',
    }
}));

const TextBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1',
    paddingLeft: '0rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '1rem',
        paddingTop: '2rem',
        textAlign: 'center',
    },
}));