// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // 假设使用了 React Router 进行路由管理
import './Navbar.css';  // 导航栏样式

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
