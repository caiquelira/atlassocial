import React from "react";
import ReactDOM from "react-dom";

import {Link, hashHistory} from 'react-router';

import App from 'grommet/components/App';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Hero from 'grommet/components/Hero';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import LoginForm from 'grommet/components/LoginForm';
import Box from 'grommet/components/Box';
import { FormattedMessage } from 'react-intl';

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

  box(e) {
    // alert("clicou")
    hashHistory.push('/project');
  }

  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}}>
          <Title>Atlas</Title>
          <Button label={<FormattedMessage id="Entrar"/>} primary={true} onClick={this.toggleLoginLayer.bind(this)} />
          { this.state.showLogin ? this.login : null }
        </Header>
        <Hero colorIndex="brand" size="small">
            <h1><FormattedMessage id="Lorem Ipsum"/></h1>
        </Hero>
        <Box direction="row">
          <Box size="medium" basis="1/2" pad="medium" align="center" justify="center">
            <Box size="medium" pad="large" align="center" justify="center" textAlign="center" colorIndex="neutral-6">
                <Button onClick={this.box.bind(this)} label={<h1><FormattedMessage id="Tenho Uma Ideia" /></h1>}/>
            </Box>
          </Box>
          <Box size="medium" basis="1/2" pad="medium" align="center" justify="center">
            <Box size="medium" pad="large" align="center" justify="center" textAlign="center" colorIndex="neutral-6">
                <Button onClick={this.box.bind(this)} label={<h1><FormattedMessage id="Procuro Um Projeto" /></h1>}/>
            </Box>
          </Box>
        </Box>
        <Footer primary={true} appCentered={true} direction="column"
      align="center" pad="small" colorIndex="grey-1">
          <p>
            Built using <a href="http://grommet.io" target="_blank">Grommet</a>.
          </p>
        </Footer>
      </App>
      );
  }
};