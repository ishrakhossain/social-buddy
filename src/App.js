import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import { useState, useEffect } from 'react';


function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])
  
  return (
    <div>
      
        <Header></Header>
        {
          users.map(user => <Post user = {user}></Post>)
        }
        
    </div>
  );
}


export default App;
