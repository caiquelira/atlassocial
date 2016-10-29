import React from "react"
import * as Redux from 'redux'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import _ from 'underscore'

import * as ProjectsActionCreators from 'actions/projects'

import Box from "grommet/components/Box"
import Button from "grommet/components/Button"
import Heading from "grommet/components/Heading"
import Spinning from 'grommet/components/icons/Spinning'

import ProjectCard from "components/ProjectCard"
import ProjectFilter from 'components/ProjectFilter'

class Projects extends React.Component {

    constructor (props) {
        super(props)
        this.props.actions.fetchProjects()
    }

    render () {
        const { projects } = this.props
        console.log(projects)
        let content = null

        if (this.props.isFetching)    content =  <Spinning />
        else if (_.isEmpty(projects))  content = null
        else    content = projects.map(p => (<ProjectCard key={p._id} project={p}/>))

        return (
        <Box>
            <Heading strong={true} margin="large" align="center">
                <FormattedMessage id="project.projects" />
            </Heading>
            <ProjectFilter actions={this.props.actions}/>
            { content }
        </Box>
        )
    }
}

const filterProjects = (projects, filter) => filter ? projects.filter((p) => p.name.toLowerCase().includes(filter.text.toLowerCase())
                                                                          || p.description.toLowerCase().includes(filter.text.toLowerCase())
                                                                          || p.city.toLowerCase().includes(filter.text.toLowerCase()))
                                                                          : projects

const mapStateToProps = (state) => ({
    projects: filterProjects(state.projects.values, state.projects.filter),
    isFetching: state.projects.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(ProjectsActionCreators, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Projects)
