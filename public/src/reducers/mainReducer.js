import * as Redux      from 'redux'
import profile         from 'reducers/profile'
import { intlReducer } from 'react-intl-redux'

export default Redux.combineReducers({
    intl: intlReducer,
    profile
})

