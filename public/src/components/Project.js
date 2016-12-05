import React from "react"
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProjectsActionCreators from 'actions/projects'
import * as UsersActionCreators from 'actions/users'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Paragraph from 'grommet/components/Paragraph'

class Project extends React.Component {

    constructor (props) {
        super(props)
        this._contribute = this._contribute.bind(this)
        if (!this.props.project)
            this.props.actions.fetchProjects()
        this.props.fetchRelatedUsers(this.props.params.id)
    }

    _contribute() {

    }

    render() {
        if (!this.props.project) {
            return <Box />
        }

        const { picture, name, description, city, state, creator: creatorId } = this.props.project
        const creator = this.props.users[creatorId]
        console.log(this.props.profile)
        const contr = creatorId === this.props.profile._id ? 
              (<Button label={<FormattedMessage id="project.isAdmin"/>} />)
             :(<Button label={<FormattedMessage id="project.contribute"/>} onClick={this._contribute}/>)

        return (    
            <Box direction="column" justify="between" pad="medium" margin="medium">
              <Box direction="row" justify="between">
                <Box basis="1/3" >
                  <Image src={picture}/>
                </Box>
                <Box basis="2/3" direction="column" align="center" full="horizontal" pad="medium">
                  <Heading strong={true}>{name}</Heading>
                  <Heading tag="h3">{city + '/' + state}</Heading>
                  <Label><FormattedMessage id="project.responsible" />: {creator ? creator.name : ''}</Label>
                  {contr}
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
    project: state.projects.values.find((p) => p._id == ownProps.params.id),
    users: state.users,
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ProjectsActionCreators, dispatch),
    fetchRelatedUsers: (id) => dispatch(UsersActionCreators.fetchRelatedUsers(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
