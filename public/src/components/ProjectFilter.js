import React from "react"

import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'

export default class ProjectsFilter extends React.Component {

    constructor (props) {
        super(props)
        this._filterByText = this._filterByText.bind(this)
        this.state = {text: ''}
    }

    _filterByText (event) {
        const text = event.target.value
        this.setState({text})
        this.props.actions.filterProjects({text})
    }

    render() {
        return (
            <Box margin="large">
                <Search inline={true} size="medium" placeHolder="Buscar" defaultValue={this.state.text} onDOMChange={this._filterByText} />
            </Box>
          )
    }
};
