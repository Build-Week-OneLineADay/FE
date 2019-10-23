import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EntryCard = ({ post }) => {
    const {text_entry, created_at} = post

    return (
       <Link to={'/EditEntry'} className="LinkWrapper">
            <Card 
                meta={`Date: ${created_at}`}
                description={text_entry}  
            />
       </Link>
       
    )
}

export default EntryCard