import './App.css'
import Authen from './component/authentication/Login'
import SignUp from './component/authentication/SignUp'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPhotos from './component/addphotos/AddPhotos';
import Notification from "./component/notification/Notification"
import Home from './component/home/Home';
import Followers from './component/followers/Followers';
import { useSelector } from 'react-redux';
import FindFriends from './component/findFriends/FindFriends';
import PostHistory from './component/postHostory/PostHistory';
import ViewProfile from "./component/viewProfile/ViewProfile"
import OurStory from './component/ourStory/OurStory';
import Header from './component/header/Header';
import AddPost from './component/addPost/AddPost';
import Followings from './component/followings/Followings';
import Chat from './component/chat/Chat';
import LogOut from './component/logOut/LogOut';
import Comments from './component/comments/Comments';
import Sidebar from './component/sidebar/Sidebar';





function App() {


  let theme = useSelector((state) => state.value)

  return (
    <>

      <div className={`${theme == 'light' ? 'light' : 'dark'}`}>
        <BrowserRouter>

          <Header />


          <div className='section-1'>
            <div className='section-11'>
              <Sidebar />
            </div>
            <div className='section-12'>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/viewprofile" element={<ViewProfile />} />
                <Route path="/findfriends" element={<FindFriends />} />
                <Route path="/postHisory" element={<PostHistory />} />
                <Route path="/profile" element={<ViewProfile />} />
                <Route path="/ourStory" element={<OurStory />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/followers" element={<Followers />} />
                <Route path="/addPhoto" element={<AddPhotos />} />
                <Route path="/followings" element={<Followings />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/logOut" element={<LogOut />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/" element={<Authen />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </div>
          </div>



        </BrowserRouter>
      </div>








    </>
  )
}

export default App
