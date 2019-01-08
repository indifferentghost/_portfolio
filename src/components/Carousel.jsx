import React from 'react';

import lambdaMud from '../images/lambda_mud.gif';
import lambdaFace from '../images/lambda_face.gif';

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

class Carousel extends React.Component {
  state = {
    activePage: 0,
  }

  pages = [
    {
      title: 'LambdaFace.com',
      copy: `A Lambda Labs capstone.\n
        The project was commissioned by Lambda School as a private alumni 
        network inspired by Y Combinator's bookface.
        I engineered scaffolding of server and deployed database and server
        on AWS, styled and provided functionality of notifications.
        The backend utilized Node/Express, Knex, MySQL. The frontend utilized 
        React, Material UI, Axios, React Router, and Auth0.`,
      link: 'http://lambdaface.com',
      projectImage: lambdaFace,
      github: 'https://github.com/Lambda-School-Labs/lambdaface',
    },
    {
      title: 'LS Avengers MUD',
      copy: `A Lambda School hackathon project.\n
        The objective was to create a text-based game MVP in 24 hours.
        I took lead for a team of 5 developers to win the "Teacher's Pick" award.
        I built core player interaction and created the base of extensible objects.
        React/Redux is the core of this project.`,
      link: 'https://react-k1owsk.stackblitz.io/',
      projectImage: lambdaMud,
      github: 'https://github.com/LS-Avengers/ls-avengers',
    },
  ]

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrowKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrowKeys);
  }

  handleArrowKeys = (event) => {
    const isLeftArrow = event.keyCode === 37;
    const isRightArrow = event.keyCode === 39;

    if (isLeftArrow) {
      this.previous();
      return;
    }
    if (isRightArrow) {
      this.next();
    }
  }

  previous = () => {
    const pagesLength = this.pages.length;

    this.setState((previousState) => {
      if (previousState.activePage < 0) {
        return { activePage: pagesLength - 1 };
      }
      return { activePage: previousState.activePage - 1 };
    });
  }

  next = () => {
    const pagesLength = this.pages.length;

    this.setState((previousState) => {
      if (previousState.activePage >= pagesLength - 1) {
        return { activePage: 0 };
      }
      return { activePage: previousState.activePage + 1 };
    });
  }

  render() {
    const { activePage } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="arrow arrow-left"
          onClick={this.previous}
        />
        {this.pages.map((page, index) => (
          <Page
            key={page.title}
            {...{ index, active: activePage === index, page }}
          />
        ))}
        <span
          className="arrow arrow-right"
          onClick={this.next}
        />
      </div>
    );
  }
}

export default Carousel;
