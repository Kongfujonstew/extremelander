import React from 'react';
import {render} from 'react-dom';
import ContentBox1 from './ContentBox1';
import ContentBox2 from './ContentBox2';
import ContentBox3 from './ContentBox3';

export default () => {
  return (
    <div>
      <ContentBox1 />
      <ContentBox2 />
      <ContentBox3 />
    </div>
  );
};
