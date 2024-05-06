import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { username, password });
      console.log(response.data);
      setLoginSuccess('Login successful!!');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-illustration"></div>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} // Toggle eye icon based on showPassword state
              aria-hidden="true"
              onClick={togglePasswordVisibility} // Call togglePasswordVisibility function on click
              style={{ position: 'absolute', fontSize: '20px', right: '30%', top: '53.5%', cursor: 'pointer' }}
            ></i>
            <button type="submit">Login</button>
            {loginError && <p className="error-message">{loginError}</p>}
            {loginSuccess && <p className="success-message">{loginSuccess}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
