import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  useEffect(() => {
    document.title = 'Bookstore';
  });
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <ul className="headerlist">
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <button className="headerbutton" type="button">button</button>
    </header>
  );
}
