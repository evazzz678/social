import React from 'react'
import pic1 from "./../../assets/pic1.jpg"
import "./Sidebar.css"
import { Link } from 'react-router-dom'


function Sidebar() {



  return (
    <div>
      <div className='sidebar'>

        <div className='profile-box'>
          <img src={pic1} alt="" className='sidebar-img' />
          <h1>james</h1>
        </div>

        <div className='sidebar-button'>

          <div>
            <Link to="/postHisory" className='link'>
              20
              <p>Photos</p>
            </Link>
          </div>


          <div>
            <Link to="/followers" className='link'>
              20
              <p>followers</p>
            </Link>
          </div>


          <div>
            <Link to="/followings" className='link'>
              20
              <p>followings</p>
            </Link>
          </div>

        </div>



        <div className='sidebar-button-type2'>
          <Link to="/viewprofile" className='button'>view Profile</Link>
          <Link to="/findfriends" className='button'>Find friends</Link>
          <Link to="/addpost" className='button'>Add Post</Link>

          <Link to="/postHisory" className='button'>PostHistory</Link>
          <Link to="/notification" className='button'>Notification</Link>

          <Link to="/chat" className='button'>Chat</Link>
          <Link to="/" className='button'>switch account</Link>

          <Link to="/logOut" className='button' >LogOut</Link>
        </div>
      </div>

    </div>
  )
}

export default Sidebar