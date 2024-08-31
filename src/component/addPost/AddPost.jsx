import React from 'react';
import './AddPost.css';
import pic1 from './../../assets/pic1.jpg';
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from 'react-icons/md';
import { Link } from 'react-router-dom';

function AddPost() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={pic1} alt="Profile" />
          <textarea
            placeholder="What's on your mind?"
            className="shareInput"
          ></textarea>
        </div>
      </div>
      <hr className="shareHr" />
      <div className="shareButtons">
        <div className="shareOption">
          <Link to="/addPhoto" className="shareLink">
            <MdPermMedia className="shareIcon" />
            <span>Photo/Video</span>
          </Link>
        </div>
        <div className="shareOption">
          <MdLabel className="shareIcon" />
          <span>Tag</span>
        </div>
        <div className="shareOption">
          <MdRoom className="shareIcon" />
          <span>Location</span>
        </div>
        <div className="shareOption">
          <MdEmojiEmotions className="shareIcon" />
          <span>Feelings</span>
        </div>
        <button className="shareButton">Share</button>
      </div>
    </div>
  );
}

export default AddPost;
