import React from "react"

import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Box from 'grommet/components/Box'

import NavBar from 'components/NavBar'
import BaseFooter from 'components/BaseFooter'

export default class BaseArticle extends React.Component {

    render() {
        return (
            <App centered={false}>
                <Article>
                    <NavBar title="Atlas" />
                    <Box colorIndex="grey-4-a" pad="large">
                        { this.props.children }
                    </Box>
                    <BaseFooter/>
                </Article>
            </App>
          )
    }
};
