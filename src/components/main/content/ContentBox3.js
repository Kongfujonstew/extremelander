import React from 'react';
import {render} from 'react-dom';
import { Work } from './Work';

class ContentBox3 extends React.Component {
  render () {
    return (
      <div id="content3" className="content footermargin">
        <h1>ContentBox3</h1>
        <div id="container">

          <Work />

        </div>
      </div>
    )
  }
}

export default ContentBox3;
