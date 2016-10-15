import 'grommet/grommet-hpe.min.css';

import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Home';
import Project from './components/Project';

// Localization
import { IntlProvider, addLocaleData } from 'react-intl';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
const locale = getCurrentLocale();
import pt from 'react-intl/locale-data/pt';
addLocaleData(pt);
import en from 'react-intl/locale-data/en';
addLocaleData(en);

let messages;
try {
    messages = require(`./messages/${locale}`);
} catch (e) {
    messages = require('./messages/pt-BR');
}
const localeData = getLocaleData(messages, locale);


let element = document.getElementById('content');

//ReactDOM.render(React.createElement(Home), element);

ReactDOM.render((
    <IntlProvider locale={localeData.locale} messages={localeData.messages}>
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/project" component={Project}/>
      </Router>
    </IntlProvider>
), element);



      // <Route path="*" component={NoMatch}/>
document.body.classList.remove('loading');
