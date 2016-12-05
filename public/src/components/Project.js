import React from "react"
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProjectsActionCreators from 'actions/projects'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Paragraph from 'grommet/components/Paragraph'

class Project extends React.Component {

    constructor (props) {
        super(props)
        if (!this.props.project)
            this.props.actions.fetchProjects()
    }
    render() {
        if (!this.props.project) {
            return <Box />
        }

        const { picture, name, description, city, state } = this.props.project
        const link = (<Anchor href="" label={<FormattedMessage id="project."/>} />)
        return (    
            <Box direction="column" align="between" pad="medium" margin="medium">
              <Box direction="row" justify="between">
                <Box basis="1/3" margin="medium" pad=" medium">
                  <Image src={picture}/>
                </Box>
                <Box basis="2/3" direction="column" align="center" full="horizontal" pad="medium">
                  <Heading strong={true}>{name}</Heading>
                  <Label>{city + '/' + state}</Label>
                </Box>
              </Box>
              <Box align="center">
                <Paragraph size="large">{description}</Paragraph>
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
