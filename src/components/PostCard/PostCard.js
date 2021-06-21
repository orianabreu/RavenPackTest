import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import postImg from '../../assets/postImg.jpg';

export default function ImgMediaCard({title, body, userId}) {
  const { postCard } = useStyles();

  return (
      <Card className={postCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={postImg}
            title="Contemplative Reptile"
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

//create search bar and filter user posts
//create a component to see a single post with coments 
//change colors
