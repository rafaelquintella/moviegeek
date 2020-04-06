/**
 * Presentational component
 */
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  media: {
    height: 445,

    paddingTop: '56.25%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const DEFAULT_POSTER_PLACEHOLDER = "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png"

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_POSTER_PLACEHOLDER : movie.Poster;

    const classes = useStyles();
    //  const bull = <span className={classes.bullet}>•</span>;  
//   const q = MessageBroker();



  return (

    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
      {movie.Title}
      </Typography>
      <CardMedia className={classes.media} image={poster}
          title={`The movie title: ${movie.Title}`}/>
      <Typography className={classes.pos} color="textSecondary">
        Description
      </Typography>
      <Typography variant="body2" component="p">
        {movie.Year}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Details</Button>
    </CardActions>
  </Card>
  );
};

export default Movie;
