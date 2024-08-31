import React from 'react';
import './LogOut.css';
import { useNavigate } from 'react-router-dom';


function Logout() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data (e.g., tokens)
    localStorage.removeItem('token');
    localStorage.removeItem('user')

    navigate('/')
  }

  return (
    <div className="logout-container">
      <h2 className="logout-title">Are you sure you want to logout?</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
