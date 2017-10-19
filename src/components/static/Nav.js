import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor () {
    super ();
    this.state = {
      hidden: false,
      scrollY: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const isScrollingDown = event.path[1].scrollY >= this.state.scrollY;
      if (this.state.hidden && document.body.scrollTop === 0) {
        this.showNav();
      }
      if (this.state.hidden && !isScrollingDown) {
        console.log('alsdf')
        this.showNav();
      }
      if (!this.state.hidden && isScrollingDown) {
        console.log('alsdf')
        this.hideNav();
      }
      this.setState({scrollY:event.path[1].scrollY})
    });
  }

  hideNav () {
    this.setState({
      hidden:true
    });    
  }

  showNav () {
    this.setState({
      hidden:false
    });
  }

  render () {
    const hidden = {top: "-300px"};
    const style = this.state.hidden ? hidden : null;
    return (
      <nav style={style}>
        <div className="logo hover">Jon Michael Stewart</div>
        <Link className="button hover"  to={'/menu'} >MENU</Link>
      </nav>
    )
  }
}

export default Nav;
