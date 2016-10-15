import React from 'react';

import { FormattedMessage } from 'react-intl';

import Box     from 'grommet/components/Box';
import Button  from 'grommet/components/Button';
import Layer   from 'grommet/components/Layer';
import Menu    from 'grommet/components/Menu';
import Section from 'grommet/components/Section';

// TODO: Review Icons (was not updated)
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import GoogleIcon from 'grommet/components/icons/base/SocialGoogle';
import EmailIcon from 'grommet/components/icons/base/SocialEmail';

const OPTIONS = [{ key:"facebook", text: "login.facebook", icon: (<FacebookIcon />)},
                 { key:"google", text: "login.google", icon: (<GoogleIcon />)},
                 { key:"email", text: "login.email", icon: (<EmailIcon />)}];

export default class LoginLayer extends React.Component {

    constructor () {
        super();
        this._click = this._click.bind(this);
    }

    _click() {
        alert("clicou");
    }

    render () {

        // TODO: change interface
        const links = (
            OPTIONS.map(op => ( 
                    <Button
                    key={op.key}
                    onClick={this._click}
                    icon={op.icon}
                    fill={false}
                    label={<FormattedMessage id={op.text}/>} />
                )));

        let layer = (
            <Layer closer={true} align="center" hidden={this.props.hidden}>
                <Section>
                    <Box pad="medium" justify="between">
                        <Menu inline={true} direction="column">
                            {links}
                        </Menu>
                    </Box>
                </Section>
            </Layer>
            );

        return layer;
    }
}
