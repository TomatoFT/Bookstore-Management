import React from 'react';
import './Navbar.css';

function Navbar({ items }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <a className="nav-link" href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
