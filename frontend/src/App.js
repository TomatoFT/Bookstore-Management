import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Logout from './components/Authentication/Logout';
import Import from './components/Admin/Import';
import Footer from './components/HomePage/Footer';
import WelcomePage from './components/WelcomePage/welcome';
import AdminPage from './components/Admin/AdminPage';
import Home from './components/Customer/Home';
import Navbar from "./components/HomePage/Navbar"
import './App.css'
import BookPage from './components/HomePage/BookPage';

const App = () => {
  const nav_customer_items = [
    { label: 'Home', link: '/customerPage' },
    { label: 'Account', link: '/account' },
    { label: 'Cash', link: '/cash' },
    { label: 'Log Out', link: '/logout' },
  ];
  const nav_admin_items = [
    { label: 'Home', link: '/customerPage' },
    { label: 'Import Books', link: '/import' },
    { label: 'Bookstore', link: '/bookstore' },
    { label: 'Storage', link: '/storage' },
    { label: 'Log Out', link: '/logout' },
  ];
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <Router>
      <div>
        <div className='header-page'>
          <h1>TomatoBMS: Bookstore Management System</h1>
          <p>Welcome you to come here in the world of books where you can love the reading
            and spreading it to the people around you</p>
        </div>
        <Navbar items={nav_admin_items} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/import" element={<Import />} />
          <Route path='/adminPage' element={<AdminPage />} />
          <Route path='/customerPage' element={<Home />} />
          <Route path='/book_page' element={<BookPage />} />

        </Routes>
        <div className="App">
          <h1>{message}</h1>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;