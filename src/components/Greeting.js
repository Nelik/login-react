import React from 'react';
import axios from 'axios';

function Greeting({ handleLogOutCallback }) {
  const handleLogOut = async () => {
    axios.get('/log-out').then(() => handleLogOutCallback());
  };

  return (
    <>
      <h3>Welcome to my Interview Project!</h3> <p>Would you like to log out?</p>
      <button className="btn btn-primary btn-block" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
}

export default Greeting;
