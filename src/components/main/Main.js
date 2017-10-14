import React from 'react';
import {render} from 'react-dom';
import Hero from './Hero';
import Content from './content/Content';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
      input: ''
    };
  }

  handleClickScroll (e) {
    const body = $("html, body");
    const height = document.body.clientHeight;
    this.showContent();
    body.stop().animate({scrollTop:height}, 1250, 'swing');
  }

  showContent () {
    this.setState({
      showContent: true
    });
  }

  render () {
    return (
      <main>
        <Hero 
          clickForContent={this.handleClickScroll.bind(this)}
          showContent={this.state.showContent}
        />
        {this.state.showContent ? <Content /> : null}
      </main>
    )
  }
}

export default Main;
