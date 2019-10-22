import React, { useState, useEffect }from 'react';
import NavBar from '../Components/NavBar';
import EntryCard from './entryCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddEntry from './addEntry'

function Dashboard () {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    loadPosts();
}, []);

function loadPosts() {

  const id = localStorage.getItem('user_id');


  axiosWithAuth()
        .get(`/api/journal/users/${id}/posts`)
        .then (res => {
            setPosts(res.data)
        })
    .catch(err => {
        console.log(err)
    });
  }


  return (
    <div>
      <NavBar />
      <AddEntry loadPosts={loadPosts}/>
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