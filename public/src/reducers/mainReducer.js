import * as Redux      from 'redux';
import user            from 'reducers/user';
import { intlReducer } from 'react-intl-redux';

export default Redux.combineReducers({
    intl: intlReducer
});

