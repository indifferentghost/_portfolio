import React from 'react';
import classNames from 'classnames';

import { Carousel } from '../carousel';

export const Projects = ({ article, articleTimeout, close }) => (
  <article
    id="projects"
    className={classNames({
      active: article === 'projects',
      timeout: articleTimeout,
    })}
    style={{ display: 'none' }}
  >
    <h2 className="major">Projects</h2>
    {article === 'projects' && <Carousel />}
    {close}
  </article>
);
