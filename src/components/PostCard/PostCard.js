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
  const { postCard } = useStyles();

  return (
      <Card className={postCard}>
        <CardActionArea onClick={() => {setPostIsOpen(prevState=>!prevState)}}>
          <CardMedia
            component="img"
            alt="Skinkcare products"
            height="140"
            image={postImg}
            title="Skinkcare products"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Typography variant="body" color="textSecondary" component="h3">
            User: {userId}
          </Typography>
        </CardActions>
      </Card>
  );
}

