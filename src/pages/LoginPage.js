import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import Greeting from '../components/Greeting';

function LoginPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getIsLoggedIn() {
      const { data } = await axios.get('/is-logged-in');
      setLoggedIn(data.isLoggedIn);
    }
    getIsLoggedIn();
  }, []);

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Greeting handleLogOutCallback={() => setLoggedIn(false)} />;
  }
  return <Login handleLogInCallback={handleLogIn} />;
}

export default LoginPage;
