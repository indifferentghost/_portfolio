// This is temporary just to progress the MVP.
/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (page, clickHandler) => (
  <li>
    <a
      href={`#${page}`}
      onClick={() => clickHandler(page)}
    >
      {page}
    </a>
  </li>
);

const Header = ({ timeout, onOpenArticle }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Thomas Dillard</h1>
        <p>
          The fully responsive portfolio of Thomas Dillard.{' '}<br />
          A full stack React developer, involved in{' '}<br />
          and passionate about Open Source.{' '}<br />
          <br />
          a{' '}
          <a
            href="https://lambdaschool.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lambda School
          </a>{' '}
          alumnus and hype man.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {['about', 'projects', 'contact'].map(page => NavLink(page, onOpenArticle))}
        <li>
          <a href="../files/Thomas_Dillard-Resume_121018.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
