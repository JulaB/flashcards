import React from 'react';
import PropTypes from 'prop-types';

import './flip-box.css';

let componentCounter = 0;

class FlipBox extends React.Component {
  static cardStyle(type, rotationDeg, zIndex) {
    return {
      className: `flip-box__card-${type}`,
      style: {
        transform: `rotateY(${rotationDeg}deg)`,
        zIndex,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.setComponentId();
    this.handleClick = this.handleClick.bind(this);
    this.frontCardProps = this.frontCardProps.bind(this);
    this.backCardProps = this.backCardProps.bind(this);
  }

  setComponentId() {
    componentCounter += 1;
    this.cID = componentCounter;
  }

  handleClick(event) {
    event.preventDefault();
    if (React.Children.count(this.props.children) < 2) {
      return;
    }

    this.setState(state => ({ isFlipped: !state.isFlipped }));
  }

  frontCardProps() {
    const rotationDeg = this.state.isFlipped ? 180 : 0;
    const zIndex = this.state.isFlipped ? 1 : 2;
    return this.constructor.cardStyle('front', rotationDeg, zIndex);
  }

  backCardProps() {
    const rotationDeg = this.state.isFlipped ? 0 : -180;
    const zIndex = this.state.isFlipped ? 2 : 1;
    return this.constructor.cardStyle('back', rotationDeg, zIndex);
  }

  renderChild(child, ind) {
    const propsMethod = ind ? this.backCardProps : this.frontCardProps;
    return (
      <div {...propsMethod()} key={`flip-child-${this.cID}-${ind}`} >
        {child}
      </div>
    );
  }

  render() {
    const children = React.Children.toArray(this.props.children).slice(0, 2);
    if (!children.length) {
      return null;
    }
    const { className } = this.props;

    return (
      <button
        className={`flip-box ${className}`}
        type="button"
        onClick={this.handleClick}
      >
        {children.map((child, ind) => this.renderChild(child, ind))}
      </button>
    );
  }
}

FlipBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
FlipBox.defaultProps = {
  className: '',
  children: null,
};

export default FlipBox;
