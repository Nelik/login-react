import React, { useState } from 'react';
import axios from 'axios';

function SignUp({ handleSignUpCallback }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const unexpectedError = 'An unexpected error happened. Please, try to log in again.';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setErrorMessage('Username, password and email are required!');
    }
    axios
      .post('/sign-up', { username, password, email })
      .then((result) => {
        handleSignUpCallback(result.data.username);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorMessage(error.response.data.error);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
          setErrorMessage(unexpectedError);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          setErrorMessage(unexpectedError);
        }
      });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (errorMessage) => errorMessage && <div className="error">{errorMessage}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          type="text"
          className="form-control"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {renderErrorMessage(errorMessage)}
      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered? <a href="/log-in">Log In</a>
      </p>
    </form>
  );
}

export default SignUp;
