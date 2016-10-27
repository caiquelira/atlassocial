import React from "react"
import { FormattedMessage } from 'react-intl'   

import Hero from 'grommet/components/Hero'

import BaseArticle from 'components/BaseArticle'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BaseArticle>
                <Hero colorIndex="brand" size="small">
                    <h1><FormattedMessage id="Lorem Ipsum"/></h1>
                </Hero>
            </BaseArticle>
            )
    }
};
