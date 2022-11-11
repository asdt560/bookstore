import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoIosPerson } from 'react-icons/io';

export default function Header() {
  useEffect(() => {
    document.title = 'Bookstore';
  });
  return (
    <header>
      <div className="headerdiv">
        <h1>Bookstore CMS</h1>
        <ul className="headerlist">
          <li><Link className="headerlink" to="/">BOOKS</Link></li>
          <li><Link className="headerlink" to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>
      <button className="headerbutton" type="button">
        <IconContext.Provider value={{ color: 'blue', size: '1.3rem' }}>
          <IoIosPerson />
        </IconContext.Provider>
      </button>
    </header>
  );
}
