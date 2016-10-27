import * as Redux      from 'redux'
import { intlReducer } from 'react-intl-redux'
import profile         from 'reducers/profile'
import projects        from 'reducers/projects'

export default Redux.combineReducers({
    intl: intlReducer,
    profile,
    projects
})

