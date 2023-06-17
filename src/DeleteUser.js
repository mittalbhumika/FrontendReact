
import React, { useState } from 'react';
import './DeleteUser.css';
import userImage from '../src/imggg.jpg'; // Replace with the path to your user image

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('patient');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleDeleteUser = () => {
    if (!userId.trim()) {
      setErrorMessage('User ID is required');
      return;
    }

    // Show confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete the user?');
    if (isConfirmed) {
    
      setUserId('');
      setUserType('patient');
      setSuccessMessage('User deleted successfully');
      setErrorMessage('');
    }
  };

  return (
    <div className="delete-user-container">
      <div className="image-container">
        <img src={userImage} alt="User" className="user-image" />
      </div>
      <div className="content-container">
        <h2>Delete User</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="input-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={handleUserIdChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="userType">User Type:</label>
          <select id="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default DeleteUser;


