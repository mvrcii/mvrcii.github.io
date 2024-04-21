import {Container, Typography} from "@mui/material";


export function ErrorPage() {

    return (
        <Container id='404'>
            <Typography variant='h3'>Not Found</Typography>
            <p>You just hit a route that doesn't exist... the sadness.</p>
        </Container>
    );
}