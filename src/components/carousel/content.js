import lambdaMud from '../../images/lambda_mud.gif';
import lambdaFace from '../../images/lambda_face.gif';
import towelify from '../../images/towelify.gif';

export default [
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
    copy: `A Lambda School hackathon project. Jan 18\n
      The objective was to create a text-based game MVP in 24 hours.
      I took lead for a team of 5 developers to win the "Teacher's Pick" award.
      I built core player interaction and created the base of extensible objects.
      React/Redux is the core of this project.`,
    link: 'https://react-k1owsk.stackblitz.io/',
    projectImage: lambdaMud,
    github: 'https://github.com/LS-Avengers/ls-avengers',
  },
  {
    title: 'Towelify',
    copy: `Another Lambda School hackathon project. Jan 19\n
      The objective was to create an NPM React components library in 48 hours.
      I focused on project management, assigning enhancements and issues
      React is the core of this project. Documentation was bootstrapped with Storybook.`,
    link: 'https://www.npmjs.com/package/towelify',
    projectImage: towelify,
    github: 'https://github.com/TowelJS/Towelify',
  },
];
