import React from 'react';
import './ViewProfiles.css';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feeds/Feeds';
import AddPost from "../addPost/AddPost";
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import samplePostImage from './../../assets/pic1.jpg';
import sampleUserImage from './../../assets/pic1.jpg';
import pic1 from './../../assets/pic1.jpg';
import pic2 from './../../assets/pic2.jpg';

function ViewProfiles() {
  return (
    <div className="view-profile-page">
   
      <div className="main-content">
        <AddPost />
        <div className="profile">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className='profileCoverImg' src={pic1} alt="Cover" />
                <img className='profileUserimg' src={pic2} alt="User" />
              </div>
              <div className="profileinfo">
                <h4 className='profileInfoName'>John Doe</h4>
                <p className='profileInfoDesc'>Hello friends</p>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <div className="view-post">
                <div className="post-content">
                  <div className="post-header">
                    <img src={sampleUserImage} alt="User" className="user-image" />
                    <div className="user-details">
                      <h5 className="user-name">John Doe</h5>
                      <span className="post-date">August 29, 2024</span>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfiles;
