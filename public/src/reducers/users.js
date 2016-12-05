import UsersActions from 'actions/users'

export default function projects (state = {}, action) {
    switch (action.type) {
        case UsersActions.FETCH_USER_REQUEST:
            return state
        case UsersActions.FETCH_USER_SUCCESS:
            return Object.assign({}, state, {[action.user._id]: action.user})
        case UsersActions.FETCH_USER_FAILURE:
            return state
        default:
            return state
    }
}
