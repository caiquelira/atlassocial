import { Enum } from 'enumify'
import Config from 'Config'

export default class ProfileActions extends Enum {}
ProfileActions.initEnum([
    'FETCH_PROFILE_REQUEST',
    'FETCH_PROFILE_SUCCESS',
    'FETCH_PROFILE_FAILURE'
])

const fetchProfileRequest = (id) => ({
    type: ProfileActions.FETCH_PROFILE_REQUEST,
    id
})

const fetchProfileSuccess = (data) => ({
    type: ProfileActions.FETCH_PROFILE_SUCCESS,
    data
})

const fetchProfileFailure = (error) => ({
    type: ProfileActions.FETCH_PROFILE_FAILURE,
    error
})

export const fetchProfile = (id) => async (dispatch) => {
    // console.log(dispatch)
    try {
        dispatch(fetchProfileRequest(id))
        const response = await fetch(Config.USERS_URL + id)
        const user = await response.json()
        //onsole.log(user)
        dispatch(fetchProfileSuccess(user))
    } catch (error) {
        //console.log("Erro no fetch user")
        dispatch(fetchProfileFailure(error))
    }
}
