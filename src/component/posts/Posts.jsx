import React, { useState } from 'react';
import { CgMoreVertical } from 'react-icons/cg';
import { BiLike, BiHeart } from 'react-icons/bi';
import './Posts.css';
import { Link } from 'react-router-dom';



const Posts = ({ pic1, pic2, userName, date, text, likeCount, commentCount }) => {

    const [likeCounts, setLikeCounts] = useState(0);
  const [loveCount, setLoveCount] = useState(0);

  const handleLike = () => {
    setLikeCounts(likeCounts + 1);
  };

  const handleLove = () => {
    setLoveCount(loveCount + 1);
  };



    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className="postTopLeft">
                        <img src={pic1} alt="" className='postProfileImg' />
                        <div className='postUserInfo'>
                            <span className='postUserName'>{userName}</span>
                            <span className='postDate'>{date}</span>
                        </div>
                    </div>
                    <CgMoreVertical className="postTopRight" />
                </div>
                <div className="postCenter">
                    <span className='postText'>{text}</span>
                    {pic2 && <img src={pic2} alt="" className='postImg' />}
                </div>
                <div className="postBottom">
                    <div className="postButtonLeft">
                        <BiLike className='likeButton' onClick={handleLike} />
                       

                        <BiHeart className='likeButton' onClick={handleLove}/>

                        <span className="postLikeCounter">
                            {loveCount}loved <br />
                            {likeCounts} liked
                            </span>
                        
                    </div>
                    <div className="postButtonRight">
                        <Link to="/comments">comments</Link>
                        {commentCount}   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
