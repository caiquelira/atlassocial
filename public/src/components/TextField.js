import React from "react"
import { FormattedMessage } from 'react-intl'

import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Textarea  from 'react-textarea-autosize'

export default class TextField extends React.Component {

    render () {
        const { id, onChange, rows } = this.props
        return (
            <FormField label={<FormattedMessage id={"submit.form." + id} />}>
              { rows ? <Textarea id={id} rows={rows} onChange={onChange}/> : 
                       <TextInput id={id} onDOMChange={onChange}/>}
            </FormField>
        )
    }
}
