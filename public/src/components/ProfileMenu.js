import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import * as ProfileActionCreators from 'actions/profile'

import Anchor     from 'grommet/components/Anchor'
import Button     from 'grommet/components/Button'
import Image      from 'grommet/components/Image'
import Menu       from 'grommet/components/Menu'

import LoginLayer from 'components/LoginLayer'

class ProfileMenu extends React.Component {

    constructor () {
        super()
        this._login = this._login.bind(this)
        this._logout = this._logout.bind(this)
        this._closeLoginLayer = this._closeLoginLayer.bind(this)
        this.state = {
            showLoginLayer: false
        }
    }

    _login() {
        this.setState({
            showLoginLayer: true
        })
    }

    _logout() {
        e.preventDefault()
        this.setState({
            showLoginLayer: false
        })
    }

    _closeLoginLayer(e) {
        this.setState({
            showLoginLayer: false
        })
    }

    render () {
        const { name, isLoggedIn } = this.props.profile

        const loginButton = (
            <Button
                label={<FormattedMessage  id="login.login"/>}
                primary={true}
                onClick={this._login} />)
        
        const thumbNail = (<Image src="../img/profile.png" size="thumb" />)

        const profileMenu = (
            <Menu icon={thumbNail} label={name}>
                <Anchor href="#" >
                    <FormattedMessage id="profile.edit" />
                </Anchor>
                <Anchor href="#" onClick={this._logout}>       
                    <FormattedMessage id="profile.logout" />
                </Anchor>
            </Menu>)

        const loginLayer = (<LoginLayer
                                hidden={!this.state.showLoginLayer}
                                onClose={this._closeLoginLayer} />)

        return isLoggedIn ?
            <div>{loginLayer}{profileMenu}</div>
          : <div>{loginLayer}{loginButton}</div>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps)(ProfileMenu)
