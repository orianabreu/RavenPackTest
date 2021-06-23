import React from 'react';
import { Link } from "react-router-dom";
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import useStyles from './styles';
import postImg from '../../assets/postimg.png';

export default function ImgMediaCard({pst: { id, title, body }}) {

  const { postCard, postDescription, userText } = useStyles();

  return (
      <Card className={postCard}>
        <Link to={`/singlePost/${id}`} style={{ textDecoration: 'none', color: '#000'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="jellyfish"
              height="140"
              image={postImg}
              title="jellyfish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body2" className={postDescription}>
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions>
          <Typography variant="body1" className={userText}>
            User: 
          </Typography>
        </CardActions>
      </Card>
  );
}

