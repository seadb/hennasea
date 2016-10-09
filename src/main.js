import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, IndexLink, Link } from 'react-router';
import Logo from './logo';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import HowTo from './how-to';
import App from './app';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/how-to' component={HowTo} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
});
