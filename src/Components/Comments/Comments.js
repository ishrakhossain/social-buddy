import React, { useState, useEffect } from 'react';
import PostDetail from '../Post/PostDetail/PostDetail';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
const Comments = (props) => {
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}><h4>User Name: {props.comment.name}</h4></Paper>
        <Paper className={classes.paper}><h4>Email: {props.comment.email}</h4></Paper>
          <Paper className={classes.paper}><h4>Comments: {props.comment.body}</h4></Paper>
        </Grid>
        </Grid>
        

        </div>
    );
};

export default Comments;