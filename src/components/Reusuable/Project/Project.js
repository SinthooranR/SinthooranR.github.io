import React from 'react';
import classes from './Project.module.css';

//Material UI card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const project = (props) => {
  return (
    <Card className={classes.Project} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={props.image}
          object-fit="true"
        />
        <CardContent>
          <h2>{props.title}</h2>
          <Typography variant="body1" color="textPrimary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.link}>
          Github
          </Button>
      </CardActions>
    </Card>
  );
}

export default project;