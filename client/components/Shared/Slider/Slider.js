import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Shared/Button/Button';
import * as keyCodes from 'constants/keyCodesConstants';
import './slider.css';

let componentCounter = 0;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.slidesCount = React.Children.count(this.props.children);

    this.state = {
      active: this.normalizeSlideIndex(this.props.defaultActive),
    };

    this.setComponentId();
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.slidesCount = React.Children.count(nextProps.children);
      this.setState({
        active: this.normalizeSlideIndex(nextProps.defaultActive),
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  get containerStyle() {
    const position = this.state.active * 100;
    return { transform: `translateX(-${position}%)` };
  }

  setComponentId() {
    componentCounter += 1;
    this.cID = componentCounter;
  }

  handleKeydown(event) {
    if (event.keyCode === keyCodes.ARROW_LEFT) {
      this.slideLeft(event);
    } else if (event.keyCode === keyCodes.ARROW_RIGHT) {
      this.slideRight(event);
    }
  }

  slideLeft() {
    if (this.isFirstSlide()) {
      return;
    }
    const active = this.normalizeSlideIndex(this.state.active - 1);
    this.setState({ active });
  }

  slideRight() {
    if (this.isLastSlide()) {
      return;
    }
    const active = this.normalizeSlideIndex(this.state.active + 1);
    this.setState({ active });
  }

  normalizeSlideIndex(ind = 0) {
    if (!this.slidesCount) {
      return 0;
    }
    return (ind + this.slidesCount) % this.slidesCount;
  }

  isFirstSlide() {
    return this.state.active === 0;
  }

  isLastSlide() {
    return this.state.active === this.slidesCount - 1;
  }

  renderSlide(slide, ind) {
    const active = this.state.active === ind;
    const activeClass = active ? 'slider__slide--active' : '';

    return (
      <div
        className={`slider__slide ${activeClass}`}
        key={`slide-${this.cID}-${ind}`}
        area-hidden={`${!active}`}
      >
        {React.cloneElement(slide, { focusable: active })}
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
  defaultActive: PropTypes.number,
  children: PropTypes.node,
};

Slider.defaultProps = {
  defaultActive: 0,
  children: null,
};

export default Slider;
