import React from 'react';

const Page = ({ active, page: { title, copy } }) => (
  <div style={{ display: !active ? 'none' : '' }}>
    <h3>{title}</h3>
    {/* <img src={image} alt="" /> */}
    {copy}
  </div>
);

class Carousel extends React.Component {
  state = {
    activePage: 0,
    pages: [
      {
        title: 'LambdaFace',
        copy: 'test',
      },
      {
        title: 'LS Avengers MUD',
        copy: 'bloo',
      },
    ],
  }

  handleClick = (value) => {
    const { pages } = this.state;

    this.setState(({ activePage }) => {
      // eslint-disable-next-line no-param-reassign
      activePage += value;
      // If the activePage is between 0 and `pages.length` return activePage.
      if (activePage >= 0 && activePage < pages.length) {
        return { activePage };
      }
      // if the active page is below 0 return the highest index.
      if (activePage < 0) {
        return { activePage: pages.length - 1 };
      }
      // if the active page is above `pages.length` return 0.
      return { activePage: 0 };
    });
  };

  render() {
    const { activePage, pages } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="arrow arrow-left" onClick={() => this.handleClick(-1)} />
        {pages && pages.map((page, index) => (
          <Page {...{ index, active: activePage === index, page }} />
        ))}
        <span className="arrow arrow-right" onClick={() => this.handleClick(1)} />
      </div>
    );
  }
}

export default Carousel;
