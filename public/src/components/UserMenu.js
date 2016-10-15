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
        alert("clicou");
    }

    render () {

        const loginButton = (
            <Button
                label={<FormattedMessage id="login.login"/>}
                primary={true}
                onClick={this._login} />);
        
        const thumbNail = (<Image src="../../img/user.png" size="thumb" />);

        const userMenu = (
            <Menu icon={thumbNail} label="Lucas Müller">
              <Anchor href="#" className="active">
                <FormattedMessage id="user.edit" />
              </Anchor>
              <Anchor href="#">
                <FormattedMessage id="user.logout" />
              </Anchor>
            </Menu>);

        return this.state.loggedIn ? userMenu : loginButton;
    }
}
