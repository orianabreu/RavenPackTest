import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";

import useStyles from "./styles";

export default function PostList() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setPostsList(data));
  }, []);

  const { heading, text } = useStyles();

  return (
    <Container maxWidth='lg'>
      <Typography className={heading}>List of posts:</Typography>
      {postsList.map((item) => {
        return (
          <Link to={`/singlePost/${item.id}`} key={item.id}> 
            <Typography className={text}>
              {JSON.stringify(item.title)}
            </Typography>
          </Link>
        );
      })}
    </Container>
  );
}
