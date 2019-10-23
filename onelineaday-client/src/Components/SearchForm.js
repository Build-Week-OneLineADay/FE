import React, { useState } from "react";
import EntryCard from './entryCard';
import axiosWithAuth from '../utils/axiosWithAuth'
import search from '../search.svg';

export default function SearchForm({ onSearch }) {
  const [text_entry, setEntry] = useState('');
  const [searchPosts, setSearchPosts] = useState([]);
  const id = localStorage.getItem('user_id');

  const onNewSearch = (str) => {
    axiosWithAuth()
    .get(`/api/journal/users/${id}/posts/?text_entry=${str}`)
    .then(res => setSearchPosts(res.data.posts));
  }

  const handleInputChange = (e) => {
    setEntry(e.target.value)
  }
  return (
    <section>
      <form onSubmit={(event) => {
        event.preventDefault();
        onNewSearch(text_entry)
      }}>

      <div className='search-div' >
        <input  
          className='search'
          onChange={handleInputChange}
          placeholder="Search Entry"
          value={text_entry}
          text_entry="text_entry"
        />
        <img src={search} alt='' className='search-img' onClick={onNewSearch} />
      </div>
      </form>

      <div className="grid-view">
        {searchPosts.map(res => <EntryCard posts={res} />)}
      </div>    
    </section>
  );
}