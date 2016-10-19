import React from 'react';

import {FormattedMessage} from 'react-intl';

import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Menu   from 'grommet/components/Menu';

export default class LoginMenu extends React.Component {

    constructor () {
        super();
        this._login = this._login.bind(this);
        this.state = {loggedIn: false};
    }

    _login() {
        var myWindow = window.open('http://localhost:8080/auth-service/login/Facebook', "", "width=600,height=400");
        
        myWindow.onunload = function() {
            console.log(myWindow);
            console.log(myWindow.responseData);
        };
        this.setState({
            loggedIn: !this.state.loggedIn
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
                <Anchor href="#" className="active">
                    <FormattedMessage id="user.edit" />
                </Anchor>
                <Anchor href="#" onClick={this._login}>       
                    <FormattedMessage id="user.logout" />
                </Anchor>
            </Menu>);

        return this.state.loggedIn ? userMenu : loginButton;
    }
}
