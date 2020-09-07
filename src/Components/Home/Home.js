import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';
const Home = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])

    return (
        <div>
            <div>
        {
          users.map(user => <Post user = {user}></Post>)
        }
        
        </div>
        <div>
            {
                 
            }
        </div>
        </div>
    );
};

export default Home;