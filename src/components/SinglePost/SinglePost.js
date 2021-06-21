import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

export default function SinglePost() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
          .then(response => response.json())
          .then(json => setComments(json))
      }, [setComments])

    const { title, description, userAvatar, commentContainer } = useStyles();

    return (
        <Container maxWidth="md">

            <Typography className={title}>
                post title
            </Typography>
                <Grid container item xs={12}>
                    <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={userAvatar} />
                    <div>
                        <Typography>User Id</Typography>
                    </div>
                </Grid>
            <Typography className={description}> 
                post description
            </Typography>
            <Typography>Comments:</Typography>

            {comments.map((comment) => (
                <div className={commentContainer} key={comment.id}>
                    <Typography variant='body1' color='primary'>{comment.name}:</Typography>
                    <Typography paragraph>{comment.body}</Typography>
                </div>
            ))}
            
        </Container>
    )
}