import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Greeting from '../components/Greeting';

function HomePage({ logOutCallback }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getIsLoggedIn() {
      const { data } = await axios.get('/is-logged-in');
      setLoggedIn(data.isLoggedIn);
    }
    getIsLoggedIn();
  }, []);

  if (isLoggedIn) {
    return <Greeting logOutCallback={logOutCallback} />;
  }
  return (
    <>
      <h3>Welcome to my Interview Project!</h3>

      <p className="forgot-password text-right">
        Already registered? <a href="/log-in">Log In</a>
      </p>
      <p className="forgot-password text-right">
        Don't have an account yet? <a href="/sign-up">Sign Up</a>
      </p>
    </>
  );
}

export default HomePage;
