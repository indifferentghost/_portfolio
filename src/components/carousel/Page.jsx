import React from 'react';

const Page = ({
  active, page: {
    title, copy, projectImage, link, github,
  },
}) => (
  <div style={{ display: !active ? 'none' : '', padding: '0 10px' }}>
    <h3>{title}</h3>
    <img style={{ width: '100%' }} src={projectImage} alt="" />
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
      </span>)}
    <br />
  </div>
);

export default Page;
