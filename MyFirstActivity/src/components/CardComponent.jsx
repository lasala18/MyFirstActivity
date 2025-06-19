import { useState } from 'react';
import React from 'react'

function CardComponent() {
    const [likes, setLikes] = useState(0); 
    const [dislikes, setDislikes] = useState(0); 

    const handleLike = () => {
      setLikes(likes + 1); 
    };

    const handleDislike = () => {
      setDislikes(dislikes + 1); 
    };

    return (
        <>
            <div className='card'>
                <p>
                  Charles Francis Padua, BSIT 3 of CCDI Sorsogon wins Gold Medal in IT Software Solutions for 
                  Business category of the recent Philippine National Skills Competition 
                  or World Skills Philippines held last August 21-25, 2024 at the World 
                  Trade Center
                </p> <br></br>
                
                <div className="reaction-buttons">
                  <button 
                    className="like-button"
                    onClick={handleLike}
                  >
                    Like (<span className="like-count">{likes}</span>)
                  </button>
                  <button 
                    className="dislike-button"
                    onClick={handleDislike}
                  >
                    Dislike (<span className="dislike-count">{dislikes}</span>)
                  </button>
                </div>
                
                <div className="total-ratings">
                  Total Ratings: <span className="rating-count">{likes + dislikes}</span>
                </div>
            </div>
        </>
    )
}

export default CardComponent;