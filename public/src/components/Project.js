import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProjectsActionCreators from 'actions/projects'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'

class Project extends React.Component {

    render() {
        const { picture, name, description, city} = this.props.project
        return (
            <Box direction="column">
                <Box pad="large" direction="row">
                    <Box><Image src={picture}/></Box>
                    <Box>
                        <Heading>{name}</Heading>
                        <Label>{city}</Label>
                    </Box>
                </Box>
                <Box full="horizontal">
                    <Paragraph>{description}</Paragraph>
                </Box>
            </Box>
          )
    }
}

const mapStateToProps = (state, ownProps) => ({
    project: state.projects.values.find((p) => p._id == ownProps.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ProjectsActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
