import ProjectsAction from 'actions/projects'

export default function projects (state = { }, action) {
    switch (action.type) {
        case ProjectsAction.FETCH_PROJECTS_REQUEST:
            return Object.assign({}, state, { isFetching: true })
        case ProjectsAction.FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, { values: action.data, isFetching: false} )
        case ProjectsAction.FETCH_PROJECTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        case ProjectsAction.FETCH_PROJECTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        case ProjectsAction.FILTER_PROJECTS:
            return Object.assign({}, state, {
                filter: action.filter
            })
        default:
            return state
    }
}
