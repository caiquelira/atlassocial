import React from 'react';

import {FormattedMessage} from 'react-intl';

import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
import Title from 'grommet/components/Title';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLoginLayer = this.toggleLoginLayer.bind(this);
        this.state = {
            showLogin: false
        };
        this.login = (<Layer closer={true} flush={true} onClose={this.toggleLoginLayer.bind(this)}>
                        <LoginForm title="Product Name" secondaryText="Product Secondary Text" onSubmit={this.callLogin.bind(this)} rememberMe={true}
                        forgotPassword={<a>Forgot password?</a>} errors={["Invalid username or password."]}
                        defaultValues={{ "username": "username@grommet.io", "rememberMe": true}} />
                      </Layer>);
    }
    callLogin (e) {
    }


    toggleLoginLayer() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    render() {
        return (
            <Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
              <Title>{this.props.title}</Title>
              <Button label={<FormattedMessage id="Entrar"/>} primary={true} onClick={this.toggleLoginLayer} />
              { this.state.showLogin ? this.login : null }
            </Header>
        );
    }
}
