import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Home from './Home';
import LoginRequired from './LoginRequired';
import Project from './Project';

export default class Routes extends React.Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/"        component={Home}    />
                <Route path="/project" component={LoginRequired(Project)} />
            </Router>);
    }
}
