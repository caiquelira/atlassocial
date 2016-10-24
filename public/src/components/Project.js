import React from "react"

import App from "grommet/components/App"
import Box from "grommet/components/Box"
import Button from "grommet/components/Button"
import Header from "grommet/components/Header"
import Label from "grommet/components/Label"
import Paragraph from "grommet/components/Paragraph"
import Title from "grommet/components/Title"
import Tile from "grommet/components/Tile"
import Tiles from "grommet/components/Tiles"
import Value from "grommet/components/Tiles"

export default class Project extends React.Component {

    constructor (props) {
        super(props)
        this.tags = ["web", "programação"]
        this.skills = ["nodejs", "reactjs"]
        this.address = "São José dos Campos"
        this.members = [ "Caíque", "Felipeh", "Marina", "Muller"]

    }

    render () {
        return (
            <App centered={false}>
              <Header direction="row" justify="between" large={true} pad={{horizontal: 'medium'}} colorIndex="neutral-1">
                <Title>Projeto do Yano</Title>
                <Button label="Sair" primary={true} />
              </Header>
              <Box direction="column">
                  <Box margin="small" colorIndex="neutral-3">
                    <Tiles>
                        <Tile><h2>Tags</h2></Tile>
                        {this.tags.map((t) => (<Tile><h3>{t}</h3></Tile>))}
                    </Tiles>
                  </Box>
                  <Box margin="small" colorIndex="neutral-3">
                    <Tiles>
                        <Tile><h2>Habilidades</h2></Tile>
                        {this.skills.map((s) => (<Tile><h3>{s}</h3></Tile>))}
                    </Tiles>
                  </Box>
                  <Box margin="small" colorIndex="neutral-3">
                    <Tiles>
                        <Tile><h2>Local</h2></Tile>
                        <Tile><h3>{this.address}</h3></Tile>
                    </Tiles>
                  </Box>
                  <Box margin="small" colorIndex="neutral-4" pad="small">
                      <Paragraph size="large" align="center" flex="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                  </Box>
                  <Box margin="small" colorIndex="neutral-3" pad="small">
                      <Label><h2>Trabalhando Aqui:</h2></Label>
                      <Tiles>
                        {this.members.map((s) => (<Tile><h3>{s}</h3></Tile>))}
                      </Tiles>
                  </Box>
              </Box>
            </App>
            )
    }
}