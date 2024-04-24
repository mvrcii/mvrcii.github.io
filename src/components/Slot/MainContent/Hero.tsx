import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import heroImage from '../../../assets/hero.jpg';
import {Cursor, useTypewriter} from "react-simple-typewriter";

export const Hero = () => {
    return (
        <StyledBox>
            <ImageBox>
                <img src={heroImage} alt="Hero Image"/>
            </ImageBox>
            <TextBox>
                <TitleText>I'm Marcel Roth</TitleText>
                <TypewriterHook/>
                <Box sx={{margin: '18px 0 32px 0'}}>
                    <StyledButton>LinkedIn</StyledButton>
                    <StyledButton>GitHub</StyledButton>
                    <StyledButton>Mail</StyledButton>
                </Box>
            </TextBox>

        </StyledBox>
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

const TitleText = styled(Typography)({
    fontFamily: '"Marcellus", serif',
    fontWeight: 400,
    fontSize: '2.625rem',
    lineHeight: '4rem'
});

const Highlight = styled('u')({
    textDecoration: 'none',
    boxShadow: 'inset 0 -.5em 0 #341677',
    transition: 'box-shadow .3s ease-out',

    '&:hover': {
        boxShadow: 'inset 0 -1em 0 #341677',
    }
});

const TypewriterHook = () => {
    const [text] = useTypewriter({
        words: [
            'Machine Learning.',
            'Computer Vision.',
            'Software Development.',
            'AI Safety.',
            'Research.',
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 20,
        delaySpeed: 1200,
    });

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
            <TitleText
                component="span"
                className="fadeInText"
                sx={{
                    fontSize: '2rem',
                    lineHeight: '3rem',
                    margin: "-.5rem 0 0",
                }}
            >
                I am doing <Highlight>{text}</Highlight>
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

const ImageBox = styled(Box)({
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensures nothing spills out if the image is too large
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: "50%",
    }
});

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