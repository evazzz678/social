import React from 'react'
import pic1 from "./../../assets/pic1.jpg"
import pic2 from "./../../assets/pic2.jpg"
import "./Feeds.css"
import { CgMoreVertical } from 'react-icons/cg'
import { BiLike , BiHeart} from 'react-icons/bi'


function Feeds() {

  


  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className="postTopleft">
            <img src={pic1} alt="" className='postProfileImg' />
            <span className='postUserName'>Namee</span>
            <span className='postDate'>5 mint ago</span>
          </div>
          <div className="postTopRight">
            
          <CgMoreVertical/>
          </div>
          </div>
          <div className="postCenter">
            <span className='postText'>heyy..</span>
            <img src={pic2} alt="" className='postImg'/>
          </div>
          <div className="postBottom">
            <div className="postButtonLeft">
              <BiLike className='likebutton' />
              {likeCount}
              <BiHeart className='likebutton' onClick={handleLove}/>
              {loveCount}

             
            </div>

            <div className="postButtonRight">6 comments
            </div>
            
          </div>


        


      </div>




    </div>
  )
}

export default Feeds