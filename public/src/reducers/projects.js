import ProjectsAction from 'actions/projects'

export default function projects (state = { }, action) {
    switch (action.type) {
        case ProjectsAction.FETCH_PROJECTS_REQUEST:
            return { isFetching: true }
        case ProjectsAction.FETCH_PROJECTS_SUCCESS:
            return action.data
        case ProjectsAction.FETCH_PROJECTS_FAILURE:
            return {
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}
