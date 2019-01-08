import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ page, onOpenArticle }) => (
  <li>
    <a href={`#${page}`} onClick={() => onOpenArticle(page)}>
      {page}
    </a>
  </li>
);

class Header extends React.Component {
  state = {
    index: 0,
  }

  faIcons = ['diamond', 'cog', 'heart', 'music']

  logoClickHandler = () => {
    this.setState(previousState => (
      { index: (previousState.index + 1) % this.faIcons.length }
    ));
  }

  render() {
    const { timeout, onOpenArticle } = this.props;
    const { index } = this.state;
    return (
      <header id="header" style={timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span onClick={() => this.logoClickHandler()} className={`icon fa-${this.faIcons[index]}`} />
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
            {['about', 'projects', 'contact'].map(page => (
              <NavLink key={page} {...{ page, onOpenArticle }} />
            ))}
            <li>
              <a
                href="/files/Thomas_Dillard-Resume_010719.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
