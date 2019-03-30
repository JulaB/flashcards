import React from 'react';
import { mount } from 'enzyme';
import { ARROW_LEFT, ARROW_RIGHT } from 'constants/keyCodesConstants';

import Slider from 'components/Shared/Slider/Slider';

const sliderWrapper = () => mount(
  <Slider>
    <div>Test1</div>
    <div>Test2</div>
    <div>Test3</div>
  </Slider>,
);

const events = {};
document.addEventListener = jest.fn((event, callback) => {
  events[event] = callback;
});
document.removeEventListener = jest.fn();

const shouldRenderCorrectControls = (slider, { prev, next } = {}) => {
  const prevDisabled = prev ? 'false' : 'true';
  const nextDisabled = next ? 'false' : 'true';
  expect(slider.find(`.slider__control-left[disabled=${prevDisabled}]`)
    .hostNodes())
    .toHaveLength(1);
  expect(slider.find(`.slider__control-right[disabled=${nextDisabled}]`)
    .hostNodes())
    .toHaveLength(1);
};

const shouldRenderSlide = (slider, slideNbr) => {
  const slide = slider.find('.slider__slide').at(slideNbr);
  expect(slide.hasClass('slider__slide--active')).toBeTruthy();
  expect(slide.find('.slider__slide--active')).toHaveLength(1);

  const sliderStripe = slider.find('.slider__stripe');
  expect(sliderStripe.props().style.transform).toBe(`translateX(-${(slideNbr * 100)}%)`);
};

const shouldShowFirstSlide = (slider, slidesCnt) => {
  expect(slider.find('.slider__slide')).toHaveLength(slidesCnt);

  shouldRenderSlide(slider, 0);
  shouldRenderCorrectControls(slider, { prev: false, next: true });
  expect(slider.find('.slider__info').text()).toBe(`1 / ${slidesCnt}`);
};

const shouldShowLastSlide = (slider, slidesCnt) => {
  expect(slider.find('.slider__slide')).toHaveLength(slidesCnt);

  shouldRenderSlide(slider, slidesCnt - 1);
  shouldRenderCorrectControls(slider, { prev: true, next: false });
  expect(slider.find('.slider__info').text()).toBe(`${slidesCnt} / ${slidesCnt}`);
};

describe('<Slider />', () => {
  it('renders slider without children', () => {
    const wrapper = mount(<Slider />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toBeNull();
  });

  it('renders slider with children and first slide active by default', () => {
    const slider = sliderWrapper();
    expect(slider.exists()).toBeTruthy();

    shouldShowFirstSlide(slider, 3);
  });

  it('renders slider with active last slide', () => {
    const slider = sliderWrapper();
    expect(slider.exists()).toBeTruthy();

    slider.setProps({ defaultActive: 5 });
    shouldShowLastSlide(slider, 3);
  });

  it('slides to the next slide', () => {
    const slider = sliderWrapper();

    shouldShowFirstSlide(slider, 3);

    slider.find('Button.slider__control-right').simulate('click');

    shouldRenderSlide(slider, 1);
    shouldRenderCorrectControls(slider, { prev: true, next: true });

    expect(slider.find('.slider__info').text()).toBe('2 / 3');
  });

  it('slides to the prev slide', () => {
    const slider = sliderWrapper();
    slider.setProps({ defaultActive: 2 });

    shouldShowLastSlide(slider, 3);

    slider.find('Button.slider__control-left').simulate('click');

    shouldRenderSlide(slider, 1);
    shouldRenderCorrectControls(slider, { prev: true, next: true });
    expect(slider.find('.slider__info').text()).toBe('2 / 3');
  });

  it('cannot slide to the next slide if it is the last slide', () => {
    const slider = sliderWrapper();
    slider.setProps({ defaultActive: 2 });
    shouldShowLastSlide(slider, 3);

    slider.find('Button.slider__control-right').simulate('click');
    shouldShowLastSlide(slider, 3);
  });

  it('cannot slide to the prev slide if it is the first slide', () => {
    const slider = sliderWrapper();
    shouldShowFirstSlide(slider, 3);

    slider.find('Button.slider__control-left').simulate('click');
    shouldShowFirstSlide(slider, 3);
  });

  describe('using keyboard', () => {
    let slider;
    let sliderInstance;

    beforeEach(() => {
      slider = sliderWrapper();
      sliderInstance = slider.instance();
      sliderInstance.slideLeft = jest.fn();
      sliderInstance.slideRight = jest.fn();
    });

    it('slides to the prev slide using keyboard', () => {
      slider.setProps({ defaultActive: 2 });
      events.keydown({ keyCode: ARROW_LEFT });

      expect(sliderInstance.slideLeft).toHaveBeenCalled();
      expect(sliderInstance.slideRight).not.toHaveBeenCalled();
    });

    it('slides to the next slide using keyboard', () => {
      events.keydown({ keyCode: ARROW_RIGHT });

      expect(sliderInstance.slideRight).toHaveBeenCalled();
      expect(sliderInstance.slideLeft).not.toHaveBeenCalled();
    });
  });

  describe('Unmount', () => {
    it('removes keydown event listener when component will unmount', () => {
      const slider = sliderWrapper();
      slider.unmount();
      expect(document.removeEventListener).toHaveBeenCalled();
    });
  });
});
