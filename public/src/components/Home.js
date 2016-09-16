import React from "react";
import ReactDOM from "react-dom";

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Hero from 'grommet/components/Hero';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import LoginForm from 'grommet/components/LoginForm';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLogin: false
    };
    this.login = (<Layer closer={true} flush={true} onClose={this.toggleLoginLayer.bind(this)}>
            <LoginForm title="Product Name" secondaryText="Product Secondary Text" onSubmit={this.callLogin.bind(this)} rememberMe={true}
    forgotPassword={<a>Forgot password?</a>} errors={["Invalid username or password."]}
    defaultValues={{
      "username": "username@grommet.io",
      "rememberMe": true
    }} />
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
      <App centered={false}>
        <Header direction="row" justify="between" large={true}
      pad={{
        horizontal: 'medium'
      }}>
          <Title>Atlas</Title>
          <Button label="Login" primary={true} onClick={this.toggleLoginLayer.bind(this)} />
          { this.state.showLogin ? this.login : null }
        </Header>
        <Hero colorIndex="brand">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
        </Hero>
        <Footer primary={true} appCentered={true} direction="column"
      align="center" pad="small" colorIndex="grey-1">
          <p>
            Built using <a href="http://grommet.io" target="_blank">Grommet</a>.
          </p>
        </Footer>
      </App>
      );
  }
}
;