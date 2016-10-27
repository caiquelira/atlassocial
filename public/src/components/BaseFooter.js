import React from 'react'

import Footer from 'grommet/components/Footer'

export default class BaseFooter extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
              <p>
                Built using <a href="http://grommet.io" target="_blank">Grommet</a>.
              </p>
            </Footer>
        )
    }
}
