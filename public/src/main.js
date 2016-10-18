import 'grommet/grommet-hpe.min.css';

import React from "react";
import ReactDOM from "react-dom";

import Routes from './components/Routes';

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


ReactDOM.render((
    <IntlProvider locale={localeData.locale} messages={localeData.messages}>
        <Routes />
    </IntlProvider>
), element);

document.body.classList.remove('loading');
