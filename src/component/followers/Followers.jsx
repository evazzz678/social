// import React from 'react'
// import search from "./../../assets/search-icon.jpg"
// import pic3 from "./../../assets/pic3.jpg"
// import pic1 from "./../../assets/pic1.jpg"
// import { CgMoreVertical } from 'react-icons/cg'

// function Followers() {
//   return (
//     <div>
//         <br />
//         <div className='search'>
//         <div className='search-bar'>
//           <input type="text" placeholder='search' className='search-input' />
//           <img src={search} alt="" className='search-icon' />
//         </div>
//       </div>

//       <div>
//        <br />
//         <div className='postTop'>
//           <div className="postTopleft">
//             <img src={pic1} alt="" className='postProfileImg' />
//             <span className='postUserName'>Namee</span>
//             <span className='postDate'>active 5 mint ago</span>
//           </div>
//           <div className="postTopRight">
//           <CgMoreVertical/>
//           </div>
//           </div>
//       </div>
//         <br />
//       <div className='postTop'>
//           <div className="postTopleft">
//             <img src={pic1} alt="" className='postProfileImg' />
//             <span className='postUserName'>Namee</span>
//             <span className='postDate'>active 5 mint ago</span>
//           </div>
//           <div className="postTopRight">
//           <CgMoreVertical/>
//           </div>
//           </div>






//     </div>
//   )
// }

// export default Followers

import React from 'react';
import './Followers.css';
import { CgMoreVertical } from 'react-icons/cg';
import profilePic from './../../assets/pic1.jpg';

function Followers() {
  const followers = [
    { name: 'John Doe', lastActive: '5 minutes ago' },
    { name: 'Jane Smith', lastActive: '10 minutes ago' },
  ];

  return (
    <div className="followers">
      <div className="search-bar">
        <input type="text" placeholder="Search followers" className="search-input" />
        <i class="fa-solid fa-magnifying-glass"></i>
        
      </div>
      {followers.map((follower, index) => (
        <div key={index} className="follower-item">
          <img src={profilePic} alt={follower.name} className="profile-img" />
          <div className="follower-info">
            <span className="follower-name">{follower.name}</span>
            <span className="follower-active">{follower.lastActive}</span>
          </div>
          <CgMoreVertical className="more-icon" />
        </div>
      ))}
    </div>
  );
}

export default Followers;
