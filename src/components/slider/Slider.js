import React from 'react';
import { render } from 'react-dom';
import SliderBox1 from './SliderBox1';
import SliderBox2 from './SliderBox2';
import SliderBox3 from './SliderBox3';


class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMargin: 0,
      hideLeftArrow: true,
      hideRightArrow: false
    };
  }

  componentDidMount() {
    this.checkArrows(0);
  }

  checkArrows (newMargin) {
    const leftArrow = $('#leftArrow');
    const rightArrow = $('#rightArrow');
    if (newMargin <= -200) {
      this.setState({hideRightArrow: true, hideLeftArrow: false});
      rightArrow.removeClass('hover');  rightArrow.empty();
      leftArrow.addClass('hover'); leftArrow.text('〈');
    } else if (newMargin >= 0 ) {
      this.setState({hideRightArrow: false, hideLeftArrow: true});
      rightArrow.addClass('hover'); rightArrow.text('〉');
      leftArrow.removeClass('hover'); leftArrow.empty();
    } else {
      this.setState({hideRightArrow: false, hideLeftArrow: false});
      leftArrow.addClass('hover'); leftArrow.text('〈');
      rightArrow.addClass('hover'); rightArrow.text('〉');
    }
  }

  handleRightArrowClick () {
    console.log(this.state.currentMargin);
    const oldMargin = this.state.currentMargin;
    const newMargin = (oldMargin <= -200) ? -200 : oldMargin - 100;
    this.setState({currentMargin: newMargin});
    this.checkArrows(newMargin);
  }

  handleLeftArrowClick () {
    console.log(this.state.currentMargin);
    const oldMargin = this.state.currentMargin;
    const newMargin = (oldMargin >= 0) ? 0 : oldMargin + 100;
    this.setState({currentMargin: newMargin});
    this.checkArrows(newMargin);
  }

  render () {
    const slideMarginStyle = {marginLeft: '' + this.state.currentMargin + '%'};
    const hideLeftArrowStyle = this.state.hideLeftArrow ? {filter: 'grayscale(100%)'} : {};
    const hideRightArrowStyle = this.state.hideRightArrow ? {filter: 'grayscale(100%)'} : {};
    return (
      <div id="slider">
        <div id="sliderContainer">
          <div id="currentSlider" style={slideMarginStyle}>
            <SliderBox1 />
            <SliderBox2 />
            <SliderBox3 />
          </div>
        </div>
        <div id="leftArrow" className="arrow left hover" style={hideLeftArrowStyle}
          onClick={this.handleLeftArrowClick.bind(this)}
        >〈</div>
        <div id="rightArrow" className="arrow right hover" style={hideRightArrowStyle}
          onClick={this.handleRightArrowClick.bind(this)}
        >〉</div>
      </div>
    )
  }
}

export default Slider;
