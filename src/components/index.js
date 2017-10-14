import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import scroll from './js/scroll';
scroll();

import Main from './main/Main';
import Modal from './modal/Modal';
import Nav from './static/Nav';
import Footer from './static/Footer';

render(<BrowserRouter location={window.location}>
          <div>
            <Nav />
            <Route path="/enter" exact component={Modal} />
            <Route path="/" component={Main} />
            <Footer />
          </div>
        </BrowserRouter>,
  document.getElementById('main'));

