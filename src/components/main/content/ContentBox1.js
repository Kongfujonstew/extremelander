import React from 'react';
import {render} from 'react-dom';

class ContentBox1 extends React.Component {
  render () {
    return (
      <div id="content1" className="content">
        <h1>Modern JavaScript</h1>
        <img id="logos" src={"images/logos.png"} />
      
      </div>
    )
  }
}

export default ContentBox1;