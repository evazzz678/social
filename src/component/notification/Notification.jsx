import React, { useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import './Notification.css';
import pic1 from './../../assets/pic1.jpg';




function Notification() {

  const [friendStatus, setFriendStatus] = useState('pending');


  const handleAcceptFriend = () => {
    // Update friend status locally
    setFriendStatus('accepted');

    // Send a request to the backend to update the friend status in the database
    axios.post('http://localhost:3000/user/acceptFriendRequest', {
        currentUserId: currentUserId,
        friendId: friendId
    })
    .then((response) => {
        console.log('Friend request accepted:', response.data);
    })
    .catch((error) => {
        console.error('Error accepting friend request:', error);
        // If there's an error, you might want to revert the status change
        setFriendStatus('pending');
    });
};


  const notifications = [
    { id: 1, name: 'User 1', message: 'sent you a friend request' },
    { id: 2, name: 'User 2', message: 'sent you a friend request' },
    { id: 3, name: 'User 3', message: 'sent you a friend request' },
    { id: 4, name: 'User 4', message: 'sent you a friend request' },
  ];

  return (
    <div className="notification-container">
      <h1 className="notification-header">
        Notifications <IoMdNotificationsOutline className="notification-icon" />
      </h1>

      {notifications.map((notification) => (
        <div key={notification.id} className="notification-bar">
          <img src={pic1} alt="" className="notification-image" />
          <div className="notification-content">
            <h5 className="notification-name">{notification.name}</h5>
            <p className="notification-message">{notification.message}</p>
          </div>
          <button className="notification-button" onClick={handleAcceptFriend}>Accept</button>
        </div>
      ))}
    </div>
  );
}

export default Notification;
