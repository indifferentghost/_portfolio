import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Thomas Dillard - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
      <br /><br />
      Made with some effort.
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
