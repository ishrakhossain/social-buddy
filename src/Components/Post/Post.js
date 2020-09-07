import React from 'react';
import "./Post.css";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 


    
const Post = (props) => {
    const{id, title} = props.user;
    const classes = useStyles();
    console.log(props)
  
  
  
    return (
        <div className={classes.root}> 
          <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}><b>Social Id: {id}</b> </Paper>
          <Paper className={classes.paper}>Title: {title}</Paper>
          <Paper className={classes.paper}>
         <Link to = {`/post/${id}`}>
         <Button variant="contained" color="primary" disableElevation>
      See More
      </Button>
         </Link>
          </Paper>
          
        </Grid>
        </Grid>
        </div>
        );
    }    


export default Post;