import 'grommet/grommet-hpe.min.css'

import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory } from 'react-router';

import App from 'grommet/components/App';
import Home from './components/Home';
import Project from './components/Project';


let element = document.getElementById('content');

//ReactDOM.render(React.createElement(Home), element);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/project" component={Project}/>
  </Router>
), element);



      // <Route path="*" component={NoMatch}/>
document.body.classList.remove('loading');