import React from 'react';
import classNames from 'classnames';

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

export const Contact = ({ article, articleTimeout, close }) => (
  <article
    id="contact"
    className={classNames({
      active: article === 'contact',
      timeout: articleTimeout,
    })}
  >
    <h2 className="major">Contact</h2>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        Don’t fill this out: <input name="bot-field" />
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
);
