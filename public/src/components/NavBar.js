import React from 'react'
import { FormattedMessage } from 'react-intl' 
import { hashHistory } from 'react-router'  

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'

import ProfileMenu from 'components/ProfileMenu'

const MENU_LINKS = ['home', 'projects', 'submit']

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this._goTo = this._goTo.bind(this)
    }

    callLogin (e) {}

    _goTo(link) {
        if (link === 'submit')
            console.log('nao implementado')
        else {
            if (link === 'home')
                link = ''
            hashHistory.push(link)
        }
    }


    render() {
        const { title } = this.props

        console.log(this.context)

        const menuAnchors = (
            MENU_LINKS.map(link => ( 
                <Anchor key={link}
                        label={<FormattedMessage id={'link.' + link}/>}
                        onClick={() => this._goTo(link)} />
            )))

        return (
            <Header direction="row" justify="between" pad={{horizontal: 'medium'}}>
              <Title>{title}</Title>
              <Box alignContent="start">
                <Menu inline={true} direction="row">
                  {menuAnchors}
                </Menu>
              </Box>
              <ProfileMenu />
            </Header>
        )
    }
}
