import React, { useState, useEffect }from 'react';
import NavBar from '../Components/NavBar';
import EntryCard from './EntryCard';
import axiosWithAuth from '../utils/axiosWithAuth';

function Dashboard () {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    axiosWithAuth()
        .get('/api/journal/posts')
        .then (res => {
            console.log(res);
            setPosts(res.data.posts)
        })
    .catch(err => {
        console.log(err)
    });
}, [])

  return (
    <div>
      <NavBar />
      <div  className='dashboard-content'>
        <h2 className='SubTitle'>Welcome to your daily journal entry.</h2>
        <div className='main-content'>
          {posts.map(post => ( 
            <EntryCard key={post.id} post={post} /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;