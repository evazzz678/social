import React, { useState } from 'react';
import './FindFriends.css';

const friends = [
  {
    name: 'Patricia Knott',
    title: 'Web Developer',
    followers: 400,
    posts: 40,
    imgSrc: 'https://picsum.photos/130/130?image=1027',
  },
  {
    name: 'John Doe',
    title: 'Web Developer',
    followers: 400,
    posts: 40,
    imgSrc: 'https://picsum.photos/130/130?image=839',
  },
  {
    name: 'Justin Ramos',
    title: 'Web Developer',
    followers: 400,
    posts: 40,
    imgSrc: 'https://picsum.photos/130/130?image=856',
  },
  {
    name: 'Mary Huntley',
    title: 'Web Developer',
    followers: 400,
    posts: 40,
    imgSrc: 'https://picsum.photos/130/130?image=836',
  },
];

function FindFriends() {
  
//   let [data ,setData] = useState([])

//   useEffect(() => {
//     axios.get("http://localhost:3000/user/getalluser")
//     .then((result) => {
//         console.log(result);
//         setData(result.data)
//     }).catch((error) => {
//         console.log(error);
//     })
// }, [])




  return (
    <div className="find-friends">
      <h3 className="title">Friends Suggestion</h3>
      <div className="friends-grid">
        {friends.map((friend, index) => (
          <div key={index} className="friend-card">
            <img className="friend-image" src={friend.imgSrc} alt={friend.name} />
            <div className="friend-info">
              <h4 className="friend-name">{friend.name}</h4>
              <p className="friend-title">{friend.title}</p>
              <p className="friend-stats">{friend.followers} Followers • {friend.posts} Posts</p>
              <button className="add-friend-button">Add Friend</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindFriends;
