import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import scroll from './js/scroll';
scroll();

import Main from './main/Main';
import Enter from './modal/Enter';
import Menu from './modal/Menu';
import Nav from './static/Nav';
import Footer from './static/Footer';

render(<BrowserRouter location={window.location}>
          <div>
            <Nav />
            <Route path="/menu" exact component={Menu} />
            <Route path="/enter" exact component={Enter} />
            <Route path="/" component={Main} />
            <Footer />
          </div>
        </BrowserRouter>,
  document.getElementById('main'));

