import ProfileAction from 'actions/profile'

export default function profile (state = { isLoggedIn: false, isFetching : false }, action) {
    switch (action.type) {
        case ProfileAction.FETCH_PROFILE_REQUEST:
            return { isLoggedIn: false, isFetching: true }
        case ProfileAction.FETCH_PROFILE_SUCCESS:
            return Object.assign({},
                                 action.data,
                                 { isLoggedIn: true, isFetching: false })
        case ProfileAction.FETCH_PROFILE_FAILURE:
            return {
                isLoggedIn: false,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
