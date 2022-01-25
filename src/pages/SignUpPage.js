import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SignUp from '../components/SignUp';
import Greeting from '../components/Greeting';

function SignUpPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function getIsLoggedIn() {
      const { data } = await axios.get('/is-logged-in');
      setLoggedIn(data.isLoggedIn);
    }
    getIsLoggedIn();
  }, []);

  const handleSignUp = () => {
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Greeting handleLogOutCallback={() => setLoggedIn(false)} />;
  }
  return <SignUp handleSignUpCallback={handleSignUp} />;
}

export default SignUpPage;
