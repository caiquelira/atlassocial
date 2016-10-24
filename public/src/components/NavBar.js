import React from 'react'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'

import UserMenu from 'components/UserMenu'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    callLogin (e) {}

    render() {
        return (
            <Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
              <Title>{this.props.title}</Title>
              <UserMenu />
            </Header>
        )
    }
}
