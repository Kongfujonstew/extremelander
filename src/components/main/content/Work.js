import React from 'react';
import {render} from 'react-dom';

import works from './works/index';

export class Work extends React.Component {
  render () {
    return (
      <div className="">
        {works.map((data, index) => {
          return ( 
            <div className="workDiv" key={index}>
              {data.video.length ? <video src={data.video} controls preload="metadata" loop /> : <img src={data.src} />}
              <h1>{data.title}</h1>
              {data.link ? <div><a href={data.link} target="_blank">Visit the app online</a></div> : null}
              {data.github ? <div><a href={data.github} target="_blank">Check out the code on Github</a></div> : null}
              <p>{data.description}</p>
              {data.tech ? <p>Tech: {data.tech}</p> : null}
            </div>
          );
        })}
      </div>
    );
  }
};
