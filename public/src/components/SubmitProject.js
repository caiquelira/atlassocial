import React from "react"
import * as Redux from 'redux'
import { FormattedMessage } from 'react-intl'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import Dropzone from 'react-dropzone'
import request from 'superagent'

import * as ProjectsActionCreators from 'actions/projects'

import Box        from 'grommet/components/Box'
import Button     from 'grommet/components/Button'
import Footer     from 'grommet/components/Footer'
import Form       from 'grommet/components/Form'
import FormField  from 'grommet/components/FormField'
import FormFields from 'grommet/components/FormFields'
import Header     from 'grommet/components/Header'
import Heading    from 'grommet/components/Heading'
import Image      from 'grommet/components/Image'
import Select     from 'grommet/components/Select'

import TextField from 'components/TextField'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsxu7hxeg/upload'
const CLOUDINARY_PRESET = 'cijw2trn'

const STATES = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
                'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
                'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

class SubmitProject extends React.Component {

    constructor (props) {
        super(props)
        this._submit = this._submit.bind(this)
        this._onTypeText = this._onTypeText.bind(this)
        this._onSelectOption = this._onSelectOption.bind(this)
        this._onDrop = this._onDrop.bind(this)
    }

    _onTypeText(e) {
        e.preventDefault()
        const changeState = {}
        changeState[e.target.id] = e.target.value
        this.setState(changeState)
    }

    _onSelectOption({target , option}) {
        const changeState = {}
        changeState[target.id] = option
        this.setState(changeState)
    }

    async _onDrop(files) {
        // ToDo: Devia estar usando fetch
        const uploadedPic = files[0]
        let upload = request.post(CLOUDINARY_URL)
                                .field('upload_preset', CLOUDINARY_PRESET)
                                .field('file', uploadedPic)

        upload.end((err, response) => {
            if (err) {
                console.log(response)
            }
            if (response.body.secure_url !== '') {
                this.setState({picture: response.body.url})
            }
        })
    }

    async _submit(e) {
        e.preventDefault()
        this.setState({creator: this.props.myId})
        const id = await this.props.actions.submitProject(this.state)
        hashHistory.push('projects/' + id)
    }

    render () {
        const header = (
            <Header>
              <Heading>
                <FormattedMessage id="submit.title" />
              </Heading>
            </Header>)

        const footer = (
            <Footer pad={{"vertical": "medium"}}>
              <Button label={<FormattedMessage id="submit.back" />}
                path='/' />
              <Button label={<FormattedMessage id="submit.submit" />}
                type="submit"
                primary={true}
                onClick={this._submit} />
            </Footer>)

        const dropzoneOrPicture = this.state && this.state.picture ? 
                        (<Image src={this.state.picture} full="horizontal"/>) :
                        (<Dropzone
                              multiple={false}
                              accept="image/*"
                              onDrop={this._onDrop} >
                          <FormattedMessage id="submit.form.dropzone" />
                        </Dropzone>)

        const fields = (
            <FormFields >
              <TextField id="name" onChange={this._onTypeText}/>

              <FormField label={<FormattedMessage id="submit.form.picture" />}>
                <Box align="center">{dropzoneOrPicture}</Box>
              </FormField>

              <TextField id="description" rows={5} onChange={this._onTypeText}/>

              <Box direction="row">
                  <TextField id="city" onChange={this._onTypeText}/>
                  <FormField label={<FormattedMessage id="submit.form.state" />}>
                    <Select id="state"
                            options={STATES}
                            onChange={this._onSelectOption}
                            value={this.state ? this.state.state : ''} />
                  </FormField>
              </Box>

            </FormFields>)

        return (
            <Box direction="column" align="center">
              <Form id="form">
                {header}
                {fields}
                {footer}  
              </Form>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.projects.isFetching,
    myId: state.profile._id
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(ProjectsActionCreators, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(SubmitProject)
