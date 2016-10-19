import 'grommet/grommet-hpe.min.css';

import React from "react";
import ReactDOM from "react-dom";
import * as Redux from 'redux';
import { Provider, intlReducer } from 'react-intl-redux';

import Routes from './components/Routes';

// Localization
import { addLocaleData } from 'react-intl';
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

// Redux
const reducer = Redux.combineReducers({
    intl: intlReducer
});
const initialState = {
    intl: {
        locale: localeData.locale,
        messages: localeData.messages
    }
};
const store = Redux.createStore(reducer, initialState);

ReactDOM.render((
    <Provider store={store}>
        <Routes />
    </Provider>
), element);

document.body.classList.remove('loading');
