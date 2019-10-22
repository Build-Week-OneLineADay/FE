import React, { useState } from "react";
import EntryCard from './EntryCard';
import Axios from "axios";
import { Search } from 'semantic-ui-react'

export default function SearchForm({ onSearch }) {
  const [entry, setEntry] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onNewSearch = (str) => {
    Axios.get(`https://backend-onelineaday.herokuapp.com/api/journal/posts?text_entry=${str}`)
    .then(res => setSearchResults(res.data.results));
  }

  const handleInputChange = (e) => {
    setEntry(e.target.value)
  }
  return (
    <section>
      <Search onSubmit={(event) => {
        event.preventDefault();
        onNewSearch(entry)
        }}>
        <input
          onChange={handleInputChange}
          placeholder="Search Entry"
          value={entry}
          entry="entry"
        />
        <button className="SubmitButton" type="submit">Search</button>
      </Search>

      <div className="grid-view">
        {searchResults.map(res => <EntryCard lines={res} />)}
      </div>    
    </section>
  );
}