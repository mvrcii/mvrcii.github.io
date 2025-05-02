import {Alert, Box, Button, Container, Snackbar, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import heroImage from '../../../assets/hero.jpg';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import React, {useEffect, useState} from "react";

const slangToColors: WordColorPair[] = [
    {text: 'Machine Learning', color: '#181D7Aff'},
    {text: 'Computer Vision', color: '#793144ff'},
    {text: 'Software Development', color: '#194A1Cff'},
    {text: 'AI Safety', color: '#703524ff'},
    {text: 'Research', color: '#3699D5ff'},
    {text: 'Data Science', color: '#2F3E46ff'},
    {text: 'Medical Imaging', color: '#8E44ADff'}
];

export const Hero = () => {
    const [open, setOpen] = React.useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('marcelroth100@aol.com');
            setOpen(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container id="hero">
            <StyledBox>
                <HeroBox>
                    <img src={heroImage} alt="Hero Image"/>
                </HeroBox>
                <TextBox>
                    <TitleText>I'm Marcel Roth</TitleText>
                    <TypewriterHook words={slangToColors}/>
                    <Box sx={{margin: '18px 0 32px 0'}}>
                        <a href="https://www.linkedin.com/in/mvrcelroth/" target="_blank" rel="noopener noreferrer">
                            <StyledButton>LinkedIn</StyledButton>
                        </a>
                        <a href="https://github.com/mvrcii" target="_blank" rel="noopener noreferrer">
                            <StyledButton>GitHub</StyledButton>
                        </a>
                        <StyledButton component="span" onClick={handleCopyEmail}>Mail</StyledButton>
                    </Box>
                </TextBox>
            </StyledBox>

            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Email address copied to clipboard!
                </Alert>
            </Snackbar>
        </Container>
    );
}

const StyledButton = styled(Button)(({theme}) => ({
    fontSize: '1rem',
    borderRadius: '1rem',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    padding: '5px 20px',
    marginRight: '1rem',
    transition: '20ms ease-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
    }
}));

export const TitleText = styled(Typography)(({theme}) => ({
    fontFamily: '"Marcellus", serif',
    fontWeight: 400,
    fontSize: '2.625rem',
    lineHeight: '4rem',
    color: theme.palette.text.primary
}));

const Highlight = styled('u')<{ color: string }>(({color = '#341677'}) => ({
    textDecoration: 'none',
    boxShadow: `inset 0 -.5em 0 ${color}`,
    transition: 'box-shadow .3s ease-out',
    '&:hover': {
        boxShadow: 'inset 0 -1em 0 ${color}',
    }
}));

interface WordColorPair {
    text: string;
    color: string;
}

interface TypewriterHookProps {
    words: WordColorPair[];
    color?: string;
}

const TypewriterHook: React.FC<TypewriterHookProps> = ({words, color = '#341677'}) => {
    const wordsText = words.map((item) => item.text);
    const [currentText, {isType}] = useTypewriter({
        words: wordsText,
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 20,
        delaySpeed: 1200,
        onLoopDone: () => console.log('Loop finished')
    });

    const [currentColor, setCurrentColor] = useState(color); // Initial default color
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
            fontSize: '3rem',
            top: -5,
            position: "relative",
            animation: 'blink 1s step-start infinite'
        }}>|</span>
    );

    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', lineHeight: '3rem',
            margin: "-.5rem 0 0"
        }}>
            <TitleText component="span" sx={{fontSize: '2rem', lineHeight: '3rem'}}>
                I am doing <Highlight color={currentColor}>{currentText}</Highlight>
            </TitleText>
            <Cursor cursorStyle={customCursor}/>
        </Box>
    );
};

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
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
    paddingLeft: '3rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        paddingLeft: '1rem',
        paddingTop: '2rem',
        textAlign: 'center',
    },
}));