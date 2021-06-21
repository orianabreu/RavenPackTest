import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import postImg from '../../assets/postimg.png';

export default function ImgMediaCard({title, body, userId, setPostIsOpen}) {

  const { postCard, postDescription, userText } = useStyles();

  return (
      <Card className={postCard}>
        <CardActionArea onClick={() => {setPostIsOpen(prevState=>!prevState)}}>
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

        <CardActions>
          <Typography variant="body1" className={userText}>
            User: {userId}
          </Typography>
        </CardActions>
      </Card>
  );
}

