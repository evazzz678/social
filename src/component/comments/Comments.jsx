import React, { useState } from 'react'
import "./Comments.css"


function Comments() {

    const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };


  return (
    <div>

<div className="comment-section">
      <h3>Comments</h3>
      
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>{comment}</p>
          </div>
        ))}
      </div>
      
      <div className="comment-input-section">
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-input"
        />
        <button onClick={handleAddComment} className="comment-button">Post</button>
      </div>
    </div>

    </div>
  )
}

export default Comments