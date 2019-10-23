import React, { useState, useEffect }from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { Form, TextArea, Button } from 'semantic-ui-react'


function AddEntry (props) {
const [entry, setEntry] = useState([]);

useEffect(() => {

}, )



function handleChanges(e) {
    setEntry({...entry, [e.target.name]: e.target.value})
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    const id = localStorage.getItem('user_id');
    
    const finalEntry = new Object;

    finalEntry.title = ' ';
    finalEntry.text_entry = entry.entry;
    
       axiosWithAuth()
       .post(`/api/journal/users/${id}/posts`, finalEntry)
       .then(res => {
           setEntry(res.data.posts);
           props.loadPosts();
         })
         .catch(err => {
           console.log(err)
       });
  }


  return (
    <div >
      <h2 className='SubTitle'>Add An Entry</h2>
      <Form className="entry-box" onSubmit={handleSubmit}>
        <TextArea style={{ maxWidth: 400 }}
          type="text"
          name="entry"
          placeholder ="Enter your daily lines here"
          onChange={handleChanges}
        />
        <div className='add-btn'>
        <Button size='medium' color='teal'>Add New Entry</Button>   
        </div>
      </Form>
    </div>
  );
};

export default AddEntry;
