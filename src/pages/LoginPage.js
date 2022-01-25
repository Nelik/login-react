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

  if (isLoggedIn) {
    return <Greeting />;
  }
  return <Login />;
}

export default LoginPage;
