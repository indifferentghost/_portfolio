import React from 'react';

const Page = ({
  active, page: {
    title, copy, projectImage, link, github,
  },
}) => (
  <div className="carousel-page" style={{ display: !active && 'none' }}>
    <h3>{title}</h3>
    <img className="carousel-image" src={projectImage} alt="" />
    <p>{copy}</p>
    {link && (
      <span>
        View this project live{' '}
        <a target="_blank" rel="noopener noreferrer" href={link}>
          here
        </a>.
      </span>
    )}
    <br />
    {github && (
      <span>
        See the source code:{' '}
        <a target="_blank" rel="noopener noreferrer" href={github}>
          github
        </a>.
      </span>
    )}
  </div>
);

export default Page;
