import UserAction from 'actions/user'

export default function user(state = { isLoggedIn: false, isFetching : false }, action) {
    switch (action.type) {
        case UserAction.FETCH_USER_REQUEST:
            return { isLoggedIn: false, isFetching: true }
        case UserAction.FETCH_USER_SUCCESS:
            return Object.assign({},
                                 action.data,
                                 { isLoggedIn: true, isFetching: false })
        case UserAction.FETCH_USER_FAILURE:
            return {
                isLoggedIn: false,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
