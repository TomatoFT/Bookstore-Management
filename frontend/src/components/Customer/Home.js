import React from 'react';
import './Home.css';
import Books from "../HomePage/Books"
const Home = () => {
  return (
    <div>
        <div className='home-container'><Books/></div>
    </div>
  );
};

export default Home;
