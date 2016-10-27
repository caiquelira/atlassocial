import React from 'react'

// import Card from 'grommet/components/Card'

import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Header from 'grommet/components/Header'
import Label from 'grommet/components/Label'

export default class ProjectCard extends React.Component {

    render () {
        const { name, description, picture, location } = this.props.project
        return (
            <Section>
                <Header><h3>{name}</h3></Header>
                <Label>{location}</Label>
                <Image src={picture} />
                <Paragraph>{description}</Paragraph>
            </Section>
            )
    }
}
