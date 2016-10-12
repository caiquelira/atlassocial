import React from "react";

import {Link, hashHistory} from 'react-router';

import { FormattedMessage } from 'react-intl';

import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Hero from 'grommet/components/Hero';

import NavBar from './NavBar';
import AtlasFooter from './AtlasFooter';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    box(e) {
        hashHistory.push('/project');
    }

    render() {
        return (
          <App centered={false}>
            <Article>
                <NavBar title="Atlas" />
                <Hero colorIndex="brand" size="small">
                    <h1><FormattedMessage id="Lorem Ipsum"/></h1>
                </Hero>
                <AtlasFooter/>
            </Article>
          </App>
          );
    }
};
