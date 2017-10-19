import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const modal = $('.modal');
    modal.addClass('loaded');
  }

  render () {
    return (
      <div className="modal">
        <Link className="closeModal" to={'/'} >X</Link>
      </div>
    )
  }
}

export default Menu;