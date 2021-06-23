import React, { useState, useEffect } from 'react';

import SingleComment from '../SingleComment/SingleComment';

export default function Comments({postID}) {
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [] )
    
    return (
        <div>
            {comments.map(data => 
                <SingleComment key={data.id} comment={data} />)
            }
        </div>
    );
}