import { Enum } from 'enumify'
import Config from 'Config'

export default class UsersActions extends Enum {}
UsersActions.initEnum([
    'FETCH_USER_REQUEST',
    'FETCH_USER_SUCCESS',
    'FETCH_USER_FAILURE'
])

// FETCH SINGLE

const fetchUserRequest = (id) => ({
    type: UsersActions.FETCH_USER_REQUEST,
    id
})

const fetchUserSuccess = (user) => ({
    type: UsersActions.FETCH_USER_SUCCESS,
    user
})

const fetchUserFailure = (error) => ({
    type: UsersActions.FETCH_USER_FAILURE,
    error
})

export const fetchUser = (id) => async (dispatch) => {
    try {
        dispatch(fetchUserRequest(id))
        const response = await fetch(Config.USERS_URL + '/' + id)
        const user = await response.json()
        dispatch(fetchUserSuccess(user))
    } catch (error) {
        dispatch(fetchUserFailure(error))
    }
}

// FETCH RELATED

export const fetchRelatedUsers = (projectId) => async (dispatch) => {
    try {
        const response = await fetch(Config.PROJECTS_URL + '/' + projectId)
        const project = await response.json()
        // creator
        dispatch(fetchUser(project.creator))
    } catch (error) {
        console.log('*****' + error)
    }
}
