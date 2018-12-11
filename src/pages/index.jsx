import React from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
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

  handleCloseArticle() {
    this.setState(previousState => ({
      articleTimeout: !previousState.articleTimeout,
    }));

    setTimeout(() => {
      this.setState(previousState => ({
        timeout: !previousState.timeout,
      }));
    }, 325);

    setTimeout(() => {
      this.setState(previousState => ({
        isArticleVisible: !previousState.isArticleVisible,
        article: '',
      }));
    }, 350);
  }

  handleClickOutside(event) {
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
          className={`body ${loading} ${
            isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={timeout}
            />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={this.handleCloseArticle}
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
