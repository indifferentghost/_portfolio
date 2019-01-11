import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Carousel } from './carousel';
import profile from '../images/profile_image.jpg';

const SocialCard = ({ name, url, logo }) => (
  <li>
    <a
      href={url}
      className={`icon ${logo}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="label">{name}</span>
    </a>
  </li>
);

const socialMediaInfo = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/StudiosDillard',
    logo: 'fa-twitter',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@thomasdillard',
    logo: 'fa-medium',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/HTMLGhozt',
    logo: 'fa-github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thomasdillard/',
    logo: 'fa-linkedin',
  },
];

class Main extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', this.routing);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.routing);
  }

  routing = () => {
    const {
      article,
      onCloseArticle,
      onOpenArticle,
    } = this.props;

    if (!window.location.hash.includes(article)) {
      onCloseArticle();
      setTimeout(() => {
        if (window.location.hash) {
          onOpenArticle(window.location.hash.slice(1));
        }
      }, 400);
    }
  }

  render() {
    const {
      onCloseArticle,
      setWrapperRef,
      timeout,
      article,
      articleTimeout,
    } = this.props;

    const close = (
      <div
        className="close"
        onClick={onCloseArticle}
      />
    );

    return (
      <div
        ref={setWrapperRef}
        id="main"
        style={{ display: timeout ? 'flex' : 'none' }}
      >
        <article
          id="about"
          className={classNames({ active: article === 'about', timeout: articleTimeout })}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="flexy">
            <span className="image main">
              <img src={profile} alt="profile" style={{ width: '200px' }} />
            </span>
            <section style={{ padding: '0 10px' }}>
              <p style={{ display: 'inline-block' }}>
                A self-starter always improving. Passionate about
                open source. I have been a student and teacher for web development.
                At the moment I have been bewitched by React!
                By the way, check out my <a href="#projects">awesome work</a>.
              </p>
              <p>
                I come from a non-traditional call-center background, but after
                realizing the impenetrable glass ceiling preventing my progression
                I changed careers with a little help from Lambda School. I am hungry
                and passionate about computer science and development of software,
                and will continue to grow, learn and develop even in spite of blockers
                in my way.
              </p>
            </section>
          </div>
          {close}
        </article>

        <article
          id="projects"
          className={classNames({ active: article === 'projects', timeout: articleTimeout })}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          {article === 'projects' && <Carousel />}
          {close}
        </article>

        <article
          id="contact"
          className={classNames({ active: article === 'contact', timeout: articleTimeout })}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              Don’t fill this out:{' '}
              <input name="bot-field" />
            </p>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            {socialMediaInfo.map(social => (
              <SocialCard key={social.name} {...social} />
            ))}
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  // route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
