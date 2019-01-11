import React from 'react';
import PropTypes from 'prop-types';

import { Contact, Projects, About } from './articles';

class Main extends React.Component {
  componentDidMount() {
    window.addEventListener('hashchange', this.routing);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.routing);
  }

  routing = () => {
    const { article, onCloseArticle, onOpenArticle } = this.props;

    if (!window.location.hash.includes(article)) {
      onCloseArticle();
      setTimeout(() => {
        if (window.location.hash) {
          onOpenArticle(window.location.hash.slice(1));
        }
      }, 400);
    }
  };

  render() {
    const {
      onCloseArticle,
      setWrapperRef,
      article,
      articleTimeout,
    } = this.props;

    const close = <div className="close" onClick={onCloseArticle} />;

    return (
      <div
        ref={setWrapperRef}
        id="main"
      >
        {article === 'about' && <About {...{ article, articleTimeout, close }} />}
        {article === 'projects' && <Projects {...{ article, articleTimeout, close }} />}
        {article === 'contact' && <Contact {...{ article, articleTimeout, close }} />}
      </div>
    );
  }
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
