import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

const WrapChildren = ({ children, location }) => {
  if (location && location.pathname === '/') {
    return <div>{children}</div>;
  }
  return (
    <div id="wrapper" className="page">
      <div>{children}</div>
    </div>
  );
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A curated portfolio of projects.' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <WrapChildren {...props} />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
