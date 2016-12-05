import { Enum } from 'enumify'
import Config from 'Config'

export default class ProjectsActions extends Enum {}
ProjectsActions.initEnum([
    'SUBMIT_PROJECT_REQUEST',
    'SUBMIT_PROJECT_SUCCESS',
    'SUBMIT_PROJECT_FAILURE',
    'FETCH_PROJECTS_REQUEST',
    'FETCH_PROJECTS_SUCCESS',
    'FETCH_PROJECTS_FAILURE',
    'FILTER_PROJECTS'
])

// SUBMIT

const submitProjectRequest = (data) => ({
    type: ProjectsActions.SUBMIT_PROJECT_REQUEST,
    data
})

const submitProjectSuccess = (project) => ({
    type: ProjectsActions.SUBMIT_PROJECT_SUCCESS,
    project
})

const submitProjectFailure = (error) => ({
    type: ProjectsActions.SUBMIT_PROJECT_FAILURE,
    error
})

export const submitProject = (data) => async (dispatch) => {
    try {
        dispatch(submitProjectRequest(data))
        const response = await fetch(Config.PROJECTS_URL, {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(data)
        })
        const project = await response.json()
        dispatch(submitProjectSuccess(project.SUCCESS))
        return project.SUCCESS._id
    } catch (error) {
        dispatch(submitProjectFailure(error))
        return ''
    }
}

// FETCH ALL

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

// AUX

export const filterProjects = (filter) => ({
    type: ProjectsActions.FILTER_PROJECTS,
    filter
})
