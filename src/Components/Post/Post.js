import React from 'react';
import "./Post.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

    
const Post = (props) => {
    const{body, id, title} = props.user;
    const classes = useStyles();
  
  
  
    return (
        <div style={{ width: '100%', color: '#3352FF' }} class = 'whole-card'>
          
      <Card className={classes.root} justifyContent="center" variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} >
        
            <h1>Social Buddy: {id}</h1>
        </Box>
        
      </Box>
        </Typography>
        <Typography variant="h5" component="h2">
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1}>
        
            <h3>Title: {title}</h3>
        </Box>
        
      </Box>
        </Typography>
        
        <Typography variant="body2" component="p">
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} bgcolor>
        
           <p><b>Comments: {body}</b></p>
        </Box>
        
      </Box>
         
        </Typography>
      </CardContent>
      
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} bgcolor>
        
        <Button variant="contained"  color="primary" disableElevation>
      See More...
    </Button>
        </Box>
        
      </Box>

      
    </Card>
        </div>
        );
    }    


export default Post;