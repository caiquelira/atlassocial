import * as Redux      from 'redux'
import { intlReducer } from 'react-intl-redux'
import profile         from 'reducers/profile'
import projects        from 'reducers/projects'
import users           from 'reducers/users'

export default Redux.combineReducers({
    intl: intlReducer,
    profile,
    projects,
    users
})

