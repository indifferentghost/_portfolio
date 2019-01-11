import React from 'react';
import classNames from 'classnames';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/MainContainer';
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
      this.routing();
    }, 100);
    window.addEventListener('hashchange', this.routing);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    window.removeEventListener('hashchange', this.routing);
  }

  routing = () => {
    const { article } = this.state;

    if (article && !window.location.hash.includes(article)) {
      this.handleCloseArticle();
    }
    setTimeout(() => {
      if (window.location.hash) {
        if (!article || !window.location.hash.includes(article)) {
          this.handleOpenArticle(window.location.hash.slice(1));
        }
      }
    }, 400);
  }

  handleOpenArticle = (article) => {
    this.setState({
      isArticleVisible: true,
      article,
    });

    setTimeout(() => {
      this.setState({ timeout: true });
    }, 325);

    setTimeout(() => {
      this.setState({ articleTimeout: true });
    }, 350);
  };

  handleCloseArticle = () => {
    this.setState({ articleTimeout: false });

    setTimeout(() => {
      this.setState({ timeout: false });
    }, 325);

    setTimeout(() => {
      const { article } = this.state;
      if (article === '' || (article && window.location.hash.includes(article))) {
        window.history.pushState(
          {}, document.title, window.location.pathname + window.location.search,
        );
      }
      this.setState({
        isArticleVisible: false,
        article: '',
      });
    }, 350);
  };

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
            loading,
            'is-article-visible': isArticleVisible,
          })}
        >
          <div id="wrapper">
            {!timeout && <Header onOpenArticle={this.handleOpenArticle} /> }
            {timeout && (
              <Main
                {...{ isArticleVisible, articleTimeout, article }}
                onCloseArticle={this.handleCloseArticle}
                onOpenArticle={this.handleOpenArticle}
              />
            )}
            {!timeout && <Footer />}
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
