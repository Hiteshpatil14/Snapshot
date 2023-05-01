
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/nature">nature</NavLink></li>
        <li><NavLink to="/animals">animals</NavLink></li>
        <li><NavLink to="/sports">sports</NavLink></li>
        <li><NavLink to="/vehicles">vehicles</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
