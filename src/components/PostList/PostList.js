import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { 
    Typography,
    Container 
} from '@material-ui/core';

import useStyles from './styles';

export default function PostList({pst: { id }}) {

    const [postsList, setPostsList] = useState([]);

    const { postId } = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPostsList(json))
    }, [])

    const { heading, text } = useStyles();

    return (
        <Container maxWidth='lg'>
            <Typography className={heading}>
                List of posts:
            </Typography> 
            {postsList.map((item) => {
                return (
                <Link to={`/singlePost/${id}`} key={item.id}>
                    <Typography className={text}>
                        {JSON.stringify(item.title)}
                    </Typography>
                </Link>
                )
            })}
        </Container>
    )
}