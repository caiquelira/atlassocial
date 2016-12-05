import ProjectsAction from 'actions/projects'

export default function projects (state = { values: [] }, action) {
    switch (action.type) {
        case ProjectsAction.SUBMIT_PROJECT_REQUEST:
            return state
        case ProjectsAction.SUBMIT_PROJECT_SUCCESS:
            let oldValues = state.values
            return Object.assign({}, state, {values: oldValues.concat([action.project])})
        case ProjectsAction.SUBMIT_PROJECT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        case ProjectsAction.FETCH_PROJECTS_REQUEST:
            return Object.assign({}, state, { isFetching: true })
        case ProjectsAction.FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, { values: action.data, isFetching: false} )
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
