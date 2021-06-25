import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
    Typography,
    Container
} from '@material-ui/core';

import useStyles from './styles';
import Comments from '../Comments/Comments';

export default function SinglePost() {

    const [postInfo, setPostInfo] = useState({
        title: '',
        body: '',
        userId: '',
    });
    const { postId } = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
          .then(response => response.json())
          .then(json => setPostInfo(json))
      }, [postId])

    const { postTitle, description, subtitle } = useStyles();
    const { title, body, userId } = postInfo;

    return (
        <Container maxWidth="md">

            <Typography className={postTitle}>
                {title}
            </Typography>

            <Typography className={subtitle}>By user {userId}</Typography>

            <Typography className={description}> 
                {body}
            </Typography>

            <Typography className={subtitle}>Comments:</Typography>
            <Comments postID={postId}/>
        </Container>
    )
}