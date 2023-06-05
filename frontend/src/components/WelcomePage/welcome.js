import React from 'react';
import './welcome.css';
import {useNavigate} from 'react-router-dom';

function WelcomePage() {
const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <h1>Welcome to My Website!</h1>
      <p>Thank you for visiting. We hope you enjoy your stay</p>
      <div className="button-container">
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        <button className="register-button" onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
}

export default WelcomePage;
