import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Comments from '../../Comments/Comments';
import Photos from '../../Photos/Photos';
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
const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const classes = useStyles();
    const[comments,setComments] = useState([]);
    const[photos,setPhotos] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>
           setPost(data)
            )
    },[])
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data =>
           setComments(data)
            )
    },[])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
        .then(res => res.json())
        .then(data => 
           setPhotos(data.results))
    }, [])
    
    const rightComment = comments.filter(object => parseInt(object.postId) === parseInt(postId));
    let commentLength = rightComment.length;
    console.log(commentLength)
    const rightPhoto = photos.slice(1, commentLength + 1 );
    
    return (
        <div className={classes.root}>
            
            <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h1>Social Buddy: {postId}</h1></Paper>
          <Paper className={classes.paper}><h2>Title: {post.title}</h2></Paper>
          <Paper className={classes.paper}><h3>Comments: {post.body}</h3></Paper>
         
          
        
        </Grid>
        <Grid item xs={2}>
        {
            rightPhoto.map(photo => <Photos photo = {photo}></Photos>)
        }
        </Grid>
        <Grid item xs={10}>
            {
                 rightComment.map(comment => <Comments comment={comment}></Comments>)
            }
        </Grid>
        </Grid>
        
        </div>
    );
};

export default PostDetail;