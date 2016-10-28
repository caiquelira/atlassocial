import React from "react"

import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'

export default class ProjectsFilter extends React.Component {

    constructor (props) {
        super(props)
        this._filterByText.bind(this)
        this.text = ''
    }

    _filterByText (event) {
        console.log(event.target.value)
    }

    render() {
        let text = ''
        return (
            <Box>
                <Search inline={true} placeHolder="Buscar" value={text} onDOMChange={this._filterByText} />
            </Box>
          )
    }
};
