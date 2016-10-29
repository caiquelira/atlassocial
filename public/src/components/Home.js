import React from "react"
import { FormattedMessage } from 'react-intl'  
import { hashHistory } from 'react-router'   

import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Hero from 'grommet/components/Hero'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'

import InfoIcon from 'grommet/components/icons/base/Info'
import UserAddIcon from 'grommet/components/icons/base/UserAdd'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Box>
                <Hero backgroundImage="../img/casdinho.jpg" colorIndex="accent-2-a">
                    <Headline strong={true}><FormattedMessage id="Lorem Ipsum"/></Headline>
                </Hero>
                <Box align="stretch" direction="row" full="horizontal" justify="center">
                    <Box pad={{horizontal: "large"}}>
                        <Card
                        margin="large"
                        contentPad="medium"
                        direction="column"
                        heading={<Heading align="center"><FormattedMessage id="home.idea"/></Heading>}
                        thumbnail={<Box align="center" pad="medium"><InfoIcon size="xlarge"/></Box>} />
                    </Box>
                    <Box pad={{horizontal: "large"}}>
                        <Card
                        margin="large"
                        contentPad="medium"
                        direction="column"
                        heading={<Heading align="center"><FormattedMessage id="home.engage"/></Heading>}
                        thumbnail={<Box align="center" pad="medium"><UserAddIcon size="xlarge"/></Box>}
                        onClick={() => this._(hashHistory.push('/projects'))} />
                    </Box>
                </Box>
            </Box>
            )
    }
};
