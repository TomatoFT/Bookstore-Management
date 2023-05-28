import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Logout from './components/Authentication/Logout';
import Import from './components/Admin/Import';
import Footer from './components/HomePage/Footer';
import WelcomePage from './components/WelcomePage/welcome';
import AdminPage from './components/Admin/AdminPage';
import Home from './components/Customer/Home';

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
      <div className='header-page'>
      <h1>TomatoLMS: Library Mangement System</h1>
      <p>Welcome you to come here in the world of books where you can love the reading
         and spreading it to the people around you</p>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">WelcomePage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/import">Import</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/import" element={<Import />}/>
          <Route path='/adminPage' element={<AdminPage />}/>
          <Route path='/customerPage' element={<Home />}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;