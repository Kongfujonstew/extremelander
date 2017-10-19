import React from 'react';
import {render} from 'react-dom';

class Ball extends React.Component {
  constructor () {
    super();
    this.state = {
      ballHeight: 0,
      ballColor: '#dfc12a'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      const scroll = document.body.scrollTop;
      const height = window.innerHeight;
      if (scroll > height*2 && scroll < height * 5) {
        const percent = (scroll-(height*2))/(height);
        const newBallHeight = 1.2 * percent * height;
        this.setState({ ballHeight: newBallHeight})
      }
    });
  }

  render () {
    const style = {top: this.state.ballHeight};
    const color = this.state.ballColor;
    return (
      <svg id="ball" className="hover" style={style} height="250" width="250">
        <circle cx="125" cy="125" r="120" stroke={color} strokeWidth="3" fill={color} />
      </svg>
    )
  }
}

export default Ball;
