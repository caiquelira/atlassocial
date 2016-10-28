import React from 'react'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'

import ProfileMenu from 'components/ProfileMenu'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    callLogin (e) {}

    render() {
        return (
            <Header direction="row" justify="between" pad={{horizontal: 'medium'}}>
              <Title>{this.props.title}</Title>
              <ProfileMenu />
            </Header>
        )
    }
}
