import React from 'react';
import axios from 'axios';

function Greeting() {
  const handleLogOut = async () => {
    await axios.get('/log-out');
  };

  return (
    <>
      <h3>Welcome to my Interview Project!</h3> <p>Would you like to log out?</p>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}

export default Greeting;
