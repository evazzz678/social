import React from 'react';
import './ViewPost.css';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import samplePostImage from './../../assets/pic1.jpg';
import sampleUserImage from './../../assets/pic2.jpg';

function ViewPost() {
  return (
    <div className="view-post">
      <div className="post-header">
        <img src={sampleUserImage} alt="User" className="user-image" />
        <div className="user-details">
          <h5 className="user-name">John Doe</h5>
          <span className="post-date">August 29, 2024</span>
        </div>
      </div>
      <div className="post-content">
        <p className="post-text">
          Enjoying a beautiful day at the park! #nature #relaxation
        </p>
        <img src={samplePostImage} alt="Post" className="post-image" />
      </div>
      <div className="post-actions">
        <button className="action-button">
          <FaHeart /> <span>Like</span>
        </button>
        <button className="action-button">
          <FaComment /> <span>Comment</span>
        </button>
        <button className="action-button">
          <FaShare /> <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default ViewPost;
