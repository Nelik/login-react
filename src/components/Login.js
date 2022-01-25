import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, data } = await axios.post('/log-in', { username, password });
    if (status === 200) {
      console.info(`User ${username} is logged in.`);
    } else {
      console.error(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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

      {/* {isWrongPswd && <div className="invalid-feedback">Wrong username or password!</div>} */}
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Don't have an account yet? <a href="/sign-up">Sign Up</a>
      </p>
    </form>
  );
}

export default Login;
