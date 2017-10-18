import React from 'react';
import { render } from 'react-dom';
import CTA from './CTA';
import HeroText from './HeroText';

class Hero extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      heroWidth: '100%'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      window.root = document.body.scrollTop;
      if (this.props.showContent) {
        const scroll = document.body.scrollTop;
        const height = window.innerHeight;
        const heroWidth = 100 - 20*(scroll/height);
        this.setState({ heroWidth: heroWidth})
      }
    });
  }

  render () {
    const style = {width: `${this.state.heroWidth}%`}
    return (
      <div id="hero" style={style}>
        <div id="heroBackground"></div>
        <div className="hero">
          <HeroText />
          <CTA inputClassName={'heroCTA'} ctaClassName={'heroCTA'}/>
          <div id="scrollButton" className="hover"
            onClick={this.props.clickForContent}
          >BUTTON ↓</div>
          <video id="video" className="video" autoPlay loop src={"video/lines.mp4"} frameBorder="0"></video>
        </div>
      </div>
    )
  }
}

export default Hero;
