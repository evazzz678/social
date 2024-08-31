import React from 'react'
import './ViewProfile.css'

 import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feeds/Feeds'
 import pic1 from "./../../assets/pic1.jpg"
import pic2 from "./../../assets/pic2.jpg"
import AddPost from "../addPost/AddPost"
import ViewPost from '../view-post/ViewPost'


function ViewProfile() {
  return (
    <div className='view-profile-page' >


      <div>
        <Sidebar />

      </div>
      <div>
        <AddPost />
      



 


        <div className='profile'>

          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className='profileCoverImg' src={pic1} alt="" />
                <img className='profileUserimg' src={pic2} alt="" />
              </div>
              <div className="profileinfo">
                <h4 className='profileInfoName'>namee</h4>
                <h4 className='profileInfoDesc'>Hello friends</h4>
              </div>


            </div >

            <div className="profileRightbottom">
              
              <ViewPost/>
            </div> 
          </div>


        </div> 


      </div>
    </div>
  )
}

export default ViewProfile


