import React, { useState } from "react";
import EntryCard from './entryCard';
import axios from 'axios'
import search from '../search.svg';

export default function SearchForm({ onSearch }) {
  const [text_entry, setEntry] = useState('');
  const [searchPosts, setSearchPosts] = useState([]);

  const onNewSearch = (str) => {
    axios
    .get(`https://backend-onelineaday.herokuapp.com/api/journal/posts?text_entry=${str}`)
    .then(res => setSearchPosts(res.data.posts.text_entry));
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
          <img src={search} alt='' className='search-img'  />
        </div>
      </form>

      <div className="grid-view">
        {searchPosts.map(res => <EntryCard text_entry={res} />)}
      </div>    
    </section>
  );
}