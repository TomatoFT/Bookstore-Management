import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your login logic here
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className='login-form'>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;