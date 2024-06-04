import React from 'react';
import { postings } from './postings'; // Import the 'postings' module

function Posting(){
    let postList = postings.map((posting, i) => {
        return(
            <div key={i}>
                <img src={posting.imageURL} alt="Posting Image" />
                <h3>{posting.title}</h3>
                <p>{posting.description}</p>
            </div>
        )
    })

    return(
        <div className='posting'>{postList}</div>
    )
}

export default Posting;