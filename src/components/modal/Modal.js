import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Slider from '../slider/Slider';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const modal = $('#modal');
    modal.addClass('loaded');
  }

  render () {
    return (
      <div id="modal">
        <Link id="closeModal" to={'/'} >X</Link>
        <Slider />
      </div>
    )
  }
}

export default Modal;
