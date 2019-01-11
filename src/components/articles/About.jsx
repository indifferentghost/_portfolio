import React from 'react';
import classNames from 'classnames';

import profile from '../../images/profile_image.jpg';

export const About = ({ article, articleTimeout, close }) => (
  <article
    id="about"
    className={classNames({
      active: article === 'about',
      timeout: articleTimeout,
    })}
  >
    <h2 className="major">About</h2>
    <div className="flexy">
      <span className="image main">
        <img src={profile} alt="profile" style={{ width: '200px' }} />
      </span>
      <section style={{ padding: '0 10px' }}>
        <p style={{ display: 'inline-block' }}>
          A self-starter always improving. Passionate about open source. I
          have been a student and teacher for web development. At the
          moment I have been bewitched by React! By the way, check out my{' '}
          <a href="#projects">awesome work</a>.
        </p>
        <p>
          I come from a non-traditional call-center background, but after
          realizing the impenetrable glass ceiling preventing my
          progression I changed careers with a little help from Lambda
          School. I am hungry and passionate about computer science and
          development of software, and will continue to grow, learn and
          develop even in spite of blockers in my way.
        </p>
      </section>
    </div>
    {close}
  </article>
);
