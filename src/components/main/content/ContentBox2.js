import React from 'react';
import {render} from 'react-dom';
import CTA from '../CTA';
import Ball from './Ball';

class ContentBox2 extends React.Component {
  render () {
    return (
      <div id="content2" className="content">
        <h1>Across The Stack</h1>
        <Ball />
      

        <CTA inputClassName={'content2CTA'} ctaButtonId={'content2CTAButton'}/>
      </div>
    )
  }
}

export default ContentBox2;
