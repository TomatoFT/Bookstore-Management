import React from 'react';
import './Home.css'; // Import the CSS file
import Books from './Books'
const Home = () => {
  return (
    <div>
        <div className='home-container'><Books/></div>
    </div>
  );
};

export default Home;
