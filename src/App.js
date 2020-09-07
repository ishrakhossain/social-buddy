import React from 'react';

import './App.css';
import Header from './Components/Header/Header';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Post from './Components/Post/Post';
import PostDetail from './Components/Post/PostDetail/PostDetail';
import Comments from './Components/Comments/Comments';

function App() {
  
    
  
  return (
    
    <div>
      
      
      <Router>
       <Switch>
         <Route exact path = '/'>
         <Home></Home>
         </Route>
         <Route path = '/post/:postId'>
           <PostDetail></PostDetail>
         </Route>
         
         <Route path = "*">
           <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}


export default App;
