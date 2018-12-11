// This is temporary just to progress the MVP.
/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ timeout, onOpenArticle }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Thomas Dillard</h1>
        <p>
          The fully responsive portfolio{' '}
          of Thomas Dillard.{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released{' '}<br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('intro');
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('work');
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('about');
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            Contact
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
