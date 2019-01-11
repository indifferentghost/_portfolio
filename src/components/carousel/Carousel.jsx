import React from 'react';

import Page from './Page';
import pages from './content';

const minX = 20; // min x swipe for horizontal swipe
const maxY = 50; // max y difference for horizontal swipe

export class Carousel extends React.Component {
  state = {
    activePage: 0,
    smallScreen: null,
    swipeStart: {
      x: 0,
      y: 0,
    },
  };

  swipeCallback = null;

  componentDidMount() {
    this.checkSmallScreen();
    this.toggleSwipeEvents();

    window.addEventListener('resize', this.checkSmallScreen);
    document.addEventListener('keydown', this.handleArrowKeys);
  }

  componentDidUpdate() {
    this.toggleSwipeEvents();
  }

  componentWillUnmount() {
    this.toggleSwipeEvents();

    window.removeEventListener('resize', this.checkSmallScreen);
    document.removeEventListener('keydown', this.handleArrowKeys);
  }

  previous = () => {
    this.setState(previousState => ({
      activePage:
        previousState.activePage < 1
          ? pages.length - 1
          : previousState.activePage - 1,
    }));
  };

  next = () => {
    this.setState(previousState => ({
      activePage: (previousState.activePage + 1) % pages.length,
    }));
  };

  handleArrowKeys = (event) => {
    const isLeftArrow = event.keyCode === 37;
    const isRightArrow = event.keyCode === 39;

    if (isLeftArrow) this.previous();
    if (isRightArrow) this.next();
  };

  toggleSwipeEvents = () => {
    const projectContainer = document.getElementById('projects');
    const { smallScreen } = this.state;

    if (smallScreen && !this.swipeEvents) {
      projectContainer.addEventListener('touchstart', this.handleSwipeStart);
      projectContainer.addEventListener('touchmove', this.handleSwipeMove);
      projectContainer.addEventListener('touchend', this.handleSwipeEnd);
    } else if (!smallScreen && this.swipeEvents) {
      projectContainer.removeEventListener('touchstart', this.handleSwipeStart);
      projectContainer.removeEventListener('touchmove', this.handleSwipeMove);
      projectContainer.removeEventListener('touchend', this.handleSwipeEnd);
    }
  };

  handleSwipeStart = (event) => {
    const { screenX: x, screenY: y } = event.touches[0];

    this.setState({ swipeStart: { x, y } });
  };

  handleSwipeMove = (event) => {
    if (typeof this.swipeCallback !== 'function') {
      const { screenX: x, screenY: y } = event.touches[0];
      const { swipeStart } = this.state;

      const swipedRight = x - minX > swipeStart.x;
      const swipedLeft = x + minX < swipeStart.x;
      const notHorizontal = y < swipeStart.y + maxY && swipeStart.y > y - maxY;

      if ((swipedRight || swipedLeft) && notHorizontal) {
        this.swipeCallback = swipedRight ? this.next : this.previous;
      }
    }
  };

  handleSwipeEnd = (event) => {
    if (typeof this.swipeCallback === 'function') {
      event.preventDefault();
      this.swipeCallback();
      this.swipeCallback = null;
    }
  };

  checkSmallScreen = () => {
    const { smallScreen } = this.state;

    if (smallScreen === null) {
      this.setState({ smallScreen: !(window.innerWidth > 600) });
    } else if (window.innerWidth > 600 && smallScreen) {
      this.setState({ smallScreen: false });
    } else if (window.innerWidth <= 600 && smallScreen === false) {
      this.setState({ smallScreen: true });
    }
  };

  render() {
    const { activePage, smallScreen } = this.state;

    return (
      <div className="carousel-container">
        {!smallScreen && (
          <span className="arrow arrow-left" onClick={this.previous} />
        )}
        {pages.map((page, index) => (
          <Page
            key={page.title}
            {...{ index, page, active: activePage === index }}
          />
        ))}
        {!smallScreen && (
          <span className="arrow arrow-right" onClick={this.next} />
        )}
      </div>
    );
  }
}
