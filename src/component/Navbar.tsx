import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>近期紅什麼 - 美食趨勢</h1>
      <ul className="nav-links">
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/trending">熱門事物</Link></li>
        <li><Link to="/reviews">評論</Link></li>
        <li><Link to="/locations">熱銷地點</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
