import React from 'react';
import { mount } from 'enzyme';

import FlipBox from 'components/Shared/FlipBox/FlipBox';

describe('<FlipBox />', () => {
  it('renders the component with zero children', () => {
    const wrapper = mount(<FlipBox />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toBeNull();
  });

  it('allows to add additional classes', () => {
    const wrapper = mount(
      <FlipBox className="some-class">
        <div>Front</div>
        <div>Back</div>
      </FlipBox>,
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.flip-box').hasClass('some-class')).toBe(true);
  });

  it('renders the component with one child', () => {
    const wrapper = mount(
      <FlipBox>
        <div>Front</div>
      </FlipBox>,
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.flip-box__card-front')).toHaveLength(1);
    expect(wrapper.find('.flip-box__card-back')).toHaveLength(0);
  });

  it('cannot flip the component with one child', () => {
    const wrapper = mount(
      <FlipBox>
        <div>Front</div>
      </FlipBox>,
    );
    const frontCard = wrapper.find('.flip-box__card-front');
    expect(frontCard.props().style.transform).toBe('rotateY(0deg)');
    wrapper.simulate('click');
    expect(frontCard.props().style.transform).toBe('rotateY(0deg)');
  });

  it('renders the component with more than one child', () => {
    const wrapper = mount(
      <FlipBox className="some-class">
        <div>Front</div>
        <div>Back</div>
        <div className="extraCard">Not Important</div>
      </FlipBox>,
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.flip-box__card-front')).toHaveLength(1);
    expect(wrapper.find('.flip-box__card-back')).toHaveLength(1);
    expect(wrapper.find('.extraCard')).toHaveLength(0);
  });

  it('flips cards', () => {
    const wrapper = mount(
      <FlipBox className="some-class">
        <div>Front</div>
        <div>Back</div>
      </FlipBox>,
    );
    expect(wrapper.find('.flip-box__card-front').props().style.transform)
      .toBe('rotateY(0deg)');
    expect(wrapper.find('.flip-box__card-back').props().style.transform)
      .toBe('rotateY(-180deg)');

    wrapper.simulate('click');

    expect(wrapper.find('.flip-box__card-front').props().style.transform)
      .toBe('rotateY(180deg)');
    expect(wrapper.find('.flip-box__card-back').props().style.transform)
      .toBe('rotateY(0deg)');

    wrapper.simulate('click');

    expect(wrapper.find('.flip-box__card-front').props().style.transform)
      .toBe('rotateY(0deg)');
    expect(wrapper.find('.flip-box__card-back').props().style.transform)
      .toBe('rotateY(-180deg)');
  });

  describe('focusable', () => {
    it('is focusable by default', () => {
      const wrapper = mount(
        <FlipBox>
          <div>Front</div>
        </FlipBox>,
      );

      expect(wrapper.find('.flip-box').props().tabIndex).toBe(0);
    });

    it('removes focus from the component', () => {
      const wrapper = mount(
        <FlipBox focusable={false}>
          <div>Front</div>
        </FlipBox>,
      );

      expect(wrapper.find('.flip-box').props().tabIndex).toBe(-1);
    });
  });
});
