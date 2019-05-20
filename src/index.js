import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Category from './category';
import Movie from './movie';
import NoMatch from './nomatch';
import Navigation from './navigation';
import Search from'./search';
import * as serviceWorker from './serviceWorker';   
const routing = (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/category/:category" component={Category} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/search/:query" component={Search} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
