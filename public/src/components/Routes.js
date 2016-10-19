import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Home          from 'components/Home';
import LoginRequired from 'components/LoginRequired';
import Project       from 'components/Project';

export default class Routes extends React.Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/"        component={Home}    />
                <Route path="/project" component={LoginRequired(Project)} />
            </Router>);
    }
}
