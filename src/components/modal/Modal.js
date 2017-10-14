import React from 'react';
import { render } from 'react-dom';

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
        HELLO
      </div>
    )
  }
}

export default Modal;
