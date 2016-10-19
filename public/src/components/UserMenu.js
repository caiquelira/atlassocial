import React from 'react';

import {FormattedMessage} from 'react-intl';

import Anchor     from 'grommet/components/Anchor';
import Button     from 'grommet/components/Button';
import Image      from 'grommet/components/Image';
import Menu       from 'grommet/components/Menu';

import LoginLayer from 'components/LoginLayer';

export default class LoginMenu extends React.Component {

    constructor () {
        super();
        this._login = this._login.bind(this);
        this._logout = this._logout.bind(this);
        this._closeLoginLayer = this._closeLoginLayer.bind(this);
        this.state = {
            loggedIn: false,
            showLoginLayer: false
        };
    }

    _login() {
        this.setState({
            showLoginLayer: true
        });
    }

    _logout() {
        e.preventDefault();
        this.setState({
            showLoginLayer: false
        });
    }

    _closeLoginLayer(e) {
        this.setState({
            showLoginLayer: false
        });
    }

    render () {

        const loginButton = (
            <Button
                label={<FormattedMessage id="login.login"/>}
                primary={true}
                onClick={this._login} />);
        
        const thumbNail = (<Image src="../img/user.png" size="thumb" />);

        const userMenu = (
            <Menu icon={thumbNail} label="Lucas Müller">
                <Anchor href="#" >
                    <FormattedMessage id="user.edit" />
                </Anchor>
                <Anchor href="#" onClick={this._logout}>       
                    <FormattedMessage id="user.logout" />
                </Anchor>
            </Menu>);
        
        const loginLayer = (<LoginLayer
                                hidden={!this.state.showLoginLayer}
                                onClose={this._closeLoginLayer} />);

        return this.state.loggedIn ?
            <div>{loginLayer}{userMenu}</div>
          : <div>{loginLayer}{loginButton}</div>;
    }
}
