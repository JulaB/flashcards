import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Shared/Button/Button';
import './slider.css';

let componentCounter = 0;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.slidesCount = React.Children.count(this.props.children);
    this.setComponentId();
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  get containerStyle() {
    const position = this.state.active * 100;
    return { transform: `translateX(-${position}%)` };
  }

  setComponentId() {
    componentCounter += 1;
    this.cID = componentCounter;
  }

  slideLeft(event) {
    event.preventDefault();
    if (this.isFirstSlide()) {
      return;
    }
    let active = (this.state.active - 1) % this.slidesCount;
    active = (active + this.slidesCount) % this.slidesCount;
    this.setState({ active });
  }

  slideRight(event) {
    event.preventDefault();
    if (this.isLastSlide()) {
      return;
    }
    const active = (this.state.active + 1) % this.slidesCount;
    this.setState({ active });
  }

  isFirstSlide() {
    return this.state.active === 0;
  }

  isLastSlide() {
    return this.state.active === this.slidesCount - 1;
  }

  renderSlide(slide, ind) {
    const activeClass = this.state.active === ind ? 'slider__slide--active' : '';
    return (
      <div
        className={`slider__slide ${activeClass}`}
        key={`slide-${this.cID}-${ind}`}
      >
        {slide}
      </div>
    );
  }

  render() {
    const slides = React.Children.toArray(this.props.children);
    if (!slides.length) {
      return null;
    }

    return (
      <div className="slider">
        <div className="slider__window">
          <div className="slider__stripe" style={this.containerStyle}>
            {slides.map((slide, ind) => this.renderSlide(slide, ind))}
          </div>
        </div>
        <div className="slider__controls">
          <Button
              className="btn--control slider__control-left"
              onClick={this.slideLeft}
              type="button"
              area-label="Slide Left"
              disabled={this.isFirstSlide()}
          >
            &#10094;
          </Button>
          <div className="slider__info">
            {this.state.active + 1} / {slides.length}
          </div>
          <Button
            className="btn--control slider__control-right"
            onClick={this.slideRight}
            type="button"
            area-label="Slide Right"
            disabled={this.isLastSlide()}
          >
            &#10095;
          </Button>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.node,
};

Slider.defaultProps = {
  children: null,
};

export default Slider;
