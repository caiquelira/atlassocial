import 'grommet/grommet-hpe.min.css';

import React        from "react";
import ReactDOM     from "react-dom";
import * as Redux   from 'redux';
import { Provider } from 'react-intl-redux';
import mainReducer  from 'reducers/mainReducer';

import Routes from 'components/Routes';

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

const initialState = {
    intl: {
        locale: localeData.locale,
        messages: localeData.messages
    }
};

const store = Redux.createStore(mainReducer, initialState);

let element = document.getElementById('content');

ReactDOM.render((
    <Provider store={store}>
        <Routes />
    </Provider>
), element);

document.body.classList.remove('loading');
