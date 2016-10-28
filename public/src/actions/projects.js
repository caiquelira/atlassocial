import { Enum } from 'enumify'
import Config from 'Config'

export default class ProjectsActions extends Enum {}
ProjectsActions.initEnum([
    'FETCH_PROJECTS_REQUEST',
    'FETCH_PROJECTS_SUCCESS',
    'FETCH_PROJECTS_FAILURE'
])

const fetchProjectsRequest = () => ({
    type: ProjectsActions.FETCH_PROJECTS_REQUEST
})

const fetchProjectsSuccess = (data) => ({
    type: ProjectsActions.FETCH_PROJECTS_SUCCESS,
    data
})

const fetchProjectsFailure = (error) => ({
    type: ProjectsActions.FETCH_PROJECTS_FAILURE,
    error
})

export const fetchProjects = () => async (dispatch) => {
    try {
        dispatch(fetchProjectsRequest())
        const response = await fetch(Config.PROJECTS_URL)
        const projects = await response.json()
        dispatch(fetchProjectsSuccess(projects))
    } catch (error) {
        dispatch(fetchProjectsFailure(error))
    }
}
