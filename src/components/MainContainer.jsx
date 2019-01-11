import React from 'react';
import PropTypes from 'prop-types';

import { Contact, Projects, About } from './articles';

class Main extends React.Component {
  articleComponents = {
    about: About,
    projects: Projects,
    contact: Contact,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  handleEscapeKey = (event) => {
    const { isArticleVisible, onCloseArticle } = this.props;
    const isEscape = event.key === 'Escape'
      || event.key === 'Esc'
      || event.keyCode === 27;

    if (isEscape && isArticleVisible) {
      onCloseArticle();
    }
  }

  handleClickOutside = (event) => {
    const { isArticleVisible, onCloseArticle } = this.props;

    const isScrollbar = event.clientX >= document.documentElement.offsetWidth;

    if (this.containerRef && !this.containerRef.contains(event.target) && !isScrollbar) {
      if (isArticleVisible) {
        onCloseArticle();
      }
    }
  }

  getArticleComponent = () => {
    const { article, onCloseArticle } = this.props;
    const ArticleComponent = this.articleComponents[article] || null;
    if (!ArticleComponent) setTimeout(onCloseArticle, 100);
    return ArticleComponent;
  }

  render() {
    const {
      onCloseArticle,
      article,
      articleTimeout,
    } = this.props;

    const ArticleRender = this.getArticleComponent();

    const close = <div className="close" onClick={onCloseArticle} />;
    return (
      <div
        ref={(ref) => { this.containerRef = ref; }}
        id="main"
      >
        {ArticleRender && <ArticleRender {...{ article, articleTimeout, close }} />}
      </div>
    );
  }
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
};

export default Main;
