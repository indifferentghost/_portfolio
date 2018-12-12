import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Carousel from './Carousel';
import pic01 from '../images/pic01.jpg';
// import pic02 from '../images/pic02.jpg';

class Main extends React.Component {
  componentDidMount() {
    const { routing } = this;
    window.addEventListener('hashchange', routing);
  }

  componentWillUnmount() {
    const { routing } = this;
    window.removeEventListener('hashchange', routing);
  }

  routing = () => {
    const {
      article,
      onCloseArticle,
      onOpenArticle,
    } = this.props;
    if (!window.location.hash.includes(article)) {
      onCloseArticle();
      setTimeout(() => onOpenArticle(window.location.hash.slice(1)), 400);
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
        onClick={() => onCloseArticle()}
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
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#projects">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
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
          <form method="post" action="#">
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
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
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
