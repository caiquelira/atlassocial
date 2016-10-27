import React from "react"
import * as Redux from 'redux'
import { connect } from 'react-redux'

import * as ProjectsActionCreators from 'actions/projects'

import Box from "grommet/components/Box"
import Button from "grommet/components/Button"
import Label from "grommet/components/Label"
import Paragraph from "grommet/components/Paragraph"
import Title from "grommet/components/Title"
import Tile from "grommet/components/Tile"
import Tiles from "grommet/components/Tiles"

import BaseArticle from "components/BaseArticle"
import ProjectCard from "components/ProjectCard"

class Projects extends React.Component {

    constructor (props) {
        super(props)
        this.projects = [{
            name: "Projeto do Yano",
            description: "projeto usando node e react",
            picture: "http://placehold.it/400x250",
            location: "Sao Paulo"
        }]

    }

    _test () {
        console.log("teste")
    }

    render () {
        console.log(this.props.projects)
        return (
            <BaseArticle>
                <Button label="TESTE" onClick={this._test.bind(this)}/>
                { this.projects.map(p => (<ProjectCard key={p.name} project={p}/>)) } 
            </BaseArticle>
            )
    }
}


const mapStateToProps = (state) => ({
    projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(ProjectsActionCreators, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Projects)
