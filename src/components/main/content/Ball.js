import React from 'react';
import {render} from 'react-dom';

class Ball extends React.Component {
  constructor () {
    super();
    this.state = {
      ballHeight: 500,
      ballColor: '#dfc12a'
    }
  }

  componentDidMount() {
    console.log('ball mounted');
    window.addEventListener('scroll', (e) => {
      const newBallHeight = 200;
      const scroll = document.body.scrollTop;
      const height = window.innerHeight;
      // console.log(document.body.scrollTop)
      // window.root = document.body.scrollTop;
      if (scroll > height*2 && scroll < height * 4) {
        // newBallHeight = this.state.ballHeight +=20;
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
