import React from 'react';

import Page from './Page';
import pages from './content';

export class Carousel extends React.Component {
  state = {
    activePage: 0,
  }

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
    const pagesLength = pages.length;

    this.setState(previousState => (
      previousState.activePage < 1
        ? { activePage: pagesLength - 1 }
        : { activePage: previousState.activePage - 1 }
    ));
  }

  next = () => {
    const pagesLength = pages.length;

    this.setState(previousState => (
      { activePage: (previousState.activePage + 1) % pagesLength }
    ));
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
        {pages.map((page, index) => (
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
