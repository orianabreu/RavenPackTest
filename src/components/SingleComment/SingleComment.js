import React, { useState, useEffect } from "react"; 
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";

import useStyles from "./styles";

export default function SingleComment({ comment: { name, email, body } }) {
  const [userImage, setUserImage] = useState(
    "https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art-thumbnail.png"
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const img = data.results[0].picture.large;
        setUserImage(img);
      });
  }, []);

  const { commentCard, userImageStyle, userComment, userInfo } = useStyles();

  return (
    <Card variant='outlined'>
      <CardMedia className={commentCard}>
        <img src={userImage} alt='user' className={userImageStyle} />
      </CardMedia>

      <CardHeader
        title={name}
        subheader={email}
        classes={{
          title: userInfo,
          subheader: userInfo,
        }}
      />

      <CardContent>
        <Typography className={userComment}>{body}</Typography>
      </CardContent>
    </Card>
  );
}
