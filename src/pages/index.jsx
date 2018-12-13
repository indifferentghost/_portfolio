import React from 'react';
import classNames from 'classnames';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  state = {
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading',
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleOpenArticle = (article) => {
    this.setState(previousState => ({
      isArticleVisible: !previousState.isArticleVisible,
      article,
    }));

    setTimeout(() => {
      this.setState(previousState => ({
        timeout: !previousState.timeout,
      }));
    }, 325);

    setTimeout(() => {
      this.setState(previousState => ({
        articleTimeout: !previousState.articleTimeout,
      }));
    }, 350);
  }

  handleEscapeKey = (event) => {
    const { isArticleVisible } = this.state;
    const isEscape = (
      event.key === 'Escape'
      || event.key === 'Esc'
      || event.keyCode === 27
    );
    if (isEscape && isArticleVisible) {
      this.handleCloseArticle();
    }
  }

  handleCloseArticle = () => {
    this.setState(previousState => ({
      articleTimeout: !previousState.articleTimeout,
    }));

    setTimeout(() => {
      this.setState(previousState => ({
        timeout: !previousState.timeout,
      }));
    }, 325);

    setTimeout(() => {
      const { article } = this.state;
      if (article && window.location.hash.includes(article)) {
        window.location.hash = '';
      }
      this.setState(previousState => ({
        isArticleVisible: !previousState.isArticleVisible,
        article: '',
      }));
    }, 350);
  }

  handleClickOutside = (event) => {
    const {
      wrapperRef,
      handleCloseArticle,
      state: {
        isArticleVisible,
      },
    } = this;

    if (wrapperRef && !wrapperRef.contains(event.target)) {
      if (isArticleVisible) {
        handleCloseArticle();
      }
    }
  }

  render() {
    const { location } = this.props;
    const {
      loading,
      isArticleVisible,
      timeout,
      articleTimeout,
      article,
    } = this.state;

    return (
      <Layout location={location}>
        <div
          className={classNames('body', {
            loading, 'is-article-visible': isArticleVisible,
          })}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={timeout}
            />
            <Main
              {...{
                isArticleVisible,
                timeout,
                articleTimeout,
                article,
              }}
              onCloseArticle={this.handleCloseArticle}
              onOpenArticle={this.handleOpenArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
