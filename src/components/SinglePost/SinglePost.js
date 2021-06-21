import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

export default function SinglePost() {

    const { title, description, userAvatar } = useStyles();

    return (
        <Container maxWidth="md">
            <Typography className={title}>
                my title
            </Typography>
            <Box>
                <Grid container item xs={12}>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={userAvatar} />
                    <div>
                        <Typography>Name</Typography>
                        <Typography>Date</Typography>
                    </div>
                </Grid>
            </Box>
            <Typography className={description}> 
                description
            </Typography>
            <Box>
                <Typography>Comments:</Typography>
                <Typography>all comments</Typography>
            </Box>
        </Container>
    )
}