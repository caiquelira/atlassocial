import React from 'react'
import { FormattedMessage } from 'react-intl'
import { hashHistory } from 'react-router'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import LinkNext from 'grommet/components/icons/base/LinkNext'

export default class ProjectCard extends React.Component {

    constructor (props) {
        super(props)
        this._onClick = this._onClick.bind(this)
    }

    _onClick (id) {
        hashHistory.push('projects/'+id)
    }
    render () {
        const { name, picture, city, _id} = this.props.project
        let { description } = this.props.project
        if (description.length > 200)   description = description.slice(0, 200) + '...'
        return (
            <Box colorIndex="light-2" pad="medium" margin={{horizontal: "large", vertical: "small"}}>
                <Card
                    direction="row"
                    size="xlarge"
                    label={city}
                    thumbnail={picture}
                    heading={name}
                    description={description}
                    link={<Anchor label={<FormattedMessage id="project.see"/>} icon={<LinkNext />} onClick={() => this._onClick(_id)} />}
                    onClick={() => this._onClick(_id)} />
            </Box>
            )
    }
}
